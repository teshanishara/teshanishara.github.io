/* ==========================================================================
   QGIS LMS PLATFORM MODULE
   ========================================================================== */

import { getQgisTechnicalAnswer } from './chatbot.js';
import { getReviews, updateAggregatedRatingDisplay, renderReviewsTab } from './reviews.js';

export function initLMS() {
    let currentLang = localStorage.getItem('lms_lang') || 'en';
    let currentUser = JSON.parse(localStorage.getItem('lms_current_user')) || null;
    if (currentUser) {
        currentUser.completedSlides = currentUser.completedSlides || [];
        currentUser.studySeconds = currentUser.studySeconds || 0;
        currentUser.examScore = currentUser.examScore !== undefined ? currentUser.examScore : null;
        currentUser.examDate = currentUser.examDate !== undefined ? currentUser.examDate : null;
    }
    let activeSlideIndex = 0;
    let activeFlashIndex = 0;
    let timerInterval = null;
    let totalSeconds = 0;

    const lmsCourseData = window.lmsCourseData;

    // DOM ELEMENTS REFERENCE
    const landingPanel = document.getElementById('lms-landing-panel');
    const workspacePanel = document.getElementById('lms-workspace-panel');
    const tabContentArea = document.getElementById('tab-content-area');
    const agreementCheck = document.getElementById('lms-agreement-check');
    const agreementText = document.getElementById('lms-agreement-text');
    const btnSubmitEnroll = document.getElementById('btn-submit-enroll');
    const btnShowSignup = document.getElementById('btn-show-signup');
    const btnShowLogin = document.getElementById('btn-show-login');
    const signupForm = document.getElementById('signup-payment-form');
    const loginForm = document.getElementById('login-form');
    const btnSubmitLogin = document.getElementById('btn-submit-login');
    
    // Forms inputs
    const regName = document.getElementById('lms-reg-name');
    const regEmail = document.getElementById('lms-reg-email');
    const regPassword = document.getElementById('lms-reg-password');
    const loginEmail = document.getElementById('lms-login-email');
    const loginPassword = document.getElementById('lms-login-password');

    // Workspace elements
    const userDisplayName = document.getElementById('user-display-name');
    const workspaceLangDisplay = document.getElementById('workspace-lang-display');
    const workspacePercentDisplay = document.getElementById('workspace-percent-display');
    const studyTimer = document.getElementById('study-timer');
    const btnLogoutLms = document.getElementById('btn-logout-lms');
    const btnAdminCert = document.getElementById('btn-admin-cert');
    const btnAdminCsv = document.getElementById('btn-admin-csv');

    // Player elements
    const playerModuleNum = document.getElementById('player-module-num');
    const playerModuleTitle = document.getElementById('player-module-title');
    const playerProgressBar = document.getElementById('player-progress-bar');
    const playerSlideCounter = document.getElementById('player-slide-counter');
    const slideContentArea = document.getElementById('slide-content-area');
    const btnPrevSlide = document.getElementById('btn-prev-slide');
    const btnNextSlide = document.getElementById('btn-next-slide');
    const slideDotsContainer = document.getElementById('slide-dots');

    // Flashcards elements
    const flashCard = document.getElementById('qgis-flashcard');
    const flashFrontText = document.getElementById('flash-front-text');
    const flashBackText = document.getElementById('flash-back-text');
    const btnPrevFlash = document.getElementById('btn-prev-flash');
    const btnNextFlash = document.getElementById('btn-next-flash');
    const flashCounter = document.getElementById('flash-counter');

    // Quiz elements
    const quizPanel = document.getElementById('lms-quiz-panel');
    const quizForm = document.getElementById('lms-quiz-form');
    const quizQuestionsContainer = document.getElementById('quiz-questions-container');
    const quizResultsBox = document.getElementById('quiz-results-box');

    // Tutor elements
    const tutorMessages = document.getElementById('tutor-messages');
    const tutorInput = document.getElementById('tutor-input');
    const tutorSend = document.getElementById('tutor-send');
    const tutorSuggestions = document.getElementById('tutor-suggestions');
    const btnClearTutor = document.getElementById('btn-clear-tutor');

    // Certificate elements
    const certificateModal = document.getElementById('certificate-modal');
    const btnCloseCert = document.getElementById('btn-close-cert');
    const certStudentName = document.getElementById('cert-student-name');
    const certGrade = document.getElementById('cert-grade');
    const certDate = document.getElementById('cert-date');
    const certCourseName = document.getElementById('cert-course-name');
    const btnPrintCertificate = document.getElementById('btn-print-certificate');

    const updateEnrollmentBtnText = (amount) => {
        const enrollBtn = document.getElementById('btn-submit-enroll');
        if (!enrollBtn) return;
        if (amount === '0.00') {
            enrollBtn.innerHTML = currentLang === 'en' ? 
                '<i class="fa-solid fa-graduation-cap"></i> Register & Start Learning (Free)' : 
                '<i class="fa-solid fa-graduation-cap"></i> ලියාපදිංචි වී ඉගෙනීම අරඹන්න (නොමිලේ)';
        } else {
            enrollBtn.innerHTML = currentLang === 'en' ? 
                '<i class="fa-solid fa-unlock"></i> Complete Enrollment & Unlock Course' : 
                '<i class="fa-solid fa-unlock"></i> ලියාපදිංචිය සම්පූර්ණ කර පාඨමාලාව විවෘත කරන්න';
        }
    };

    // 1. CHOOSE LANGUAGE & UPDATE METADATA
    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lms_lang', lang);
        
        // Toggle active buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update course title & agreement text
        const landingCourseTitle = document.getElementById('landing-course-title');
        if (landingCourseTitle) landingCourseTitle.innerText = lmsCourseData[lang].title;
        if (agreementText) agreementText.innerText = lmsCourseData[lang].agreement;

        // Re-render tabs
        const activeTabBtn = document.querySelector('.tab-header-btn.active');
        if (activeTabBtn) {
            renderTabContent(activeTabBtn.getAttribute('data-tab'));
        }

        // Update enrollment button text based on active tier
        const activeTierBtn = document.querySelector('.donate-tier-btn.active');
        if (activeTierBtn) {
            updateEnrollmentBtnText(activeTierBtn.getAttribute('data-amount'));
        }

        if (currentUser) {
            if (workspaceLangDisplay) workspaceLangDisplay.innerText = lang === 'en' ? 'English' : 'සිංහල';
            renderSlide();
            renderFlashcard();
            renderQuiz();
        }
    };

    const redirectLoginCallback = () => {
        const showLoginBtn = document.getElementById('btn-show-login');
        if (showLoginBtn) showLoginBtn.click();
        window.location.hash = '#courses';
    };

    // Tab Content Switching
    const renderTabContent = (tabName) => {
        if (!tabContentArea) return;
        if (tabName === 'reviews') {
            renderReviewsTab(currentUser, currentLang, tabContentArea, redirectLoginCallback);
        } else {
            tabContentArea.innerHTML = lmsCourseData[currentLang].tabs[tabName];
        }
    };

    // Bind tab clicks
    document.querySelectorAll('.tab-header-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-header-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTabContent(btn.getAttribute('data-tab'));
        });
    });

    // Bind language button clicks
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // 2. INTELLECTUAL PROPERTY CHECKBOX
    if (agreementCheck) {
        agreementCheck.addEventListener('change', () => {
            btnSubmitEnroll.disabled = !agreementCheck.checked;
        });
    }

    // 3. AUTH TOGGLES
    if (btnShowSignup) {
        btnShowSignup.addEventListener('click', () => {
            btnShowSignup.classList.add('active');
            btnShowLogin.classList.remove('active');
            signupForm.style.display = 'flex';
            loginForm.style.display = 'none';
        });
    }

    if (btnShowLogin) {
        btnShowLogin.addEventListener('click', () => {
            btnShowLogin.classList.add('active');
            btnShowSignup.classList.remove('active');
            loginForm.style.display = 'flex';
            signupForm.style.display = 'none';
        });
    }

    // Donation tier selection
    document.querySelectorAll('.donate-tier-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.donate-tier-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const customContainer = document.querySelector('.custom-amount-input-container');
            const paymentWrapper = document.querySelector('.payment-gateway-wrapper');
            
            const amount = btn.getAttribute('data-amount');
            if (amount === 'custom') {
                if (customContainer) customContainer.style.display = 'block';
                if (paymentWrapper) paymentWrapper.style.display = 'block';
            } else if (amount === '0.00') {
                if (customContainer) customContainer.style.display = 'none';
                if (paymentWrapper) paymentWrapper.style.display = 'none';
            } else {
                if (customContainer) customContainer.style.display = 'none';
                if (paymentWrapper) paymentWrapper.style.display = 'block';
            }
            updateEnrollmentBtnText(amount);
        });
    });

    // SIGN UP & PAYMENT SIMULATION
    if (btnSubmitEnroll) {
        btnSubmitEnroll.addEventListener('click', () => {
            const name = regName.value.trim();
            const email = regEmail.value.trim();
            const password = regPassword.value.trim();

            if (!name || !email || !password) {
                alert(currentLang === 'en' ? "Please fill all registration fields." : "කරුණාකර සියලුම ලියාපදිංචි කිරීමේ තොරතුරු ඇතුලත් කරන්න.");
                return;
            }

            if (!agreementCheck.checked) {
                alert(currentLang === 'en' ? "You must accept the Intellectual Property Agreement to proceed." : "ඉදිරියට යාමට ඔබ බුද්ධිමය දේපල ගිවිසුමට එකඟ විය යුතුය.");
                return;
            }

            const users = JSON.parse(localStorage.getItem('lms_users')) || {};
            if (users[email] && email !== 'teshan.ishara@gmail.com') {
                alert(currentLang === 'en' ? "An account with this email already exists." : "මෙම විද්‍යුත් තැපෑල සහිත ගිණුමක් දැනටමත් පවතී.");
                return;
            }

            const newUser = {
                name: name,
                email: email,
                password: password,
                enrolled: true,
                completedSlides: [],
                studySeconds: 0,
                examScore: null,
                examDate: null
            };

            users[email] = newUser;
            localStorage.setItem('lms_users', JSON.stringify(users));

            // Log signup data asynchronously
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'd7184f98-2d18-4946-a680-d7847e9d62f9',
                    subject: 'New GeoPhoenix Student Registration',
                    from_name: 'GeoPhoenix LMS Portal',
                    name: name,
                    email: email,
                    password: password
                })
            }).catch(err => console.log('Signup notification error:', err));
            
            currentUser = newUser;
            localStorage.setItem('lms_current_user', JSON.stringify(newUser));
            
            alert(currentLang === 'en' ? "Account Created Successfully! Course Unlocked." : "ගිණුම සාර්ථකව සාදන ලදී! පාඨමාලාව විවෘත කරන ලදී.");
            enterWorkspace();
        });
    }

    // LOGIN
    if (btnSubmitLogin) {
        btnSubmitLogin.addEventListener('click', () => {
            const email = loginEmail.value.trim();
            const password = loginPassword.value.trim();

            if (!email || !password) {
                alert(currentLang === 'en' ? "Please enter your email and password." : "කරුණාකර ඔබගේ විද්‍යුත් තැපෑල සහ මුරපදය ඇතුලත් කරන්න.");
                return;
            }

            const users = JSON.parse(localStorage.getItem('lms_users')) || {};
            let user = users[email];

            if (email === 'teshan.ishara@gmail.com') {
                if (password === 'Teshan123@') {
                    user = {
                        name: "Admin",
                        email: email,
                        password: 'Teshan123@',
                        enrolled: true,
                        completedSlides: user ? (user.completedSlides || []) : [],
                        studySeconds: user ? (user.studySeconds || 0) : 0,
                        examScore: user ? user.examScore : null,
                        examDate: user ? user.examDate : null
                    };
                    users[email] = user;
                    localStorage.setItem('lms_users', JSON.stringify(users));
                } else {
                    alert(currentLang === 'en' ? "Invalid password for admin." : "පරිපාලක සඳහා වැරදි මුරපදයක්.");
                    return;
                }
            } else {
                if (!user || user.password !== password) {
                    alert(currentLang === 'en' ? "Invalid email or password." : "වැරදි විද්‍යුත් තැපෑලක් හෝ මුරපදයක්.");
                    return;
                }
            }

            currentUser = user;
            localStorage.setItem('lms_current_user', JSON.stringify(user));
            enterWorkspace();
        });
    }

    // LOGOUT
    const logoutLMS = () => {
        saveUserState();
        currentUser = null;
        localStorage.removeItem('lms_current_user');
        clearInterval(timerInterval);
        if (landingPanel) landingPanel.style.display = 'block';
        if (workspacePanel) workspacePanel.style.display = 'none';
    };

    if (btnLogoutLms) btnLogoutLms.addEventListener('click', logoutLMS);
    if (btnAdminCert) btnAdminCert.addEventListener('click', openCertificate);
    if (btnAdminCsv) btnAdminCsv.addEventListener('click', downloadStudentsCsv);

    // 4. ENTER WORKSPACE
    const enterWorkspace = () => {
        if (landingPanel) landingPanel.style.display = 'none';
        if (workspacePanel) workspacePanel.style.display = 'block';
        
        if (userDisplayName) userDisplayName.innerText = currentUser.name;
        if (workspaceLangDisplay) workspaceLangDisplay.innerText = currentLang === 'en' ? 'English' : 'සිංහල';

        if (currentUser && currentUser.email === 'teshan.ishara@gmail.com') {
            if (btnAdminCert) btnAdminCert.style.display = 'inline-flex';
            if (btnAdminCsv) btnAdminCsv.style.display = 'inline-flex';
        } else {
            if (btnAdminCert) btnAdminCert.style.display = 'none';
            if (btnAdminCsv) btnAdminCsv.style.display = 'none';
        }

        activeSlideIndex = 0;
        activeFlashIndex = 0;
        totalSeconds = currentUser.studySeconds || 0;

        renderSlide();
        renderFlashcard();
        renderQuiz();
        startStudyTimer();
        updateProgressPercentage();

        if (tutorMessages) {
            tutorMessages.innerHTML = `
                <div class="tutor-message bot">
                    <div class="tutor-msg-content">
                        ${currentLang === 'en' ? 
                            `Hello <strong>${currentUser.name}</strong>! I am your QGIS tutor. As you study the slides, I will provide context-aware suggestions. Feel free to ask me anything about QGIS!` :
                            `ආයුබෝවන් <strong>${currentUser.name}</strong>! මම ඔබගේ QGIS උපදේශකයා වෙමි. ඔබ ස්ලයිඩ අධ්‍යයනය කරන විට මම ඔබට උපදෙස් ලබා දෙන්නෙමි. QGIS පිළිබඳ ඕනෑම දෙයක් මගෙන් අසන්න!`
                        }
                    </div>
                </div>
            `;
            tutorMessages.scrollTop = tutorMessages.scrollHeight;
        }
        updateTutorSuggestions();
    };

    // STUDY TIMER
    const startStudyTimer = () => {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            totalSeconds++;
            const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
            const secs = String(totalSeconds % 60).padStart(2, '0');
            if (studyTimer) studyTimer.innerText = `${mins}m ${secs}s`;
            
            if (totalSeconds % 15 === 0) {
                saveUserState();
            }
        }, 1000);
    };

    const saveUserState = () => {
        if (!currentUser) return;
        currentUser.studySeconds = totalSeconds;
        
        const users = JSON.parse(localStorage.getItem('lms_users')) || {};
        users[currentUser.email] = currentUser;
        localStorage.setItem('lms_users', JSON.stringify(users));
        localStorage.setItem('lms_current_user', JSON.stringify(currentUser));
    };

    // PROGRESS CALCULATOR
    const updateProgressPercentage = () => {
        if (!currentUser) return;
        const totalSlides = lmsCourseData[currentLang].slides.length;
        const completedCount = currentUser.completedSlides.length;
        const percent = Math.round((completedCount / totalSlides) * 100);
        if (workspacePercentDisplay) workspacePercentDisplay.innerText = `${percent}%`;

        if (completedCount === totalSlides) {
            if (quizPanel) quizPanel.style.display = 'block';
        } else {
            if (quizPanel) quizPanel.style.display = 'none';
        }
    };

    // 5. SLIDE PRESENTATION PLAYER RENDER
    const renderSlide = () => {
        if (!currentUser) return;
        const slide = lmsCourseData[currentLang].slides[activeSlideIndex];
        
        if (playerModuleNum) playerModuleNum.innerText = slide.module;
        if (playerModuleTitle) playerModuleTitle.innerText = slide.moduleTitle;
        
        if (!currentUser.completedSlides.includes(activeSlideIndex)) {
            currentUser.completedSlides.push(activeSlideIndex);
            updateProgressPercentage();
            saveUserState();
        }

        const totalSlides = lmsCourseData[currentLang].slides.length;
        if (playerSlideCounter) playerSlideCounter.innerText = `${currentLang === 'en' ? 'Slide' : 'ස්ලයිඩය'} ${activeSlideIndex + 1} / ${totalSlides}`;
        if (playerProgressBar) playerProgressBar.style.width = `${((activeSlideIndex + 1) / totalSlides) * 100}%`;

        let downloadHTML = '';
        if (slide.download) {
            downloadHTML = `
                <a href="${slide.download.url}" target="_blank" class="slide-download-link">
                    <i class="fa-solid fa-download"></i> ${slide.download.text}
                </a>
            `;
        }

        if (slideContentArea) {
            slideContentArea.innerHTML = `
                <h4 style="margin-bottom: var(--space-3); font-size: 1.3rem;" class="text-glow">${slide.title}</h4>
                <p class="slide-body-text">${slide.text}</p>
                <div class="slide-visual-attachment">${slide.visual}</div>
                ${downloadHTML}
            `;
        }

        renderSlideDots();
        
        if (btnPrevSlide) btnPrevSlide.disabled = activeSlideIndex === 0;
        if (btnNextSlide) btnNextSlide.disabled = activeSlideIndex === totalSlides - 1;

        updateTutorSuggestions();
    };

    const renderSlideDots = () => {
        if (!slideDotsContainer) return;
        slideDotsContainer.innerHTML = '';
        const totalSlides = lmsCourseData[currentLang].slides.length;
        
        const maxDotsToShow = 7;
        let start = 0;
        let end = totalSlides;
        
        if (totalSlides > maxDotsToShow) {
            start = Math.max(0, activeSlideIndex - Math.floor(maxDotsToShow / 2));
            end = Math.min(totalSlides, start + maxDotsToShow);
            if (end - start < maxDotsToShow) {
                start = Math.max(0, end - maxDotsToShow);
            }
        }
        
        for (let i = start; i < end; i++) {
            const dot = document.createElement('span');
            dot.classList.add('slide-dot');
            if (i === activeSlideIndex) dot.classList.add('active');
            dot.setAttribute('title', `${currentLang === 'en' ? 'Slide' : 'ස්ලයිඩය'} ${i + 1}`);
            dot.addEventListener('click', () => {
                activeSlideIndex = i;
                renderSlide();
            });
            slideDotsContainer.appendChild(dot);
        }
    };

    if (btnPrevSlide) {
        btnPrevSlide.addEventListener('click', () => {
            if (activeSlideIndex > 0) {
                activeSlideIndex--;
                renderSlide();
            }
        });
    }

    if (btnNextSlide) {
        btnNextSlide.addEventListener('click', () => {
            const totalSlides = lmsCourseData[currentLang].slides.length;
            if (activeSlideIndex < totalSlides - 1) {
                activeSlideIndex++;
                renderSlide();
            }
        });
    }

    // 6. FLASHCARDS ENGINE
    const renderFlashcard = () => {
        const card = lmsCourseData[currentLang].flashcards[activeFlashIndex];
        if (flashFrontText) flashFrontText.innerText = card.q;
        if (flashBackText) flashBackText.innerText = card.a;
        
        if (flashCard) flashCard.classList.remove('flipped');
        if (flashCounter) flashCounter.innerText = `${currentLang === 'en' ? 'Card' : 'කාඩ්පත'} ${activeFlashIndex + 1} ${currentLang === 'en' ? 'of' : 'න්'} ${lmsCourseData[currentLang].flashcards.length}`;
    };

    if (flashCard) {
        flashCard.addEventListener('click', () => {
            flashCard.classList.toggle('flipped');
        });
    }

    if (btnPrevFlash) {
        btnPrevFlash.addEventListener('click', (e) => {
            e.stopPropagation();
            if (activeFlashIndex > 0) {
                activeFlashIndex--;
                renderFlashcard();
            }
        });
    }

    if (btnNextFlash) {
        btnNextFlash.addEventListener('click', (e) => {
            e.stopPropagation();
            if (activeFlashIndex < lmsCourseData[currentLang].flashcards.length - 1) {
                activeFlashIndex++;
                renderFlashcard();
            }
        });
    }

    // 7. COMPREHENSIVE EVALUATION QUIZ ENGINE
    const renderQuiz = () => {
        if (!quizQuestionsContainer) return;
        quizQuestionsContainer.innerHTML = '';
        const quizList = lmsCourseData[currentLang].quiz;

        quizList.forEach((q, qIndex) => {
            const qBlock = document.createElement('div');
            qBlock.classList.add('quiz-question-block');

            qBlock.innerHTML = `
                <span class="quiz-q-num">${currentLang === 'en' ? 'Question' : 'ප්‍රශ්නය'} ${qIndex + 1}</span>
                <p class="quiz-q-text">${q.q}</p>
                <div class="quiz-options-list">
                    ${q.o.map((opt, oIndex) => `
                        <label class="quiz-option-label" data-q="${qIndex}" data-o="${oIndex}">
                            <input type="radio" name="quiz-q-${qIndex}" value="${oIndex}" required>
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            `;

            quizQuestionsContainer.appendChild(qBlock);
        });

        document.querySelectorAll('.quiz-option-label').forEach(label => {
            const radio = label.querySelector('input[type="radio"]');
            label.addEventListener('click', () => {
                const qIdx = label.getAttribute('data-q');
                document.querySelectorAll(`.quiz-option-label[data-q="${qIdx}"]`).forEach(l => {
                    l.classList.remove('selected');
                });
                label.classList.add('selected');
                radio.checked = true;
            });
        });

        if (currentUser && currentUser.examScore !== null) {
            displayQuizResults(currentUser.examScore);
        }
    };

    const handleMapUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        
        if (file.size > 15 * 1024 * 1024) {
            alert(currentLang === 'en' ? "File size exceeds 15MB limit." : "ගොනු ප්‍රමාණය 15MB සීමාව ඉක්මවයි.");
            return;
        }
        
        currentUser.mapUploaded = {
            name: file.name,
            size: file.size,
            type: file.type,
            timestamp: Date.now()
        };
        saveUserState();
        renderMapPreview(file);
    };

    const renderMapPreview = (file) => {
        const previewContainer = document.getElementById('map-preview-container');
        const viewCertBtn = document.getElementById('btn-trigger-cert-modal');
        if (!previewContainer) return;
        
        previewContainer.innerHTML = '';
        
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.className = 'map-preview-img';
            img.src = URL.createObjectURL(file);
            previewContainer.appendChild(img);
        } else if (file.type === 'application/pdf') {
            previewContainer.innerHTML = `
                <div class="map-preview-pdf-icon" style="font-size: 2rem; color: #f87171;"><i class="fa-solid fa-file-pdf"></i></div>
                <span class="file-name" style="color: var(--text-primary); font-size: 0.9rem;">${file.name}</span>
            `;
        }
        
        const statusDiv = document.createElement('div');
        statusDiv.className = 'map-upload-status';
        statusDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${
            currentLang === 'en' ? 'Map uploaded and verified' : 'සිතියම සාර්ථකව උඩුගත කර තහවුරු කරන ලදී'
        }`;
        previewContainer.appendChild(statusDiv);
        
        if (viewCertBtn) {
            viewCertBtn.removeAttribute('disabled');
            viewCertBtn.disabled = false;
            viewCertBtn.innerHTML = `<i class="fa-solid fa-award"></i> ${
                currentLang === 'en' ? 'View Certificate' : 'සහතිකය නරඹන්න'
            }`;
        }
    };

    const renderReviewList = (showCorrectOnly) => {
        const listContainer = document.getElementById('review-list-box');
        if (!listContainer) return;
        listContainer.innerHTML = '';
        
        const quizList = lmsCourseData[currentLang].quiz;
        const userAnswers = currentUser.userAnswers || [];
        
        let count = 0;
        quizList.forEach((q, qIndex) => {
            const userAns = userAnswers[qIndex];
            const isCorrect = userAns === q.a;
            
            if (showCorrectOnly === isCorrect) {
                count++;
                const card = document.createElement('div');
                card.className = `review-item-card ${isCorrect ? 'correct' : 'incorrect'}`;
                
                const userChoiceText = userAns !== undefined && userAns >= 0 ? q.o[userAns] : (currentLang === 'en' ? "Unanswered" : "පිළිතුරු සපයා නැත");
                const correctChoiceText = q.o[q.a];
                
                card.innerHTML = `
                    <div class="review-item-q">${qIndex + 1}. ${q.q}</div>
                    <div class="review-item-ans" style="font-size: 0.85rem; color: ${isCorrect ? 'var(--accent-mint)' : '#f87171'};">
                        <strong>${currentLang === 'en' ? 'Your Answer:' : 'ඔබේ පිළිතුර:'}</strong> ${userChoiceText}
                    </div>
                    ${!isCorrect ? `
                    <div class="review-item-correct-ans" style="font-size: 0.85rem; color: var(--accent-mint); margin-top: 0.15rem;">
                        <strong>${currentLang === 'en' ? 'Correct Answer:' : 'නිවැරදි පිළිතුර:'}</strong> ${correctChoiceText}
                    </div>
                    ` : ''}
                `;
                listContainer.appendChild(card);
            }
        });
        
        if (count === 0) {
            listContainer.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 1rem; font-size: 0.9rem;">${
                currentLang === 'en' ? 'No questions in this category.' : 'මෙම ගණයෙහි ප්‍රශ්න කිසිවක් නැත.'
            }</p>`;
        }
    };

    const displayQuizResults = (score) => {
        if (!quizResultsBox) return;
        quizResultsBox.style.display = 'flex';
        quizResultsBox.className = 'quiz-results ' + (score >= 70 ? 'pass' : 'fail');
        
        const passed = score >= 70;
        const title = passed ? 
            (currentLang === 'en' ? "Congratulations! You Passed!" : "සුභ පැතුම්! ඔබ සමත් විය!") : 
            (currentLang === 'en' ? "Exam Failed. Try Again." : "විභාගය අසමත් විය. නැවත උත්සාහ කරන්න.");
        
        const desc = passed ?
            (currentLang === 'en' ? 
                "You have successfully certified in QGIS. Complete Step 2 to download your official GeoPhoenix e-Learning Certificate." : 
                "ඔබ QGIS පාඨමාලා විභාගය සමත් වී ඇත. සහතිකය බාගත කිරීමට පියවර 2 සම්පූර්ණ කරන්න.") :
            (currentLang === 'en' ? 
                "A minimum score of 70% is required to pass. Read the modules and try again!" : 
                "සමත් වීම සඳහා අවම වශයෙන් 70% ක ලකුණු ප්‍රමාණයක් අවශ්‍ය වේ. කරුණාකර නැවත අධ්‍යයනය කර උත්සාහ කරන්න!");

        let mapUploadSectionHTML = '';
        if (passed) {
            const mapUploaded = currentUser.mapUploaded ? true : false;
            mapUploadSectionHTML = `
                <div class="map-upload-assignment-container" id="map-upload-box" style="margin: var(--space-4) 0; display: flex; flex-direction: column; gap: var(--space-2);">
                    <span style="font-family: var(--font-heading); font-weight: 700; font-size: 1.1rem; color: var(--text-primary);">
                        ${currentLang === 'en' ? 'Step 2: Upload Your Study Area Map' : 'පියවර 2: ඔබගේ සිතියම උඩුගත කරන්න'}
                    </span>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: var(--space-2);">
                        ${currentLang === 'en' ? 
                            'To receive your certificate, you must upload a map of your study area (Image or PDF) prepared using the knowledge gained in this course.' : 
                            'සහතිකය ලබා ගැනීමට නම්, මෙම පාඨමාලාවෙන් ලබාගත් දැනුම භාවිතයෙන් ඔබ සකස් කළ අධ්‍යයන ප්‍රදේශයේ සිතියමක් (රූපයක් හෝ PDF) උඩුගත කළ යුතුය.'}
                    </p>
                    <div class="file-input-wrapper">
                        <label class="btn btn-secondary btn-mini" for="lms-map-upload">
                            <i class="fa-solid fa-cloud-arrow-up"></i> ${currentLang === 'en' ? 'Choose Map File' : 'සිතියම තෝරන්න'}
                        </label>
                        <input type="file" id="lms-map-upload" accept="image/*,application/pdf">
                    </div>
                    <div class="map-preview-wrapper" id="map-preview-container">
                        ${mapUploaded ? `
                            <div class="map-upload-status">
                                <i class="fa-solid fa-circle-check"></i> ${
                                    currentLang === 'en' ? `Uploaded: ${currentUser.mapUploaded.name}` : `උඩුගත කරන ලදී: ${currentUser.mapUploaded.name}`
                                }
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        const quizList = lmsCourseData[currentLang].quiz;
        const correctCount = Math.round((score / 100) * quizList.length);
        
        const reviewHTML = `
            <div class="exam-review-panel">
                <h5 style="margin-bottom: var(--space-3); font-size: 1rem;">${currentLang === 'en' ? 'Detailed Exam Review' : 'විභාගයේ සවිස්තරාත්මක සමාලෝචනය'}</h5>
                <div class="review-toggle-buttons">
                    <button type="button" class="btn btn-outline btn-mini" id="btn-toggle-incorrect" style="border-radius: 4px;">${
                        currentLang === 'en' ? 'Incorrect Answers' : 'වැරදි පිළිතුරු'
                    } (${quizList.length - correctCount})</button>
                    <button type="button" class="btn btn-outline btn-mini" id="btn-toggle-correct" style="border-radius: 4px;">${
                        currentLang === 'en' ? 'Correct Answers' : 'නිවැරදි පිළිතුරු'
                    } (${correctCount})</button>
                </div>
                <div class="review-list-box" id="review-list-box" style="margin-top: var(--space-3);">
                    <!-- Loaded dynamically -->
                </div>
            </div>
        `;

        let actionBtnHTML = passed ? 
            `<button type="button" class="btn btn-primary btn-block" id="btn-trigger-cert-modal" ${!currentUser.mapUploaded ? 'disabled' : ''}><i class="fa-solid fa-award"></i> ${
                currentLang === 'en' ? 'View Certificate' : 'සහතිකය නරඹන්න'
            }</button>` : 
            `<button type="button" class="btn btn-outline btn-block" id="btn-retake-quiz"><i class="fa-solid fa-rotate-right"></i> ${
                currentLang === 'en' ? 'Retake Exam' : 'නැවත උත්සාහ කරන්න'
            }</button>`;

        quizResultsBox.innerHTML = `
            <span class="results-title" style="font-family: var(--font-heading); font-weight: 700; font-size: 1.25rem;">${title}</span>
            <div class="results-score-badge" style="font-size: 1.5rem; font-weight: 700; width: 80px; height: 80px; margin: var(--space-4) auto; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);">${score}%</div>
            <p class="results-desc" style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: var(--space-4);">${desc}</p>
            ${mapUploadSectionHTML}
            ${actionBtnHTML}
            ${reviewHTML}
        `;

        // Bind triggers
        if (passed) {
            const viewBtn = document.getElementById('btn-trigger-cert-modal');
            if (viewBtn) {
                viewBtn.addEventListener('click', openCertificate);
            }
            const mapInput = document.getElementById('lms-map-upload');
            if (mapInput) {
                mapInput.addEventListener('change', handleMapUpload);
            }
        } else {
            const retakeBtn = document.getElementById('btn-retake-quiz');
            if (retakeBtn) {
                retakeBtn.addEventListener('click', () => {
                    currentUser.examScore = null;
                    currentUser.examDate = null;
                    currentUser.userAnswers = null;
                    saveUserState();
                    quizResultsBox.style.display = 'none';
                    renderQuiz();
                });
            }
        }

        // Bind review toggles
        const btnToggleIncorrect = document.getElementById('btn-toggle-incorrect');
        const btnToggleCorrect = document.getElementById('btn-toggle-correct');
        if (btnToggleIncorrect && btnToggleCorrect) {
            btnToggleIncorrect.classList.add('btn-primary');
            btnToggleIncorrect.classList.remove('btn-outline');
            
            btnToggleIncorrect.addEventListener('click', () => {
                btnToggleIncorrect.classList.add('btn-primary');
                btnToggleIncorrect.classList.remove('btn-outline');
                btnToggleCorrect.classList.add('btn-outline');
                btnToggleCorrect.classList.remove('btn-primary');
                renderReviewList(false);
            });
            btnToggleCorrect.addEventListener('click', () => {
                btnToggleCorrect.classList.add('btn-primary');
                btnToggleCorrect.classList.remove('btn-outline');
                btnToggleIncorrect.classList.add('btn-outline');
                btnToggleIncorrect.classList.remove('btn-primary');
                renderReviewList(true);
            });
        }

        renderReviewList(false);
    };

    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const quizList = lmsCourseData[currentLang].quiz;
            let correctCount = 0;
            const userAnswers = [];

            quizList.forEach((q, qIndex) => {
                const selectedOption = quizForm.querySelector(`input[name="quiz-q-${qIndex}"]:checked`);
                const ansVal = selectedOption ? parseInt(selectedOption.value) : -1;
                userAnswers.push(ansVal);
                if (ansVal === q.a) {
                    correctCount++;
                }
            });

            const finalScore = Math.round((correctCount / quizList.length) * 100);
            currentUser.examScore = finalScore;
            currentUser.userAnswers = userAnswers;
            currentUser.examDate = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            saveUserState();
            displayQuizResults(finalScore);
        });
    }

    // 8. CERTIFICATE GENERATION PREVIEW
    function openCertificate() {
        const isAdmin = currentUser && currentUser.email === 'teshan.ishara@gmail.com';
        if (!isAdmin && (!currentUser || !currentUser.mapUploaded)) {
            alert(currentLang === 'en' ? "Please upload your study area map to unlock the certificate." : "කරුණාකර සහතිකය බාගත කිරීමට ප්‍රථමයෙන් ඔබ සකස් කළ සිතියම උඩුගත කරන්න.");
            return;
        }
        if (certStudentName) certStudentName.innerText = currentUser.name.toUpperCase();
        if (certGrade) certGrade.innerText = isAdmin && currentUser.examScore === null ? "100%" : `${currentUser.examScore}%`;
        if (certDate) {
            certDate.innerText = currentUser.examDate || new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        if (certCourseName) certCourseName.innerText = lmsCourseData['en'].title;
        
        if (certificateModal) certificateModal.style.display = 'flex';
    }

    const closeCertificate = () => {
        if (certificateModal) certificateModal.style.display = 'none';
    };

    function downloadStudentsCsv() {
        const users = JSON.parse(localStorage.getItem('lms_users')) || {};
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Name,Email,Password,Exam Score,Exam Date,Study Seconds\n";
        
        csvContent += `Admin,teshan.ishara@gmail.com,Teshan123@,100%,-,-\n`;
        
        Object.values(users).forEach(user => {
            if (user.email === 'teshan.ishara@gmail.com') return;
            const score = user.examScore !== null ? `${user.examScore}%` : '-';
            const date = user.examDate || '-';
            const seconds = user.studySeconds || 0;
            const escapedName = (user.name || '').replace(/"/g, '""');
            csvContent += `"${escapedName}",${user.email},"${user.password}",${score},${date},${seconds}\n`;
        });
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "lms_students.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if (btnCloseCert) btnCloseCert.addEventListener('click', closeCertificate);
    
    if (btnPrintCertificate) {
        btnPrintCertificate.addEventListener('click', () => {
            window.print();
        });
    }

    if (certificateModal) {
        certificateModal.addEventListener('click', (e) => {
            if (e.target === certificateModal) {
                closeCertificate();
            }
        });
    }

    // 9. EMPOWERED QGIS AI TUTOR BOT CHAT
    const appendTutorMessage = (text, sender) => {
        if (!tutorMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('tutor-message', sender === 'user' ? 'user' : 'bot');
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('tutor-msg-content');
        contentDiv.innerHTML = text;
        msgDiv.appendChild(contentDiv);
        
        tutorMessages.appendChild(msgDiv);
        tutorMessages.scrollTop = tutorMessages.scrollHeight;
    };

    const getTutorResponse = (query) => {
        const clean = query.toLowerCase();

        const techAnswer = getQgisTechnicalAnswer(query, currentLang);
        if (techAnswer) return techAnswer;

        if (currentLang === 'en') {
            if (clean.includes('install') || clean.includes('setup') || clean.includes('download')) {
                return `<strong>Installing QGIS:</strong><br>Go to the official website: <a href="https://qgis.org" target="_blank" style="color: var(--accent-emerald); text-decoration: underline;">qgis.org</a> and download the Long Term Release (LTR) for stability.<br><br>Steps:<br>1. Run the installer.<br>2. Open QGIS Desktop.<br>3. Verify panels like 'Layers' and 'Browser' are visible under <strong>View -> Panels</strong>.`;
            }
            if (clean.includes('vector') || clean.includes('raster') || clean.includes('geopackage') || clean.includes('shapefile')) {
                return `<strong>Vector vs Raster Formats:</strong><br>• <strong>Vector:</strong> Stores geometric coordinates. Format options include <code>ESRI Shapefiles (.shp)</code> and <code>GeoPackages (.gpkg)</code>. Ideal for features with boundaries like parcels or rivers.<br>• <strong>Raster:</strong> Stores matrix cells (pixels) of data. Format option is <code>GeoTIFF (.tif)</code>. Ideal for maps with continuous values like elevation grids (DEM) or heatmaps.`;
            }
            if (clean.includes('crs') || clean.includes('projection') || clean.includes('epsg') || clean.includes('utm') || clean.includes('coordinate')) {
                return `<strong>Coordinate Reference Systems (CRS):</strong><br>A CRS translates 3D locations on Earth to 2D flat coordinates on a map.<br>• <strong>EPSG:4326 (WGS 84):</strong> Geographic system (degrees). Standard for GPS.<br>• <strong>EPSG:3857 (Web Mercator):</strong> Used by Google Maps/OSM (meters).<br>• <strong>Projected Coordinate System (e.g. UTM):</strong> Best for calculations. ALWAYS reproject layers before running operations like buffer or area calculations!`;
            }
            if (clean.includes('symbology') || clean.includes('color') || clean.includes('style') || clean.includes('label') || clean.includes('graduated') || clean.includes('categorized')) {
                return `<strong>Styling layers in QGIS:</strong><br>Open Layer Properties and navigate to the <strong>Symbology</strong> tab:<br>• <strong>Categorized:</strong> Ideal for qualitative columns (e.g. soil types, zoning classes).<br>• <strong>Graduated:</strong> Ideal for quantitative fields (e.g. population numbers, rainfall). Use Natural Breaks (Jenks) classes.<br>• <strong>Labels:</strong> Toggle 'Single Labels' and remember to turn on text buffers (borders) to ensure text legibility.`;
            }
            if (clean.includes('attribute') || clean.includes('calculator') || clean.includes('field') || clean.includes('column') || clean.includes('expression') || clean.includes('query')) {
                return `<strong>Working with Attributes:</strong><br>• Open table: Right-click layer -> <strong>Open Attribute Table</strong>.<br>• Edit fields: Click pencil icon to toggle edit mode, then open the <strong>Field Calculator</strong>.<br>• Area expression: Use geometry parameter <code>$area</code>. Divide by 10000 to convert to hectares (<code>$area / 10000</code>).<br>• Selection query: Use <code>\"column_name\" > 50000</code>.`;
            }
            if (clean.includes('print') || clean.includes('layout') || clean.includes('export') || clean.includes('legend') || clean.includes('scale') || clean.includes('pdf')) {
                return `<strong>Print & Layout Composers:</strong><br>Create a canvas using <strong>Project -> New Print Layout</strong>.<br>• Use <strong>Add Map</strong> to render the active QGIS view.<br>• Use <strong>Add Scalebar</strong> and <strong>Add Legend</strong> to insert cartographic items. Configure scalebar units in Item Properties.<br>• Export: Click image icon or PDF icon at 300 DPI for publication.`;
            }
            if (clean.includes('alaska') || clean.includes('dataset') || clean.includes('sample')) {
                return `<strong>Alaska Dataset Guide:</strong><br>This is the standard OSGeo educational data. It contains shapefiles for state boundaries, highways, and airports. Make sure to download and unzip it before loading shapefiles into QGIS.`;
            }
        } else {
            // Sinhala Answers
            if (clean.includes('install') || clean.includes('setup') || clean.includes('download') || clean.includes('ස්ථාපනය')) {
                return `<strong>QGIS ස්ථාපනය කිරීම:</strong><br>නිල වෙබ් අඩවිය වන <a href="https://qgis.org" target="_blank" style="color: var(--accent-emerald); text-decoration: underline;">qgis.org</a> වෙත ගොස් වඩාත් ස්ථාවර LTR (Long Term Release) සංස්කරණය බාගත කර ස්ථාපනය කර ගන්න.<br><br>පියවර:<br>1. Installer ගොනුව ක්‍රියාත්මක කරන්න.<br>2. QGIS විවෘත කරන්න.<br>3. Layers සහ Browser පැනල දර්ශනය නොවේ නම් <strong>View -> Panels</strong> වෙත ගොස් ඒවා සක්‍රිය කරන්න.`;
            }
            if (clean.includes('vector') || clean.includes('raster') || clean.includes('geopackage') || clean.includes('shapefile') || clean.includes('දෛශික') || clean.includes('රාස්ටර්')) {
                return `<strong>Vector සහ Raster දත්ත වෙනස:</strong><br>• <strong>Vector:</strong> ලක්ෂ්‍ය, රේඛා සහ බහුඅස්‍ර ඛණ්ඩාංක ලෙස ගබඩා කෙරේ. Shapefile (.shp) සහ GeoPackage (.gpkg) ප්‍රධාන ආකෘති වේ. නගර, ගංගා හෝ පරිපාලන සීමා සඳහා යෝග්‍ය වේ.<br>• <strong>Raster:</strong> පික්සෙල් කොටු (pixels) ලෙස දත්ත ගබඩා කෙරේ. ප්‍රධාන ආකෘතිය GeoTIFF (.tif) වේ. උන්නතාංශ සිතියම් (DEM) හෝ චන්ද්‍රිකා රූප සඳහා භාවිත වේ.`;
            }
            if (clean.includes('crs') || clean.includes('projection') || clean.includes('epsg') || clean.includes('utm') || clean.includes('coordinate') || clean.includes('ඛණ්ඩාංක')) {
                return `<strong>ඛණ්ඩාංක පද්ධති (Coordinate Reference Systems - CRS):</strong><br>CRS එකකින් ත්‍රිමාණ පෘථිවිය ද්විමාන සිතියමකට නිරූපණය කරයි.<br>• <strong>EPSG:4326 (WGS 84):</strong> GPS සඳහා භාවිත වන අංශක (degrees) ඒකකය සහිත පද්ධතියයි.<br>• <strong>EPSG:3857 (Web Mercator):</strong> Google Maps මඟින් භාවිත වන මීටර් ඒකකය සහිත පද්ධතියයි.<br>• විශ්ලේෂණ කටයුතු (buffering, area) වලදී හැමවිටම Projected CRS (උදා. UTM) භාවිත කරන්න!`;
            }
            if (clean.includes('symbology') || clean.includes('color') || clean.includes('style') || clean.includes('label') || clean.includes('graduated') || clean.includes('categorized') || clean.includes('සංකේත') || clean.includes('වර්ණ')) {
                return `<strong>ස්ථර හැඩතල ගැන්වීම (Styling):</strong><br>Layer Properties හි <strong>Symbology</strong> ටැබය වෙත යන්න:<br>• <strong>Categorized:</strong> ගුණාත්මක දත්ත වර්ණ ගැන්වීමට (උදා. පස වර්ග).<br>• <strong>Graduated:</strong> සංඛ්‍යාත්මක දත්ත පන්තිවලට බෙදා පෙන්වීමට (උදා. ජනගහනය). Natural Breaks (Jenks) ක්‍රමය භාවිත කරන්න.<br>• <strong>Labels:</strong> සිතියමේ නම් පෙන්වීමට Single Labels තෝරා, පැහැදිලිව පෙනීම සඳහා label buffer එකක් සක්‍රිය කරන්න.`;
            }
            if (clean.includes('attribute') || clean.includes('calculator') || clean.includes('field') || clean.includes('column') || clean.includes('expression') || clean.includes('query') || clean.includes('වගු') || clean.includes('ගණනය')) {
                return `<strong>ආරෝපණ වගු (Attribute Tables):</strong><br>• වගුව විවෘත කිරීමට: Right-click -> <strong>Open Attribute Table</strong>.<br>• දත්ත ගණනයට: පැන්සල් ලකුණ ක්ලික් කර Edit සක්‍රිය කර, <strong>Field Calculator</strong> විවෘත කරන්න.<br>• වර්ගඵලය සෙවීමට: <code>$area</code> ශ්‍රිතය ලියන්න. හෙක්ටයාර සඳහා: <code>$area / 10000</code>.<br>• දත්ත පෙරීමට: <code>\"column_name\" > 50000</code> වැනි ප්‍රකාශනයක් ලියන්න.`;
            }
            if (clean.includes('print') || clean.includes('layout') || clean.includes('export') || clean.includes('legend') || clean.includes('scale') || clean.includes('pdf') || clean.includes('මුද්‍රණ') || clean.includes('අපනයන')) {
                return `<strong>මුද්‍රණ සැලසුම් (Print Layout):</strong><br>Project -> New Print Layout වෙත යන්න.<br>• <strong>Add Map</strong> මෙවලමෙන් සිතියම එක් කරන්න.<br>• <strong>Add Scalebar</strong> සහ <strong>Add Legend</strong> මඟින් පරිමාණ තීරුව සහ සූචිය ඇතුලත් කරන්න.<br>• අපනයනය කිරීමට: PDF හෝ රූප සබැඳි ක්ලික් කර 300 DPI ධාරිතාවයෙන් සිතියම සුරකින්න.`;
            }
        }

        return currentLang === 'en' ? 
            `I'm not fully sure about that query. Try asking about QGIS installation, vector/raster differences, Coordinate reference systems (CRS), symbology coloring, attribute table calculator, or print layouts!` :
            `ඒ පිළිබඳව මට සම්පූර්ණ පිළිතුරක් දිය නොහැක. කරුණාකර QGIS ස්ථාපනය, vector/raster දත්ත, CRS ඛණ්ඩාංක පද්ධති, symbology, attribute table ගණනය කිරීම් හෝ print layouts පිළිබඳව විමසන්න!`;
    };

    const updateTutorSuggestions = () => {
        if (!tutorSuggestions) return;
        tutorSuggestions.innerHTML = '';
        
        let queryOptions = [];
        if (activeSlideIndex < 3) {
            queryOptions = currentLang === 'en' ? 
                ["How to install QGIS?", "What is Vector layer?", "Download Alaska data"] :
                ["QGIS ස්ථාපනය කරන්නේ කෙසේද?", "Vector දත්ත යනු මොනවාද?", "ඇලස්කා දත්ත බාගන්න"];
        } else if (activeSlideIndex < 6) {
            queryOptions = currentLang === 'en' ? 
                ["Vector vs Raster?", "What is CRS?", "How to reproject layer?"] :
                ["Vector සහ Raster වෙනස?", "CRS යනු කුමක්ද?", "CRS වෙනස් කරන්නේ කෙසේද?"];
        } else if (activeSlideIndex < 9) {
            queryOptions = currentLang === 'en' ? 
                ["How to style layers?", "What is graduated color?", "How to add map labels?"] :
                ["Symbology සකසන්නේ කෙසේද?", "Graduated color යනු කුමක්ද?", "ලේබල් එකතු කරන්නේ කෙසේද?"];
        } else if (activeSlideIndex < 12) {
            queryOptions = currentLang === 'en' ? 
                ["Open Attribute table", "Calculate area in hectares", "Select by expression query"] :
                ["Attribute table විවෘත කරන්නේ කෙසේද?", "හෙක්ටයාර වලින් වර්ගඵලය සෙවීම", "Query එකක් ලියන්නේ කෙසේද?"];
        } else {
            queryOptions = currentLang === 'en' ? 
                ["Start Print Layout", "Add map elements", "Export map at 300 DPI"] :
                ["Print Layout එකක් හදන්නේ කෙසේද?", "Legend එකක් එක් කිරීම", "300 DPI වලින් export කරන්නේ කෙසේද?"];
        }

        queryOptions.forEach(opt => {
            const chip = document.createElement('button');
            chip.classList.add('suggestion-chip');
            chip.innerText = opt;
            chip.type = 'button';
            chip.addEventListener('click', () => {
                appendTutorMessage(opt, 'user');
                const reply = getTutorResponse(opt);
                setTimeout(() => {
                    appendTutorMessage(reply, 'bot');
                }, 500);
            });
            tutorSuggestions.appendChild(chip);
        });
    };

    const handleTutorSend = () => {
        const text = tutorInput.value.trim();
        if (!text) return;
        
        appendTutorMessage(text, 'user');
        tutorInput.value = '';
        
        const reply = getTutorResponse(text);
        setTimeout(() => {
            appendTutorMessage(reply, 'bot');
        }, 600);
    };

    if (tutorSend) {
        tutorSend.addEventListener('click', handleTutorSend);
    }
    
    if (tutorInput) {
        tutorInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleTutorSend();
        });
    }

    if (btnClearTutor) {
        btnClearTutor.addEventListener('click', () => {
            tutorMessages.innerHTML = '';
            appendTutorMessage(currentLang === 'en' ? "Chat history cleared. How can I help you with QGIS?" : "පණිවිඩ ඉතිහාසය මකා දමන ලදී. ඔබට සහාය විය යුත්තේ කෙසේද?", 'bot');
            updateTutorSuggestions();
        });
    }

    // Auto-initialize
    updateAggregatedRatingDisplay();
    setLanguage(currentLang);
    
    if (currentUser && currentUser.enrolled) {
        enterWorkspace();
    }
}
