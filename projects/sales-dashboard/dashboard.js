// Embedded Dataset for offline and file:// protocol execution (prevents CORS errors)
const salesData = [
  { "date": "2026-01-05", "region": "North", "category": "Technology", "product": "Pro Laptop", "sales": 1200, "quantity": 1, "profit": 350 },
  { "date": "2026-01-12", "region": "East", "category": "Furniture", "product": "Office Chair", "sales": 450, "quantity": 2, "profit": 90 },
  { "date": "2026-01-18", "region": "West", "category": "Office Supplies", "product": "Paper Reams", "sales": 80, "quantity": 5, "profit": 25 },
  { "date": "2026-01-25", "region": "South", "category": "Technology", "product": "Tablet Pro", "sales": 650, "quantity": 1, "profit": 150 },
  { "date": "2026-02-02", "region": "North", "category": "Furniture", "product": "Desk Organizer", "sales": 150, "quantity": 3, "profit": 40 },
  { "date": "2026-02-10", "region": "East", "category": "Office Supplies", "product": "Gel Pens", "sales": 40, "quantity": 10, "profit": 15 },
  { "date": "2026-02-17", "region": "West", "category": "Technology", "product": "Wireless Mouse", "sales": 120, "quantity": 2, "profit": 45 },
  { "date": "2026-02-23", "region": "South", "category": "Furniture", "product": "Standing Desk", "sales": 850, "quantity": 1, "profit": 200 },
  { "date": "2026-03-01", "region": "North", "category": "Technology", "product": "Smart Watch", "sales": 300, "quantity": 1, "profit": 75 },
  { "date": "2026-03-08", "region": "East", "category": "Furniture", "product": "Bookshelf", "sales": 550, "quantity": 1, "profit": 110 },
  { "date": "2026-03-15", "region": "West", "category": "Office Supplies", "product": "Filing Folders", "sales": 60, "quantity": 4, "profit": 18 },
  { "date": "2026-03-22", "region": "South", "category": "Technology", "product": "USB Hub", "sales": 90, "quantity": 3, "profit": 30 },
  { "date": "2026-04-03", "region": "North", "category": "Office Supplies", "product": "Notebook Pack", "sales": 110, "quantity": 5, "profit": 35 },
  { "date": "2026-04-10", "region": "East", "category": "Technology", "product": "Monitor 24\"", "sales": 400, "quantity": 2, "profit": 120 },
  { "date": "2026-04-17", "region": "West", "category": "Furniture", "product": "Ergonomic Desk", "sales": 950, "quantity": 1, "profit": 240 },
  { "date": "2026-04-24", "region": "South", "category": "Office Supplies", "product": "Label Printer", "sales": 180, "quantity": 1, "profit": 50 },
  { "date": "2026-05-02", "region": "North", "category": "Technology", "product": "Pro Keyboard", "sales": 150, "quantity": 1, "profit": 40 },
  { "date": "2026-05-09", "region": "East", "category": "Office Supplies", "product": "Whiteboard", "sales": 220, "quantity": 2, "profit": 60 },
  { "date": "2026-05-16", "region": "West", "category": "Furniture", "product": "Task Lamp", "sales": 90, "quantity": 2, "profit": 20 },
  { "date": "2026-05-23", "region": "South", "category": "Technology", "product": "HD Webcam", "sales": 130, "quantity": 1, "profit": 35 }
];

// Chart references
let categoryChart = null;
let trendChart = null;

// DOM Elements
const regionSelect = document.getElementById('regionSelect');
const categorySelect = document.getElementById('categorySelect');
const resetBtn = document.getElementById('resetFilters');

const totalSalesVal = document.getElementById('totalSalesVal');
const totalProfitVal = document.getElementById('totalProfitVal');
const profitMarginVal = document.getElementById('profitMarginVal');
const transCountVal = document.getElementById('transCountVal');
const recordCountText = document.getElementById('recordCount');
const tableBody = document.querySelector('#transactionsTable tbody');

// Format helpers
const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
const formatPercentage = (val) => (val * 100).toFixed(1) + '%';

// Filter data
function getFilteredData() {
  const selectedRegion = regionSelect.value;
  const selectedCategory = categorySelect.value;

  return salesData.filter(item => {
    const matchRegion = selectedRegion === 'All' || item.region === selectedRegion;
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchRegion && matchCategory;
  });
}

// Update dashboard UI
function updateDashboard() {
  const filtered = getFilteredData();

  // 1. Calculate KPIs
  const totalSales = filtered.reduce((sum, item) => sum + item.sales, 0);
  const totalProfit = filtered.reduce((sum, item) => sum + item.profit, 0);
  const margin = totalSales > 0 ? (totalProfit / totalSales) : 0;
  const count = filtered.length;

  totalSalesVal.textContent = formatCurrency(totalSales);
  totalProfitVal.textContent = formatCurrency(totalProfit);
  profitMarginVal.textContent = formatPercentage(margin);
  transCountVal.textContent = count;

  recordCountText.textContent = `Showing ${count} of ${salesData.length} records`;

  // 2. Update Table
  tableBody.innerHTML = '';
  filtered.forEach(item => {
    let badgeClass = 'badge-tech';
    if (item.category === 'Furniture') badgeClass = 'badge-furn';
    if (item.category === 'Office Supplies') badgeClass = 'badge-supp';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.date}</td>
      <td style="font-weight: 500;">${item.product}</td>
      <td><span class="badge ${badgeClass}">${item.category}</span></td>
      <td><span class="badge badge-region">${item.region}</span></td>
      <td style="font-weight: 600;">${formatCurrency(item.sales)}</td>
      <td>${item.quantity}</td>
      <td style="font-weight: 600; color: #10b981;">${formatCurrency(item.profit)}</td>
    `;
    tableBody.appendChild(row);
  });

  // 3. Update Charts
  updateCategoryChart(filtered);
  updateTrendChart(filtered);
}

// Render or Update Category Chart
function updateCategoryChart(filtered) {
  // Aggregate sales & profit by category
  const categories = ['Technology', 'Furniture', 'Office Supplies'];
  const salesAgg = [0, 0, 0];
  const profitAgg = [0, 0, 0];

  filtered.forEach(item => {
    const idx = categories.indexOf(item.category);
    if (idx !== -1) {
      salesAgg[idx] += item.sales;
      profitAgg[idx] += item.profit;
    }
  });

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Sales ($)',
        data: salesAgg,
        backgroundColor: '#3b82f6',
        borderRadius: 6,
        borderWidth: 0
      },
      {
        label: 'Profit ($)',
        data: profitAgg,
        backgroundColor: '#10b981',
        borderRadius: 6,
        borderWidth: 0
      }
    ]
  };

  if (categoryChart) {
    categoryChart.data = chartData;
    categoryChart.update();
  } else {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    categoryChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#94a3b8', font: { family: 'Outfit' } }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#94a3b8', font: { family: 'Outfit' } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { family: 'Outfit' } }
          }
        }
      }
    });
  }
}

// Render or Update Trend Chart
function updateTrendChart(filtered) {
  // Sort transactions by date
  const sorted = [...filtered].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Compute cumulative sales
  let cumulative = 0;
  const dates = [];
  const cumulativeSales = [];

  sorted.forEach(item => {
    cumulative += item.sales;
    dates.push(item.date);
    cumulativeSales.push(cumulative);
  });

  const chartData = {
    labels: dates,
    datasets: [{
      label: 'Cumulative Revenue ($)',
      data: cumulativeSales,
      borderColor: '#06b6d4',
      backgroundColor: 'rgba(6, 182, 212, 0.05)',
      fill: true,
      tension: 0.3,
      borderWidth: 2,
      pointBackgroundColor: '#06b6d4'
    }]
  };

  if (trendChart) {
    trendChart.data = chartData;
    trendChart.update();
  } else {
    const ctx = document.getElementById('trendChart').getContext('2d');
    trendChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#94a3b8', font: { family: 'Outfit' } }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#94a3b8', font: { family: 'Outfit' } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#94a3b8', font: { family: 'Outfit' } }
          }
        }
      }
    });
  }
}

// Event Listeners
regionSelect.addEventListener('change', updateDashboard);
categorySelect.addEventListener('change', updateDashboard);

resetBtn.addEventListener('click', () => {
  regionSelect.value = 'All';
  categorySelect.value = 'All';
  updateDashboard();
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  updateDashboard();
});
