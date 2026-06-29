/* ==========================================================================
   PORTFOLIO VIRTUAL CHATBOT ASSISTANT
   ========================================================================== */

export const getQgisTechnicalAnswer = (query, lang) => {
    const clean = query.toLowerCase();
    
    // Reproject / CRS / Projection
    if (clean.includes('reproject') || clean.includes('re-project') || clean.includes('warp') || clean.includes('crs') || clean.includes('projection') || clean.includes('epsg') || clean.includes('utm') || clean.includes('coordinate') || clean.includes('ඛණ්ඩාංක')) {
        if (lang === 'en') {
            return `<strong>How to Reproject a Layer in QGIS:</strong><br>
            Reprojecting changes the Coordinate Reference System (CRS) of a layer permanently:<br>
            1. Go to the menu bar: <strong>Vector -> Data Management Tools -> Reproject Layer</strong> (for vectors) or <strong>Raster -> Projections -> Warp (Reproject)</strong> (for rasters).<br>
            2. Select your <strong>Input Layer</strong>.<br>
            3. In <strong>Target CRS</strong>, click the globe icon and search for the desired system (e.g. WGS 84 / UTM Zone 44N, or EPSG:32644). Projected systems are required for accurate distance/area calculations.<br>
            4. Click <strong>Run</strong>. A temporary 'Reprojected' layer is created.<br>
            5. To make it permanent, right-click the reprojected layer -> <strong>Export -> Save Features As...</strong>, choose file path, and click OK.`;
        } else {
            return `<strong>QGIS හි ස්ථරයක (Layer) CRS එක වෙනස් කිරීම (Reproject):</strong><br>
            ස්ථරයක ඛණ්ඩාංක පද්ධතිය (CRS) ස්ථිරවම වෙනස් කිරීමට:<br>
            1. මෙනුවෙන්: <strong>Vector -> Data Management Tools -> Reproject Layer</strong> (Vector දත්ත සඳහා) හෝ <strong>Raster -> Projections -> Warp (Reproject)</strong> (Raster දත්ත සඳහා) තෝරන්න.<br>
            2. <strong>Input Layer</strong> එක ලෙස අදාළ ස්ථරය තෝරන්න.<br>
            3. <strong>Target CRS</strong> සඳහා ඔබට අවශ්‍ය ඛණ්ඩාංක පද්ධතිය තෝරන්න (උදා. UTM Zone ඛණ්ඩාංක ක්‍රමය).<br>
            4. <strong>Run</strong> ක්ලික් කරන්න. එවිට තාවකාලික 'Reprojected' ස්ථරයක් නිර්මාණය වේ.<br>
            5. එය ස්ථිරව සුරැකීමට: right-click -> <strong>Export -> Save Features As...</strong> වෙත ගොස් සුරකින්න.`;
        }
    }
    
    // Buffer analysis
    if (clean.includes('buffer') || clean.includes('proximity') || clean.includes('ප්‍රේරක') || clean.includes('බෆර්')) {
        if (lang === 'en') {
            return `<strong>How to Create a Buffer in QGIS:</strong><br>
            Buffer zones are polygons created at a specified distance around features:<br>
            1. Go to <strong>Vector -> Geoprocessing Tools -> Buffer</strong>.<br>
            2. Select your Input vector layer.<br>
            3. Set the <strong>Distance</strong> (e.g. 100 meters). *Note: If units are in degrees instead of meters, your layer is in a Geographic CRS (like WGS84). Reproject it to a Projected CRS (like UTM) first!*<br>
            4. Check 'Dissolve results' if you want overlapping buffers to merge.<br>
            5. Click <strong>Run</strong>.`;
        } else {
            return `<strong>QGIS හි ප්‍රේරක කලාප (Buffer) නිර්මාණය කිරීම:</strong><br>
            යම් ලක්ෂ්‍යයක් හෝ රේඛාවක් වටා නියමිත දුරකින් ප්‍රේරක සීමාවක් සෑදීමට:<br>
            1. <strong>Vector -> Geoprocessing Tools -> Buffer</strong> වෙත යන්න.<br>
            2. Input layer එක තෝරා <strong>Distance</strong> (දුර) ඇතුලත් කරන්න (උදා. මීටර් 100). *සටහන: දුර ඒකකය මීටර් වෙනුවට අංශක (degrees) ලෙස පෙන්වයි නම්, ස්ථරය Projected CRS (UTM) ක්‍රමයට Reproject කර ගන්න.*<br>
            3. overlapping buffers එකතු කිරීමට 'Dissolve results' තෝරා <strong>Run</strong> ක්ලික් කරන්න.`;
        }
    }
    
    // Clip / Intersect / Extract
    if (clean.includes('clip') || clean.includes('intersect') || clean.includes('cut') || clean.includes('කපන්න') || clean.includes('ඡේදනය')) {
        if (lang === 'en') {
            return `<strong>How to Clip/Extract a Layer in QGIS:</strong><br>
            Clipping cuts out an input layer based on the boundaries of an overlay polygon layer (like a cookie cutter):<br>
            1. Go to <strong>Vector -> Geoprocessing Tools -> Clip</strong>.<br>
            2. Set <strong>Input Layer</strong> as the layer you want to cut (e.g. roads, points).<br>
            3. Set <strong>Overlay Layer</strong> as your boundary polygon (e.g. city limits, study boundary).<br>
            4. Click <strong>Run</strong>. The output contains only features located inside the overlay boundaries.`;
        } else {
            return `<strong>QGIS හි ස්ථර කපා වෙන්කර ගැනීම (Clip):</strong><br>
            boundary polygon එකක් භාවිතයෙන් වෙනත් ස්ථරයකින් කොටසක් කපා ගැනීමට:<br>
            1. <strong>Vector -> Geoprocessing Tools -> Clip</strong> වෙත යන්න.<br>
            2. <strong>Input Layer</strong> එක ලෙස කපා ගැනීමට අවශ්‍ය ස්ථරය (උදා. මාර්ග) තෝරන්න.<br>
            3. <strong>Overlay Layer</strong> එක ලෙස සීමා මායිම් අඩංගු ස්ථරය (උදා. අධ්‍යයන සීමාව) තෝරන්න.<br>
            4. <strong>Run</strong> ක්ලික් කරන්න.`;
        }
    }
    
    // Import CSV / Delimited text
    if (clean.includes('csv') || clean.includes('import') || clean.includes('excel') || clean.includes('latitude') || clean.includes('longitude') || clean.includes('xy') || clean.includes('ඛණ්ඩාංක ඇතුලත්')) {
        if (lang === 'en') {
            return `<strong>How to Import CSV Coordinates in QGIS:</strong><br>
            To load XY coordinates from a spreadsheet:<br>
            1. Save your Excel sheet as a <strong>CSV (Comma Delimited)</strong> file.<br>
            2. In QGIS, go to <strong>Layer -> Add Layer -> Add Delimited Text Layer</strong>.<br>
            3. Click '...' to select your CSV file.<br>
            4. Under <strong>Geometry Definition</strong>, choose 'Point coordinates'.<br>
            5. Map the <strong>X field</strong> to Longitude (Easting) and <strong>Y field</strong> to Latitude (Northing).<br>
            6. Select the appropriate <strong>Geometry CRS</strong> (usually EPSG:4326 WGS 84 for decimal degrees).<br>
            7. Click <strong>Add</strong>.`;
        } else {
            return `<strong>QGIS වෙත CSV ඛණ්ඩාංක (Coordinates) ඇතුලත් කිරීම:</strong><br>
            Excel වගුවක ඇති ලක්ෂ්‍ය ඛණ්ඩාංක සිතියමට එක් කිරීමට:<br>
            1. Excel ගොනුව <strong>CSV (Comma Delimited)</strong> ආකාරයෙන් සුරකින්න.<br>
            2. QGIS හි <strong>Layer -> Add Layer -> Add Delimited Text Layer</strong> වෙත යන්න.<br>
            3. ඔබගේ CSV ගොනුව තෝරා, <strong>Geometry Definition</strong> යටතේ 'Point coordinates' තෝරන්න.<br>
            4. <strong>X field</strong> එකට Longitude ද, <strong>Y field</strong> එකට Latitude ද සම්බන්ධ කරන්න.<br>
            5. <strong>Geometry CRS</strong> ලෙස EPSG:4326 තෝරා <strong>Add</strong> ක්ලික් කරන්න.`;
        }
    }

    // Load Shapefile / GeoPackage
    if (clean.includes('shapefile') || clean.includes('shp') || clean.includes('gpkg') || clean.includes('geopackage') || clean.includes('load') || clean.includes('add layer')) {
        if (lang === 'en') {
            return `<strong>How to Load Shapefiles and GeoPackages:</strong><br>
            • <strong>GeoPackage (.gpkg):</strong> Drag and drop the <code>.gpkg</code> file from your file manager directly into the QGIS canvas, or browse to it via the Browser Panel, expand it, and drag the individual layers.<br>
            • <strong>Shapefile (.shp):</strong> Drag and drop the <code>.shp</code> file. Remember that a shapefile is a collection of files (including <code>.dbf, .shx, .prj</code>). Keep them in the same folder, otherwise QGIS cannot open the <code>.shp</code>!`;
        } else {
            return `<strong>Shapefiles සහ GeoPackages QGIS වෙත එක් කිරීම:</strong><br>
            • <strong>GeoPackage (.gpkg):</strong> <code>.gpkg</code> ගොනුව සෘජුවම QGIS canvas එක මතට drag and drop කරන්න.<br>
            • <strong>Shapefile (.shp):</strong> <code>.shp</code> දිගුව සහිත ගොනුව drag and drop කරන්න. *වැදගත්: shapefile එකක් යනු ගොනු කිහිපයක එකතුවකි (.shp, .dbf, .shx, .prj). මේ සියල්ල එකම ෆෝල්ඩරයක තිබිය යුතුය.*`;
        }
    }

    // Area/Geometry Calculation / Field Calculator
    if (clean.includes('area') || clean.includes('calculate') || clean.includes('field calculator') || clean.includes('perimeter') || clean.includes('length') || clean.includes('වර්ගඵලය') || clean.includes('ප්‍රමාණය ගණනය')) {
        if (lang === 'en') {
            return `<strong>How to Calculate Area or Geometry in QGIS:</strong><br>
            To compute areas or perimeters for vector features:<br>
            1. Right-click your vector layer and select <strong>Open Attribute Table</strong>.<br>
            2. Click the <strong>Open Field Calculator</strong> button (abacus icon, or shortcut Ctrl+I).<br>
            3. Check <strong>Create a new field</strong>, set Output field name (e.g. 'area_ha'), and change type to 'Decimal number (real)'.<br>
            4. In the expression box, type:
               - For Area in square meters: <code>$area</code>
               - For Area in Hectares: <code>$area / 10000</code>
               - For Perimeter or Line Length: <code>$length</code> or <code>$perimeter</code><br>
            5. Click <strong>OK</strong>. Make sure your layer is in a Projected CRS (e.g. UTM) for correct metric calculations.`;
        } else {
            return `<strong>QGIS හි වර්ගඵලය හෝ ජ්‍යාමිතිය ගණනය කිරීම:</strong><br>
            දත්ත ස්ථරයක වර්ගඵලය හෝ වටප්‍රමාණය සෙවීමට:<br>
            1. Vector ස්ථරය මත right-click කර <strong>Open Attribute Table</strong> තෝරන්න.<br>
            2. <strong>Open Field Calculator</strong> අයිකනය ක්ලික් කරන්න (Ctrl+I).<br>
            3. 'Create a new field' තෝරා, field name එක (උදා. 'area_ha') සහ field type එක 'Decimal number' ලෙස ලබා දෙන්න.<br>
            4. expression box එකෙහි මෙසේ ලියන්න:
               - වර්ග මීටර් වලින් වර්ගඵලය සෙවීමට: <code>$area</code>
               - හෙක්ටයාර වලින් වර්ගඵලය සෙවීමට: <code>$area / 10000</code>
               - දිග හෝ වටප්‍රමාණය සෙවීමට: <code>$length</code> හෝ <code>$perimeter</code><br>
            5. <strong>OK</strong> ක්ලික් කරන්න. (නිවැරදි මීටර් අගයන් ලබා ගැනීමට ස්ථරය Projected CRS එකක තිබිය යුතුය).`;
        }
    }

    // Spatial Join / Join by Location
    if (clean.includes('spatial join') || clean.includes('join by location') || clean.includes('combine layers') || clean.includes('සම්බන්ධ කරන්න')) {
        if (lang === 'en') {
            return `<strong>How to Perform a Spatial Join (Join Attributes by Location):</strong><br>
            To transfer attribute information from one layer to another based on spatial overlap (e.g. finding which district a school is inside):<br>
            1. Go to <strong>Vector -> Data Management Tools -> Join Attributes by Location</strong>.<br>
            2. Set <strong>Join to target layer</strong> as the layer receiving data (e.g. schools).<br>
            3. Set <strong>By comparing to join layer</strong> as the layer containing the attributes (e.g. districts).<br>
            4. Under <strong>Geometric predicate</strong>, select 'intersects' or 'is within'.<br>
            5. Select the join type (e.g. take attributes of the first matching feature).<br>
            6. Click <strong>Run</strong>.`;
        } else {
            return `<strong>QGIS හි අවකාශීය සම්බන්ධතාවය (Spatial Join / Join by Location):</strong><br>
            භූගෝලීය පිහිටීම මත පදනම්ව එක් ස්ථරයක ඇති තොරතුරු තවත් ස්ථරයකට එක් කිරීමට:<br>
            1. <strong>Vector -> Data Management Tools -> Join Attributes by Location</strong> වෙත යන්න.<br>
            2. <strong>Join to target layer</strong> එක ලෙස දත්ත ලබා ගන්නා ස්ථරය (උදා. පාසල්) තෝරන්න.<br>
            3. <strong>By comparing to join layer</strong> එක ලෙස සම්බන්ධ කිරීමට බලාපොරොත්තු වන ස්ථරය (උදා. දිස්ත්‍රික් සීමා) තෝරන්න.<br>
            4. Geometric predicate ලෙස 'intersects' හෝ 'is within' තෝරා <strong>Run</strong> ක්ලික් කරන්න.`;
        }
    }

    // Georeferencing
    if (clean.includes('georeferenc') || clean.includes('geo-referenc') || clean.includes('scanned map') || clean.includes('සිතියම් පෙළගැස්වීම')) {
        if (lang === 'en') {
            return `<strong>How to Georeference a Scanned Map in QGIS:</strong><br>
            To align a raster image / scanned map with real-world geographic coordinates:<br>
            1. Go to <strong>Layer -> Georeferencer</strong>.<br>
            2. Click the <strong>Open Raster</strong> icon and select your scanned map image (JPEG/PNG/TIFF).<br>
            3. Click on a known point (like a grid crosshair or boundary corner) on the map to add a point.<br>
            4. Enter the known X and Y coordinates (or click 'From Map Canvas' to match a base map).<br>
            5. Add at least 4 Ground Control Points (GCPs) distributed across the map.<br>
            6. Go to <strong>Transformation Settings</strong> (gear icon), select Transformation type (usually 'Polynomial 1' or 'Thin Plate Spline'), Target CRS, and output file path.<br>
            7. Click the green <strong>Start Georeferencing</strong> play button.`;
        } else {
            return `<strong>QGIS හි Georeferencer භාවිතයෙන් ස්කෑන් කළ සිතියමක් පෙළගැස්වීම:</strong><br>
            ස්කෑන් කරන ලද සිතියම් පින්තූරයක් නිවැරදි භූගෝලීය පිහිටීමට සකස් කර ගැනීමට:<br>
            1. <strong>Layer -> Georeferencer</strong> වෙත යන්න.<br>
            2. <strong>Open Raster</strong> ක්ලික් කර ඔබගේ සිතියම් පින්තූරය තෝරන්න.<br>
            3. සිතියමේ ඛණ්ඩාංක දන්නා ලක්ෂ්‍යයක් මත ක්ලික් කර (Add Point), එහි X සහ Y අගයන් ඇතුළත් කරන්න (නැතහොත් 'From Map Canvas' තෝරා දැනට ඇති සිතියමකින් ලක්ෂ්‍ය ලබා ගන්න).<br>
            4. මේ ආකාරයට අවම වශයෙන් ලක්ෂ්‍ය 4ක් (GCPs) සිතියම පුරා තබන්න.<br>
            5. Transformation Settings (රෝද සලකුණ) වෙත ගොස්, Transformation type සහ Target CRS සකසා ගන්න.<br>
            6. කොළ පැහැති <strong>Start Georeferencing</strong> (Play) බොත්තම ක්ලික් කරන්න.`;
        }
    }

    // WMS/XYZ/OSM Base maps
    if (clean.includes('wms') || clean.includes('wfs') || clean.includes('base map') || clean.includes('osm') || clean.includes('google maps') || clean.includes('open street map') || clean.includes('සිතියම් පසුබිම')) {
        if (lang === 'en') {
            return `<strong>How to Add Base Maps (OSM, Google Maps, WMS) in QGIS:</strong><br>
            • <strong>OpenStreetMap (OSM):</strong> In the Browser Panel, expand <strong>XYZ Tiles</strong> and double-click <strong>OpenStreetMap</strong>.<br>
            • <strong>Google Hybrid/Satellite:</strong> Right-click <strong>XYZ Tiles</strong> in the Browser Panel, select <strong>New Connection</strong>. Give it a name (e.g. 'Google Satellite') and paste this URL: <code>https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}</code>, then click OK.<br>
            • <strong>WMS/WFS Services:</strong> Right-click 'WMS/WMTS' in the Browser Panel, select 'New Connection', enter the organization's server URL, click OK, then drag the layers onto your canvas.`;
        } else {
            return `<strong>QGIS වෙත පසුබිම් සිතියම් (Base Maps/OSM) එක් කිරීම:</strong><br>
            • <strong>OpenStreetMap (OSM):</strong> Browser Panel එකෙහි ඇති <strong>XYZ Tiles</strong> යටතේ ඇති <strong>OpenStreetMap</strong> මත double-click කරන්න.<br>
            • <strong>Google Satellite සිතියම:</strong> XYZ Tiles මත right-click කර <strong>New Connection</strong> තෝරන්න. නමක් ලබා දී URL එකට <code>https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}</code> ඇතුලත් කර OK ක්ලික් කරන්න.<br>
            • <strong>WMS/WFS සේවා:</strong> Browser Panel හි WMS/WMTS මත right-click කර 'New Connection' තෝරා අදාළ සේවාදායකයේ (Server) URL එක ලබා දී සම්බන්ධ කරන්න.`;
        }
    }

    return null;
};

export const initChatbot = () => {
    const chatTrigger = document.getElementById('chat-trigger');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const suggestionChips = document.querySelectorAll('.suggestion-chip');

    if (!chatTrigger || !chatWindow || !chatMessages || !chatInput || !chatSend) return;

    // Toggle Chat Window
    chatTrigger.addEventListener('click', () => {
        const isActive = chatWindow.classList.toggle('active');
        chatWindow.setAttribute('aria-hidden', !isActive);
        if (isActive) {
            chatInput.focus();
            const pulse = chatTrigger.querySelector('.chat-trigger-pulse');
            if (pulse) pulse.remove();
        }
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('active');
        chatWindow.setAttribute('aria-hidden', 'true');
    });

    chatSend.addEventListener('click', handleUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserMessage();
    });

    suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const topic = chip.getAttribute('data-topic');
            let userText = chip.innerText;
            appendMessage(userText, 'user-message');
            showTypingIndicator();
            
            setTimeout(() => {
                removeTypingIndicator();
                const response = getSimulatedResponse(topic);
                appendMessage(response, 'bot-message');
            }, 800);
        });
    });

    function handleUserMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user-message');
        chatInput.value = '';
        
        showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            const response = getBotResponse(text);
            appendMessage(response, 'bot-message');
        }, 1000);
    }

    function appendMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.innerHTML = text;
        messageDiv.appendChild(contentDiv);

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('message-time');
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        timeSpan.innerText = `${hrs}:${mins}`;
        messageDiv.appendChild(timeSpan);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    let typingIndicatorElement = null;

    function showTypingIndicator() {
        if (typingIndicatorElement) return;
        
        typingIndicatorElement = document.createElement('div');
        typingIndicatorElement.classList.add('message', 'bot-message');
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Writing...';
        typingIndicatorElement.appendChild(contentDiv);
        
        chatMessages.appendChild(typingIndicatorElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        if (typingIndicatorElement) {
            typingIndicatorElement.remove();
            typingIndicatorElement = null;
        }
    }

    function getSimulatedResponse(topic) {
        switch(topic) {
            case 'gis':
                return `<strong>GIS & Spatial Data Services:</strong><br>I specialize in high-precision GIS mapping, remote sensing, and statistical modeling. 🗺️<br><br>My expertise covers:<br>• Delineating <strong>wildfire fuel models</strong> & flood risk maps.<br>• <strong>Suitability Analysis</strong> & Multi-Criteria Evaluation (MCE).<br>• Custom GIS tools scripting using <strong>Python & R</strong>.<br>• SPSS academic data modeling.<br><br>Check out my active portfolio in the <strong>Projects</strong> section above!`;
            case 'books':
                return `<strong>Self-Published Author:</strong><br>I have written and published <strong>11 books</strong> on Amazon! 📚<br><br>Some key titles include:<br>• <em>Guardian of the Digital Self</em> (AI Safety)<br>• <em>The Sonic Gold Playbook</em> & <em>Suno AI Prompt Bundle</em> (AI Music)<br>• <em>Advanced GIS for Oceanography</em> (Marine Spatial Science)<br>• <em>250 Side Hustles for Wealth</em> (Finance)<br><br>You can click the <strong>"Buy on Amazon"</strong> buttons in the <strong>Publications</strong> section to grab your copy!`;
            case 'blog':
                return `<strong>Teshan Growth Academy:</strong><br>I run a blog focused on digital wealth creation. 📈<br><br>At <a href="https://teshangrowthacademy.blogspot.com/" target="_blank" style="color: var(--accent-emerald); text-decoration: underline;">teshangrowthacademy.blogspot.com</a>, I write about:<br>• Building passive income streams.<br>• Advanced digital marketing workflows.<br>• Investment strategy & financial independence.<br><br>Check out the showcase card in the <strong>Publications</strong> section to visit directly!`;
            case 'contact':
                return `<strong>Let's Work Together!</strong> 🤝<br>You can contact me in any of these ways:<br>• Fill out the secure <strong>Contact Form</strong> below.<br>• Email me at <a href="mailto:teshan.ishara@gmail.com" style="color: var(--accent-emerald); text-decoration: underline;">teshan.ishara@gmail.com</a>.<br>• WhatsApp chat at <a href="https://wa.me/94715298267" target="_blank" style="color: var(--accent-emerald); text-decoration: underline;">+94 71 529 8267</a>.<br>• Visit my <a href="https://www.fiverr.com/s/AyNPwDX" target="_blank" style="color: var(--accent-emerald); text-decoration: underline;">Fiverr Profile</a> to hire my services directly.`;
            default:
                return "How can I help you today?";
        }
    }

    function getBotResponse(input) {
        const query = input.toLowerCase();

        const techAnswer = getQgisTechnicalAnswer(query, 'en');
        if (techAnswer) return techAnswer;

        if (query.includes('gis') || query.includes('map') || query.includes('arcgis') || query.includes('qgis') || query.includes('spatial') || query.includes('cartograph')) {
            return getSimulatedResponse('gis');
        }
        if (query.includes('book') || query.includes('author') || query.includes('publish') || query.includes('amazon') || query.includes('suno') || query.includes('bible')) {
            return getSimulatedResponse('books');
        }
        if (query.includes('blog') || query.includes('blogger') || query.includes('growth') || query.includes('academy') || query.includes('finance')) {
            return getSimulatedResponse('blog');
        }
        if (query.includes('contact') || query.includes('hire') || query.includes('work') || query.includes('fiverr') || query.includes('whatsapp') || query.includes('email')) {
            return getSimulatedResponse('contact');
        }
        if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('greetings')) {
            return `Hello! 😊 I am the GeoPhoenix AI Assistant. Ask me anything about Teshan's GIS mapping work, his 11 books, his Blogger site, or how to contact him.`;
        }
        if (query.includes('who are you') || query.includes('what is this') || query.includes('help')) {
            return `I am the GeoPhoenix AI Assistant, designed to represent Teshan's portfolio. You can click on the topic chips below or type a query about his GIS services, writing, or blog!`;
        }
        if (query.includes('thank') || query.includes('thanks') || query.includes('cool') || query.includes('awesome')) {
            return `You're very welcome! Let me know if you need any other information about Teshan's work. 👍`;
        }

        return `I want to make sure I give you the right details. Ask me about:<br>
        • <strong>GIS Services</strong> (mapping, analysis, coding)<br>
        • <strong>Self-Published Books</strong> (11 Amazon titles)<br>
        • <strong>Blogger</strong> (Teshan Growth Academy)<br>
        • <strong>Contact Details</strong> (email, WhatsApp, Fiverr)`;
    }
};
