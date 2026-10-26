// Enterprise SANASA Pro State Engine
const SVG_WA = `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-1px; margin-right:3px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.108 1.524 5.834L0 24l6.326-1.491C8.01 23.455 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.578-.497-5.075-1.364l-.364-.21-3.765.888.887-3.668-.234-.373A9.96 9.96 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>`;
const SVG_SMS = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:3px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const SVG_CALL = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:3px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
const SVG_EYE = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px; margin-right:3px;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
const SVG_EDIT = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px; margin-right:3px;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
const SVG_TRASH = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
const SVG_CALENDAR_SM = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px; margin-right:3px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
const SVG_PHONE_SM = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-1px; margin-right:3px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

let dbAccounts = JSON.parse(localStorage.getItem('sanasa_enterprise_accounts')) || [
    { accountNo: "010100001", nic: "442233160V", birthday: "1944-08-10", gender: "Male", phone: "0771234567", joinedDate: "1986-09-21" },
    { accountNo: "010100002", nic: "542763132V", birthday: "1954-10-02", gender: "Male", phone: "0714567890", joinedDate: "1986-09-21" },
    { accountNo: "010100003", nic: "443501290V", birthday: "1944-12-15", gender: "Male", phone: "0759876543", joinedDate: "1986-09-21" },
    { accountNo: "010100004", nic: "211520019V", birthday: "1921-05-31", gender: "Male", phone: "0783334444", joinedDate: "1986-09-21" },
    { accountNo: "010100005", nic: "622802015V", birthday: "1962-10-06", gender: "Male", phone: "0714708954", joinedDate: "1986-09-21" },
    { accountNo: "010100006", nic: "290920035V", birthday: "1929-04-01", gender: "Male", phone: "0778889999", joinedDate: "1986-09-21" },
    { accountNo: "010100010", nic: "536564276V", birthday: "1953-06-04", gender: "Female", phone: "0712223333", joinedDate: "1986-09-21" },
    { accountNo: "010100012", nic: "397331814V", birthday: "1937-07-11", gender: "Female", phone: "0704445555", joinedDate: "1986-09-21" }
];

let currentPage = 1;
let pageSize = 25;
let currentSortColumn = 'accountNo';
let sortAscending = true;
let selectedAccountsSet = new Set();

// Startup
document.addEventListener('DOMContentLoaded', () => {
    dbAccounts = mergeAndDeduplicate(dbAccounts);
    repairDatabaseGenders();
    saveDatabase();

    initNavigation();
    updateDateBadge();
    refreshAllViews();

    document.getElementById('btnFixGenderRatio')?.addEventListener('click', repairDatabaseGenders);
    document.getElementById('btnFixGenderRatioDir')?.addEventListener('click', repairDatabaseGenders);

    // Event Listeners
    document.getElementById('globalSearchInput')?.addEventListener('input', () => {
        currentPage = 1;
        renderDirectoryTable();
    });

    // Auto NIC Gender Detection for Add & Edit Forms
    const addNicInput = document.getElementById('addNic');
    const addGenderSelect = document.getElementById('addGender');
    addNicInput?.addEventListener('input', () => {
        const detected = getGenderFromNIC(addNicInput.value);
        if (detected && addGenderSelect) {
            addGenderSelect.value = detected;
        }
    });

    const editNicInput = document.getElementById('editNic');
    const editGenderSelect = document.getElementById('editGender');
    editNicInput?.addEventListener('input', () => {
        const detected = getGenderFromNIC(editNicInput.value);
        if (detected && editGenderSelect) {
            editGenderSelect.value = detected;
        }
    });

    document.getElementById('filterGenderSelect')?.addEventListener('change', () => {
        currentPage = 1;
        renderDirectoryTable();
    });

    document.getElementById('pageSizeSelect')?.addEventListener('change', (e) => {
        pageSize = parseInt(e.target.value) || 25;
        currentPage = 1;
        renderDirectoryTable();
    });

    // Buttons
    document.getElementById('btnPrintReport')?.addEventListener('click', () => window.print());
    document.getElementById('btnExportCSV')?.addEventListener('click', exportToCSV);
    
    document.getElementById('btnClearData')?.addEventListener('click', () => {
        if (confirm('Are you sure you want to RESET the entire database? This action cannot be undone.')) {
            dbAccounts = [];
            saveDatabase();
            refreshAllViews();
            showToast('Database reset successfully.', 'danger');
        }
    });

    // Cloud & Google Drive Backup Listeners
    const btnCloudBackup = document.getElementById('btnCloudBackup');
    const backupModal = document.getElementById('backupModal');
    const backupEmailInput = document.getElementById('backupEmailInput');
    const webhookUrlInput = document.getElementById('webhookUrlInput');

    if (btnCloudBackup && backupModal) {
        btnCloudBackup.addEventListener('click', () => {
            if (backupEmailInput) backupEmailInput.value = localStorage.getItem('sanasa_backup_email') || '';
            if (webhookUrlInput) webhookUrlInput.value = localStorage.getItem('sanasa_webhook_url') || '';
            backupModal.style.display = 'flex';
        });
    }

    document.getElementById('backupForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = backupEmailInput?.value.trim();
        const webhook = webhookUrlInput?.value.trim();
        if (email) {
            localStorage.setItem('sanasa_backup_email', email);
        }
        if (webhook) {
            localStorage.setItem('sanasa_webhook_url', webhook);
        }
        showToast('Backup email & cloud settings saved successfully!');
        if (backupModal) backupModal.style.display = 'none';
    });

    // Google Apps Script Live Sync Event Listeners
    document.getElementById('btnSaveAppScriptUrl')?.addEventListener('click', () => {
        const urlInput = document.getElementById('appScriptUrlInput');
        const url = urlInput?.value.trim();
        if (!url) {
            showToast('Please enter a valid Google Apps Script URL', 'danger');
            return;
        }
        localStorage.setItem('sanasa_appscript_url', url);
        showToast('Google Apps Script URL saved successfully!', 'success');
        updateCloudSyncStatus();
    });

    document.getElementById('btnToggleScriptGuide')?.addEventListener('click', () => {
        const guide = document.getElementById('scriptGuideBox');
        if (guide) {
            const isHidden = guide.style.display === 'none' || !guide.style.display;
            guide.style.display = isHidden ? 'block' : 'none';
        }
    });

    document.getElementById('btnOpenGoogleSheet')?.addEventListener('click', () => {
        const sheetUrl = localStorage.getItem('sanasa_sheet_url') || DEFAULT_SHEET_URL;
        if (sheetUrl) {
            window.open(sheetUrl, '_blank');
        } else {
            showToast('Google Sheet URL not found. Please sync once first.', 'danger');
        }
    });

    document.getElementById('btnSyncAppsScript')?.addEventListener('click', backupToGoogleSheets);

    // Download JSON for Google Drive
    document.getElementById('btnExportDriveJSON')?.addEventListener('click', () => {
        if (!dbAccounts.length) {
            showToast('No database records to back up!', 'danger');
            return;
        }
        const userEmail = localStorage.getItem('sanasa_backup_email') || backupEmailInput?.value || '';
        const backupObject = {
            system: "GSCS Member Management System",
            institution: "Galapitiyagama SANASA Co-Op (GSCS BANK)",
            developer: "iraasoft Solution",
            backupEmail: userEmail,
            timestamp: new Date().toISOString(),
            totalRecords: dbAccounts.length,
            accounts: dbAccounts
        };
        const blob = new Blob([JSON.stringify(backupObject, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `GSCS_GoogleDrive_Backup_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        showToast('Google Drive JSON backup file downloaded!');
    });

    // Download Excel for Google Drive
    document.getElementById('btnExportDriveExcel')?.addEventListener('click', () => {
        if (!dbAccounts.length) {
            showToast('No database records to back up!', 'danger');
            return;
        }
        if (typeof XLSX === 'undefined') {
            showToast('Excel library loading...', 'danger');
            return;
        }
        const ws = XLSX.utils.json_to_sheet(dbAccounts);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "GSCS_Accounts");
        XLSX.writeFile(wb, `GSCS_GoogleDrive_Backup_${new Date().toISOString().slice(0,10)}.xlsx`);
        showToast('Google Drive Excel file downloaded!');
    });

    // Open Google Drive Folder Link
    document.getElementById('btnOpenDriveFolder')?.addEventListener('click', () => {
        window.open('https://drive.google.com/drive/u/0/my-drive', '_blank');
        showToast('Opening Google Drive in new tab...');
    });

    // Send Backup Summary via Gmail
    document.getElementById('btnSendGmailBackup')?.addEventListener('click', () => {
        const email = backupEmailInput?.value.trim() || localStorage.getItem('sanasa_backup_email');
        if (!email) {
            showToast('Please enter your Gmail address first!', 'danger');
            return;
        }
        localStorage.setItem('sanasa_backup_email', email);

        const dateStr = new Date().toLocaleDateString('en-US');
        const summaryText = `GSCS BANK - DATABASE BACKUP SUMMARY (${dateStr})\n` +
                            `Institution: Galapitiyagama SANASA Co-Op\n` +
                            `System: GSCS Member Management System\n` +
                            `Developer: iraasoft Solution\n` +
                            `Total Unique Accounts: ${dbAccounts.length}\n\n` +
                            `Record Sample:\n` +
                            dbAccounts.slice(0, 10).map(a => `- Acc: ${a.accountNo} | NIC: ${a.nic} | Phone: ${a.phone}`).join('\n') +
                            `\n\n... and ${dbAccounts.length > 10 ? dbAccounts.length - 10 : 0} more records.\n\n` +
                            `Auto-generated by GSCS System.`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent("GSCS Bank Database Backup - " + dateStr)}&body=${encodeURIComponent(summaryText)}`;
        window.open(gmailUrl, '_blank');
        showToast('Gmail compose opened with database backup summary!');
    });

    document.getElementById('btnBulkDelete')?.addEventListener('click', () => {
        if (!selectedAccountsSet.size) return;
        if (confirm(`Delete ${selectedAccountsSet.size} selected accounts?`)) {
            dbAccounts = dbAccounts.filter(a => !selectedAccountsSet.has(a.accountNo));
            selectedAccountsSet.clear();
            saveDatabase();
            refreshAllViews();
            showToast('Selected accounts removed!');
        }
    });

    // Add Account Form
    document.getElementById('addAccountForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const accNo = document.getElementById('addAccountNo').value.trim();
        const nic = document.getElementById('addNic').value.trim() || '-';
        const birthday = document.getElementById('addBirthday').value || '-';
        let rawGender = document.getElementById('addGender').value || 'Male';
        const gender = normalizeGender(rawGender, nic);
        const phone = document.getElementById('addPhone').value.trim() || '-';
        const joinedDate = document.getElementById('addJoinedDate').value || '-';

        if (!accNo) {
            showToast('Account Number is required!', 'danger');
            return;
        }

        const newRecord = { accountNo: accNo, nic, birthday, gender, phone, joinedDate };
        dbAccounts = mergeAndDeduplicate([newRecord, ...dbAccounts]);
        saveDatabase();
        refreshAllViews();
        showToast(`Account ${accNo} saved successfully!`);
        document.getElementById('addAccountForm').reset();
    });

    // Edit Account Form
    document.getElementById('editAccountForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const accNo = document.getElementById('editAccNoHidden').value;
        const idx = dbAccounts.findIndex(a => a.accountNo === accNo);
        if (idx >= 0) {
            const nic = document.getElementById('editNic').value.trim() || '-';
            const rawGender = document.getElementById('editGender').value || 'Male';
            dbAccounts[idx].nic = nic;
            dbAccounts[idx].birthday = document.getElementById('editBirthday').value || '-';
            dbAccounts[idx].gender = normalizeGender(rawGender, nic);
            dbAccounts[idx].phone = document.getElementById('editPhone').value.trim() || '-';
            dbAccounts[idx].joinedDate = document.getElementById('editJoinedDate').value || '-';

            saveDatabase();
            refreshAllViews();
            document.getElementById('editModal').style.display = 'none';
            showToast(`Account ${accNo} updated successfully!`);
        }
    });

    // Checkbox Select All
    document.getElementById('selectAllCheckbox')?.addEventListener('change', (e) => {
        const checkboxes = document.querySelectorAll('.acc-checkbox');
        checkboxes.forEach(cb => {
            cb.checked = e.target.checked;
            const acc = cb.getAttribute('data-acc');
            if (e.target.checked) selectedAccountsSet.add(acc);
            else selectedAccountsSet.delete(acc);
        });
        updateBulkDeleteButton();
    });

    document.getElementById('btnModalClose')?.addEventListener('click', () => {
        document.getElementById('accountModal').style.display = 'none';
    });

    // Sort Headers
    document.querySelectorAll('#directoryTable th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const col = th.getAttribute('data-sort');
            if (currentSortColumn === col) sortAscending = !sortAscending;
            else { currentSortColumn = col; sortAscending = true; }
            renderDirectoryTable();
        });
    });

    setupDropzone();
    document.getElementById('btnFilterAge')?.addEventListener('click', renderAnalyticsView);

    // Bulk SMS Engine
    document.getElementById('btnBulkSmsFilter')?.addEventListener('click', updateBulkSmsBanner);
    document.getElementById('bulkSmsPrefix')?.addEventListener('input', updateBulkSmsBanner);
    document.getElementById('bulkSmsGender')?.addEventListener('change', updateBulkSmsBanner);
    document.getElementById('bulkSmsPhoneFilter')?.addEventListener('change', updateBulkSmsBanner);
    document.getElementById('btnBulkSmsGenerate')?.addEventListener('click', generateBulkSmsList);
    document.getElementById('btnCopyAllNumbers')?.addEventListener('click', copyAllFilteredNumbers);
    document.getElementById('btnCopyMessage')?.addEventListener('click', copyBulkSmsMessage);
    document.getElementById('btnSendAllNow')?.addEventListener('click', openBulkSendAllModal);

    // Run initial banner update when Bulk SMS view is first loaded
    updateBulkSmsBanner();
});

// Navigation Engine
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.view-page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');

            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            link.classList.add('active');
            const activeView = document.getElementById(`view-${targetPage}`);
            if (activeView) activeView.classList.add('active');
        });
    });
}

function updateDateBadge() {
    const badge = document.getElementById('currentDateBadge');
    if (badge) {
        const now = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' };
        badge.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Google Apps Script Cloud Sync Engine
const DEFAULT_APPSCRIPT_URL = "https://script.google.com/macros/s/AKfycbzKAALrI8qcfTyQYdeUacd86DqV3VgCP-qgxusN_9ggs_iRDDIquIVCXbG9ETTqqQq0LQ/exec";
const DEFAULT_SHEET_URL = "https://docs.google.com/spreadsheets/d/1B8dNkuGyXgV4cqV-Q9Riba6Sq9MF1oLzluhpzQmixrk/edit";

function updateCloudSyncStatus() {
    const urlInput = document.getElementById('appScriptUrlInput');
    const statusNote = document.getElementById('appScriptStatusNote');
    const badge = document.getElementById('appsScriptSyncBadge');
    const btnOpenSheet = document.getElementById('btnOpenGoogleSheet');

    const savedUrl = localStorage.getItem('sanasa_appscript_url') || DEFAULT_APPSCRIPT_URL;
    if (urlInput && (!urlInput.value || urlInput.value !== savedUrl)) {
        urlInput.value = savedUrl;
    }

    const lastBackup = localStorage.getItem('sanasa_last_cloud_backup');
    const sheetUrl = localStorage.getItem('sanasa_sheet_url') || DEFAULT_SHEET_URL;

    if (lastBackup) {
        if (statusNote) {
            statusNote.innerHTML = `✅ <strong>Last Synced:</strong> ${lastBackup} (${dbAccounts.length} records saved in Google Sheet)`;
            statusNote.style.color = '#15803d';
        }
        if (badge) {
            badge.textContent = 'Synced';
            badge.style.background = '#dcfce7';
            badge.style.color = '#15803d';
        }
    } else {
        if (statusNote) {
            statusNote.textContent = savedUrl ? 'Cloud backend active & connected. Ready to backup.' : 'No URL set. Please paste your Google Apps Script Web App URL.';
            statusNote.style.color = '#15803d';
        }
        if (badge) {
            badge.textContent = savedUrl ? 'Connected' : 'Not Configured';
            badge.style.background = savedUrl ? '#e0f2fe' : '#f1f5f9';
            badge.style.color = savedUrl ? '#0369a1' : '#64748b';
        }
    }

    if (btnOpenSheet) {
        btnOpenSheet.style.display = sheetUrl ? 'inline-flex' : 'none';
    }
}

async function backupToGoogleSheets() {
    const urlInput = document.getElementById('appScriptUrlInput');
    const url = (urlInput?.value.trim()) || localStorage.getItem('sanasa_appscript_url') || DEFAULT_APPSCRIPT_URL;

    if (!url) {
        showToast('Please enter your Google Apps Script Web App URL first!', 'danger');
        urlInput?.focus();
        return;
    }

    if (!dbAccounts.length) {
        showToast('No database records to back up!', 'danger');
        return;
    }

    const btn = document.getElementById('btnSyncAppsScript');
    const btnText = document.getElementById('btnSyncAppsScriptText');
    const originalText = btnText ? btnText.innerHTML : 'Sync Now';

    if (btn) btn.disabled = true;
    if (btnText) btnText.innerHTML = '⏳ Syncing to Google Sheets...';

    const payload = {
        action: 'backup',
        timestamp: new Date().toISOString(),
        totalRecords: dbAccounts.length,
        accounts: dbAccounts
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.status === 'success') {
            const timeStr = new Date().toLocaleString('en-US');
            localStorage.setItem('sanasa_last_cloud_backup', timeStr);
            localStorage.setItem('sanasa_appscript_url', url);
            if (result.sheetUrl) {
                localStorage.setItem('sanasa_sheet_url', result.sheetUrl);
            }

            showToast(`✅ Cloud backup success! ${result.count || dbAccounts.length} accounts synced to Google Sheets.`, 'success');
            updateCloudSyncStatus();
        } else {
            showToast(`Apps Script Error: ${result.message || 'Unknown error'}`, 'danger');
        }
    } catch (err) {
        console.error('Apps Script Sync Error:', err);
        showToast('Connection error! Please check internet and Web App URL permissions (Must be set to "Anyone").', 'danger');
    } finally {
        if (btn) btn.disabled = false;
        if (btnText) btnText.innerHTML = originalText;
    }
}

function renderSettingsView() {
    const emailInput = document.getElementById('backupEmailInput');
    if (emailInput && !emailInput.value) {
        emailInput.value = localStorage.getItem('sanasa_backup_email') || '';
    }
    updateCloudSyncStatus();
}

function refreshAllViews() {
    updateDashboardMetrics();
    renderDirectoryTable();
    renderBirthdaysView();
    renderAnalyticsView();
    renderSettingsView();
}

// SRI LANKAN NIC GENDER & BIRTHDAY EXTRACTION ENGINE
function extractNIC(inputStr) {
    if (!inputStr || inputStr === '-') return '-';
    let str = inputStr.toString().trim().toUpperCase();
    let clean = str.replace(/[\s\-]/g, '');
    
    let match9 = clean.match(/(\d{9}[VX])/);
    if (match9) return match9[1];
    
    let match12 = clean.match(/(\d{12})/);
    if (match12) return match12[1];
    
    return '-';
}

function getGenderFromNIC(nicStr) {
    const nic = extractNIC(nicStr);
    if (!nic || nic === '-') return null;
    
    // 9-digit NIC format (e.g. 536564276V or 443501290V)
    if (/^\d{9}[VX]$/.test(nic)) {
        const days = parseInt(nic.substring(2, 5), 10);
        if (!isNaN(days)) {
            return (days > 500) ? 'Female' : 'Male';
        }
    }
    
    // 12-digit NIC format (e.g. 195365642760 or 199573801234)
    if (/^\d{12}$/.test(nic)) {
        const days = parseInt(nic.substring(4, 7), 10);
        if (!isNaN(days)) {
            return (days > 500) ? 'Female' : 'Male';
        }
    }
    
    return null;
}

function normalizeGender(genderStr, nicStr) {
    // 1. NIC is authoritative in Sri Lanka if present
    const nicGender = getGenderFromNIC(nicStr);
    if (nicGender) return nicGender;

    // 2. Parse string if NIC not available
    if (!genderStr || genderStr === '-') return 'Male';
    const str = genderStr.toString().trim().toLowerCase();
    if (str.includes('female') || str.includes('ස්ත්‍රී') || str === 'f' || str === 'female' || str === 'woman') {
        return 'Female';
    }
    if (str.includes('male') || str.includes('පුරුෂ') || str === 'm' || str === 'male' || str === 'man') {
        return 'Male';
    }
    return 'Male';
}

function repairDatabaseGenders() {
    let repairedCount = 0;
    dbAccounts.forEach(a => {
        const extracted = extractNIC(a.nic);
        if (extracted !== '-' && extracted !== a.nic) {
            a.nic = extracted;
        }

        const nicGender = getGenderFromNIC(a.nic);
        if (nicGender) {
            if (a.gender !== nicGender) {
                a.gender = nicGender;
                repairedCount++;
            }
        } else {
            const normalized = normalizeGender(a.gender, a.nic);
            if (a.gender !== normalized) {
                a.gender = normalized;
                repairedCount++;
            }
        }
    });

    saveDatabase();
    refreshAllViews();
    showToast(`Gender Ratio Refreshed! Processed ${dbAccounts.length} accounts. Updated ${repairedCount} genders.`);
    return repairedCount;
}
window.repairDatabaseGenders = repairDatabaseGenders;

// Background Deduplication & Auto-Repair Engine
function mergeAndDeduplicate(accountArray) {
    const accountMap = new Map();
    for (let acc of accountArray) {
        if (!acc || !acc.accountNo) continue;
        const key = acc.accountNo.toString().trim().toLowerCase();
        if (!/^\d{6,15}$/.test(key.replace(/\D/g, ''))) continue;

        const cleanNic = (acc.nic && acc.nic !== '-') ? acc.nic : '-';
        const cleanGender = normalizeGender(acc.gender, cleanNic);

        if (accountMap.has(key)) {
            const existing = accountMap.get(key);
            const mergedNic = (cleanNic !== '-') ? cleanNic : existing.nic;
            const mergedGender = normalizeGender(acc.gender || existing.gender, mergedNic);

            accountMap.set(key, {
                accountNo: acc.accountNo.toString().trim(),
                nic: mergedNic,
                birthday: (acc.birthday && acc.birthday !== '-') ? acc.birthday : existing.birthday,
                gender: mergedGender,
                phone: (acc.phone && acc.phone !== '-') ? acc.phone : existing.phone,
                joinedDate: (acc.joinedDate && acc.joinedDate !== '-') ? acc.joinedDate : existing.joinedDate
            });
        } else {
            accountMap.set(key, {
                accountNo: acc.accountNo.toString().trim(),
                nic: cleanNic,
                birthday: acc.birthday || '-',
                gender: cleanGender,
                phone: acc.phone || '-',
                joinedDate: acc.joinedDate || '-'
            });
        }
    }
    return Array.from(accountMap.values());
}

function saveDatabase() {
    localStorage.setItem('sanasa_enterprise_accounts', JSON.stringify(dbAccounts));
}

function calculateAge(birthdayStr) {
    if (!birthdayStr || birthdayStr === '-') return null;
    const birthDate = new Date(birthdayStr);
    if (isNaN(birthDate)) return null;
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age >= 0 ? age : null;
}

function formatWhatsAppPhone(phoneStr) {
    if (!phoneStr || phoneStr === '-') return '';
    let digits = phoneStr.toString().replace(/\D/g, '');
    if (!digits) return '';
    if (digits.startsWith('0') && digits.length === 10) {
        digits = '94' + digits.substring(1);
    } else if (digits.length === 9 && !digits.startsWith('94')) {
        digits = '94' + digits;
    }
    return digits;
}

// DASHBOARD METRICS & GENDER RATIO FIX & BIRTHDAY TRACKER (NEXT 7 DAYS)
function updateDashboardMetrics() {
    const total = dbAccounts.length;
    document.getElementById('dashTotalAccounts').textContent = total;
    document.getElementById('navAccountBadge').textContent = total;
    document.getElementById('dashTotalSubtitle').textContent = `${total} Unique records`;

    // 1. MALE / FEMALE RATIO FIX (Supports English 'Male/Female', 'F/M', & Sinhala 'පුරුෂ/ස්ත්‍රී')
    const males = dbAccounts.filter(a => {
        const g = (a.gender || '').toLowerCase();
        return g === 'male' || g === 'පුරුෂ' || g === 'm';
    }).length;

    const females = dbAccounts.filter(a => {
        const g = (a.gender || '').toLowerCase();
        return g === 'female' || g === 'ස්ත්‍රී' || g === 'f';
    }).length;
    
    document.getElementById('genderRatioTag').textContent = `${males} Male / ${females} Female`;
    
    const totalGendered = (males + females);
    let malePct = 0;
    let femalePct = 0;
    if (totalGendered > 0) {
        malePct = Math.round((males / totalGendered) * 100);
        femalePct = 100 - malePct;
    }

    const maleLabel = document.getElementById('malePercentLabel');
    const femaleLabel = document.getElementById('femalePercentLabel');
    const fillMale = document.getElementById('genderFillMale');
    const fillFemale = document.getElementById('genderFillFemale');

    if (maleLabel) maleLabel.textContent = `Male: ${malePct}% (${males})`;
    if (femaleLabel) femaleLabel.textContent = `Female: ${femalePct}% (${females})`;
    if (fillMale) fillMale.style.width = `${malePct}%`;
    if (fillFemale) fillFemale.style.width = `${femalePct}%`;

    // 2. TODAY'S BIRTHDAYS
    const today = new Date();
    const todayMonthDay = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    const todayList = dbAccounts.filter(a => a.birthday && a.birthday !== '-' && a.birthday.slice(5, 10) === todayMonthDay);
    document.getElementById('dashTodayBirthdaysCount').textContent = todayList.length;

    const widgetToday = document.getElementById('widgetTodayBirthdaysList');
    if (widgetToday) {
        if (todayList.length === 0) {
            widgetToday.innerHTML = `<p class="empty-state">No birthdays today.</p>`;
        } else {
            widgetToday.innerHTML = todayList.map(a => createWishCard(a, 'Today')).join('');
        }
    }

    // 3. UPCOMING BIRTHDAYS (NEXT 7 DAYS)
    const upcoming7DaysList = getUpcomingBirthdaysList(7);
    document.getElementById('dashUpcomingWeekCount').textContent = upcoming7DaysList.length;

    const widgetUpcoming = document.getElementById('widgetUpcomingBirthdaysList');
    if (widgetUpcoming) {
        if (upcoming7DaysList.length === 0) {
            widgetUpcoming.innerHTML = `<p class="empty-state">No upcoming birthdays in the next 7 days.</p>`;
        } else {
            widgetUpcoming.innerHTML = upcoming7DaysList.map(item => createWishCard(item.account, item.dueText)).join('');
        }
    }

    // Nav Badge Alert
    const navAlert = document.getElementById('navBirthdayAlert');
    if (navAlert) navAlert.textContent = todayList.length + upcoming7DaysList.length;
}

// Calculate Upcoming Birthdays in Next N Days
function getUpcomingBirthdaysList(maxDays = 7) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = [];

    dbAccounts.forEach(a => {
        if (!a.birthday || a.birthday === '-') return;
        const bDate = new Date(a.birthday);
        if (isNaN(bDate)) return;

        // Current year birthday date
        let nextBday = new Date(today.getFullYear(), bDate.getMonth(), bDate.getDate());
        if (nextBday < today) {
            nextBday.setFullYear(today.getFullYear() + 1);
        }

        const diffTime = nextBday - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 0 && diffDays <= maxDays) {
            let dueText = `In ${diffDays} day${diffDays > 1 ? 's' : ''}`;
            if (diffDays === 1) dueText = 'Tomorrow';
            upcoming.push({ account: a, days: diffDays, dueText });
        }
    });

    upcoming.sort((a, b) => a.days - b.days);
    return upcoming;
}

// Create Wish Card with WhatsApp, SMS, Call Buttons
function createWishCard(a, badgeText) {
    const age = calculateAge(a.birthday);
    const cleanPhone = formatWhatsAppPhone(a.phone);
    const wishMessage = `Happy Birthday from Galapitiyagama SANASA Co-Op! Wishing Account ${a.accountNo} a wonderful year ahead.\n\nGSCS BANK`;
    const defaultMsg = encodeURIComponent(wishMessage);

    return `
        <div class="wish-card">
            <div class="wish-details">
                <strong><span>Account No: ${a.accountNo}</span> <span class="pill-tag blue">${badgeText}</span></strong>
                <span>${SVG_CALENDAR_SM} ${a.birthday} (${age ? age + ' yrs' : '-'}) &nbsp;&bull;&nbsp; ${SVG_PHONE_SM} ${a.phone}</span>
            </div>
            <div class="action-btn-group">
                <a href="https://wa.me/${cleanPhone}?text=${defaultMsg}" target="_blank" class="btn-comm btn-wa" title="Send WhatsApp">${SVG_WA}WhatsApp</a>
                <a href="sms:${a.phone}?body=${defaultMsg}" class="btn-comm btn-sms" title="Send Normal SMS">${SVG_SMS}SMS</a>
                <a href="tel:${a.phone}" class="btn-comm btn-call" title="Direct Phone Call">${SVG_CALL}Call</a>
            </div>
        </div>
    `;
}

// Render Directory Table with Actions
function renderDirectoryTable() {
    const tbody = document.getElementById('directoryTbody');
    if (!tbody) return;

    const query = (document.getElementById('globalSearchInput')?.value || '').toLowerCase().trim();
    const genderFilter = document.getElementById('filterGenderSelect')?.value || 'all';

    let filtered = dbAccounts.filter(a => {
        const matchQuery = (a.accountNo || '').toLowerCase().includes(query) ||
                           (a.nic || '').toLowerCase().includes(query) ||
                           (a.phone || '').toLowerCase().includes(query);

        let matchGender = true;
        if (genderFilter === 'male') matchGender = (a.gender === 'Male' || a.gender === 'පුරුෂ');
        if (genderFilter === 'female') matchGender = (a.gender === 'Female' || a.gender === 'ස්ත්‍රී');

        return matchQuery && matchGender;
    });

    // Sort
    filtered.sort((a, b) => {
        let valA = a[currentSortColumn] || '';
        let valB = b[currentSortColumn] || '';
        if (currentSortColumn === 'age') {
            valA = calculateAge(a.birthday) || 0;
            valB = calculateAge(b.birthday) || 0;
        }
        if (valA < valB) return sortAscending ? -1 : 1;
        if (valA > valB) return sortAscending ? 1 : -1;
        return 0;
    });

    const totalFiltered = filtered.length;
    const totalPages = Math.ceil(totalFiltered / pageSize) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const startIdx = (currentPage - 1) * pageSize;
    const paginated = filtered.slice(startIdx, startIdx + pageSize);

    tbody.innerHTML = paginated.map(a => {
        const age = calculateAge(a.birthday);
        const isChecked = selectedAccountsSet.has(a.accountNo) ? 'checked' : '';
        const cleanPhone = formatWhatsAppPhone(a.phone);
        const defaultMsg = encodeURIComponent(`Greetings from Galapitiyagama SANASA Co-Op (GSCS BANK)! Regarding Account No: ${a.accountNo}.`);

        return `
            <tr>
                <td><input type="checkbox" class="acc-checkbox" data-acc="${a.accountNo}" ${isChecked} onchange="toggleAccountSelection('${a.accountNo}', this.checked)"></td>
                <td><strong style="color:#0f172a;">${a.accountNo}</strong></td>
                <td>${a.nic}</td>
                <td>${a.birthday}</td>
                <td>${age !== null ? age + ' yrs' : '-'}</td>
                <td><span class="pill-tag ${a.gender === 'Female' || a.gender === 'ස්ත්‍රී' ? 'green' : 'blue'}">${a.gender}</span></td>
                <td>${a.phone}</td>
                <td>${a.joinedDate}</td>
                <td style="text-align:right; white-space:nowrap;">
                    <a href="https://wa.me/${cleanPhone}?text=${defaultMsg}" target="_blank" class="btn-comm btn-wa btn-sm" title="Send WhatsApp">${SVG_WA}WhatsApp</a>
                    <a href="sms:${a.phone}?body=${defaultMsg}" class="btn-comm btn-sms btn-sm" title="Send SMS">${SVG_SMS}SMS</a>
                    <a href="tel:${a.phone}" class="btn-comm btn-call btn-sm" title="Call">${SVG_CALL}Call</a>
                    <button class="btn-ios btn-secondary btn-sm" onclick="inspectAccount('${a.accountNo}')">${SVG_EYE}View</button>
                    <button class="btn-ios btn-secondary btn-sm" onclick="editAccount('${a.accountNo}')">${SVG_EDIT}Edit</button>
                    <button class="btn-ios btn-danger-ghost btn-sm" onclick="deleteAccount('${a.accountNo}')">${SVG_TRASH}</button>
                </td>
            </tr>
        `;
    }).join('');

    document.getElementById('tablePaginationInfo').textContent = `Showing ${paginated.length} of ${totalFiltered} accounts (Page ${currentPage} of ${totalPages})`;
    renderPaginationControls(totalPages);
}

function toggleAccountSelection(accNo, isChecked) {
    if (isChecked) selectedAccountsSet.add(accNo);
    else selectedAccountsSet.delete(accNo);
    updateBulkDeleteButton();
}
window.toggleAccountSelection = toggleAccountSelection;

function updateBulkDeleteButton() {
    const btn = document.getElementById('btnBulkDelete');
    const badge = document.getElementById('bulkCountBadge');
    if (btn && badge) {
        if (selectedAccountsSet.size > 0) {
            btn.style.display = 'inline-flex';
            badge.textContent = selectedAccountsSet.size;
        } else {
            btn.style.display = 'none';
        }
    }
}

function renderPaginationControls(totalPages) {
    const controls = document.getElementById('paginationControls');
    if (!controls) return;
    controls.innerHTML = `
        <button class="btn-ios btn-secondary btn-sm" ${currentPage <= 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">Previous</button>
        <span style="font-size:13px; color:#64748b; padding:0 10px;">${currentPage} / ${totalPages}</span>
        <button class="btn-ios btn-secondary btn-sm" ${currentPage >= totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">Next</button>
    `;
}
window.changePage = changePage;

function changePage(page) {
    currentPage = page;
    renderDirectoryTable();
}

// INSPECT ACCOUNT MODAL - WORKING 100%
function inspectAccount(accNo) {
    const a = dbAccounts.find(item => item.accountNo === accNo);
    if (!a) {
        showToast('Account not found.', 'danger');
        return;
    }
    const modal = document.getElementById('accountModal');
    const body = document.getElementById('accountModalBody');
    if (!modal || !body) return;

    const age = calculateAge(a.birthday);
    const cleanPhone = formatWhatsAppPhone(a.phone);
    const defaultMsg = encodeURIComponent(`Greetings from Galapitiyagama SANASA Co-Op (GSCS BANK)! Regarding Account No: ${a.accountNo}.`);

    body.innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
            <div><label style="color:#64748b; font-size:11px; font-weight:700;">ACCOUNT NUMBER</label><h3 style="color:#0f172a; font-size:22px; font-weight:800;">${a.accountNo}</h3></div>
            <div><label style="color:#64748b; font-size:11px; font-weight:700;">NIC NUMBER</label><p style="color:#0f172a; font-size:16px; font-weight:700;">${a.nic}</p></div>
            <div><label style="color:#64748b; font-size:11px; font-weight:700;">BIRTHDAY</label><p style="color:#0f172a;">${a.birthday} ${age ? '(' + age + ' yrs old)' : ''}</p></div>
            <div><label style="color:#64748b; font-size:11px; font-weight:700;">GENDER</label><p style="color:#0f172a;">${a.gender}</p></div>
            <div><label style="color:#64748b; font-size:11px; font-weight:700;">PHONE NUMBER</label><p style="color:#0f172a;">${a.phone}</p></div>
            <div><label style="color:#64748b; font-size:11px; font-weight:700;">JOINED DATE</label><p style="color:#0f172a;">${a.joinedDate}</p></div>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; border-top:1px solid #e2e8f0; padding-top:16px;">
            <a href="https://wa.me/${cleanPhone}?text=${defaultMsg}" target="_blank" class="btn-comm btn-wa">${SVG_WA}WhatsApp</a>
            <a href="sms:${a.phone}?body=${defaultMsg}" class="btn-comm btn-sms">${SVG_SMS}SMS</a>
            <a href="tel:${a.phone}" class="btn-comm btn-call">${SVG_CALL}Call</a>
            <button class="btn-ios btn-secondary" onclick="editAccount('${a.accountNo}')">${SVG_EDIT}Edit Account</button>
        </div>
    `;
    modal.style.display = 'flex';
}
window.inspectAccount = inspectAccount;

function editAccount(accNo) {
    const a = dbAccounts.find(item => item.accountNo === accNo);
    if (!a) return;

    document.getElementById('accountModal').style.display = 'none';

    document.getElementById('editAccNoHidden').value = a.accountNo;
    document.getElementById('editAccNoDisplay').value = a.accountNo;
    document.getElementById('editNic').value = a.nic !== '-' ? a.nic : '';
    document.getElementById('editBirthday').value = a.birthday !== '-' ? a.birthday : '';
    document.getElementById('editGender').value = a.gender || 'Male';
    document.getElementById('editPhone').value = a.phone !== '-' ? a.phone : '';
    document.getElementById('editJoinedDate').value = a.joinedDate !== '-' ? a.joinedDate : '';

    document.getElementById('editModal').style.display = 'flex';
}
window.editAccount = editAccount;

function deleteAccount(accNo) {
    if (confirm(`Remove Account Number ${accNo}?`)) {
        dbAccounts = dbAccounts.filter(a => a.accountNo !== accNo);
        saveDatabase();
        refreshAllViews();
        showToast(`Account ${accNo} removed.`);
    }
}
window.deleteAccount = deleteAccount;

function exportToCSV() {
    if (dbAccounts.length === 0) {
        showToast('No records to export!', 'danger');
        return;
    }
    let csv = "Account No,NIC,Birthday,Gender,Phone,Joined Date\n";
    dbAccounts.forEach(a => {
        csv += `"${a.accountNo}","${a.nic}","${a.birthday}","${a.gender}","${a.phone}","${a.joinedDate}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SANASA_Accounts_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    showToast('CSV export downloaded!');
}

function renderAnalyticsView() {
    const minAge = parseInt(document.getElementById('ageMinInput')?.value) || 0;
    const maxAge = parseInt(document.getElementById('ageMaxInput')?.value) || 120;
    const tbody = document.getElementById('ageFilteredTbody');
    const statsGrid = document.getElementById('analyticsStatsGrid');

    const filtered = dbAccounts.filter(a => {
        const age = calculateAge(a.birthday);
        return age !== null && age >= minAge && age <= maxAge;
    });

    if (statsGrid) {
        const u30 = dbAccounts.filter(a => { const age = calculateAge(a.birthday); return age !== null && age < 30; }).length;
        const u60 = dbAccounts.filter(a => { const age = calculateAge(a.birthday); return age !== null && age >= 30 && age <= 60; }).length;
        const o60 = dbAccounts.filter(a => { const age = calculateAge(a.birthday); return age !== null && age > 60; }).length;

        statsGrid.innerHTML = `
            <div class="card-action bg-blue">
                <div class="card-action-info">
                    <span class="card-label">UNDER 30 YEARS</span>
                    <h3>${u30}</h3>
                </div>
            </div>
            <div class="card-action bg-teal">
                <div class="card-action-info">
                    <span class="card-label">30 TO 60 YEARS</span>
                    <h3>${u60}</h3>
                </div>
            </div>
            <div class="card-action bg-purple">
                <div class="card-action-info">
                    <span class="card-label">OVER 60 YEARS</span>
                    <h3>${o60}</h3>
                </div>
            </div>
        `;
    }

    if (tbody) {
        tbody.innerHTML = filtered.map(a => `
            <tr>
                <td><strong style="color:#0f172a;">${a.accountNo}</strong></td>
                <td>${a.nic}</td>
                <td>${a.birthday}</td>
                <td>${calculateAge(a.birthday)} yrs</td>
                <td>${a.gender}</td>
                <td>${a.phone}</td>
            </tr>
        `).join('');
    }
}

// FULL BIRTHDAYS TRACKER HUB
function renderBirthdaysView() {
    const todayGrid = document.getElementById('fullTodayBirthdaysGrid');
    const upcomingGrid = document.getElementById('fullUpcoming7DaysGrid');

    const today = new Date();
    const todayMonthDay = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const todayList = dbAccounts.filter(a => a.birthday && a.birthday !== '-' && a.birthday.slice(5, 10) === todayMonthDay);

    if (todayGrid) {
        if (todayList.length === 0) {
            todayGrid.innerHTML = `<p class="empty-state">No birthdays today.</p>`;
        } else {
            todayGrid.innerHTML = todayList.map(a => createWishCard(a, 'Today')).join('');
        }
    }

    const upcoming7DaysList = getUpcomingBirthdaysList(7);
    if (upcomingGrid) {
        if (upcoming7DaysList.length === 0) {
            upcomingGrid.innerHTML = `<p class="empty-state">No upcoming birthdays in the next 7 days.</p>`;
        } else {
            upcomingGrid.innerHTML = upcoming7DaysList.map(item => createWishCard(item.account, item.dueText)).join('');
        }
    }
}

// DROPZONE & SMARTCOOP PDF PARSER
function setupDropzone() {
    const zone = document.getElementById('smartDropzone');
    const fileInput = document.getElementById('fileInput');

    zone?.addEventListener('dragover', (e) => { e.preventDefault(); zone.style.borderColor = '#2563eb'; });
    zone?.addEventListener('dragleave', () => { zone.style.borderColor = ''; });
    zone?.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.style.borderColor = '';
        if (e.dataTransfer.files.length) parseImportFile(e.dataTransfer.files[0]);
    });

    fileInput?.addEventListener('change', (e) => {
        if (e.target.files.length) parseImportFile(e.target.files[0]);
    });
}

function parseImportFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    const progress = document.getElementById('importProgress');
    if (progress) progress.style.display = 'block';

    if (ext === 'pdf') {
        parseSmartCoopPDF(file);
    } else if (['xlsx', 'xls', 'csv'].includes(ext)) {
        parseExcelFile(file);
    } else {
        showToast('Unsupported format. Please upload PDF, XLSX, or CSV.', 'danger');
        if (progress) progress.style.display = 'none';
    }
}

// SmartCoop PDF Parser
async function parseSmartCoopPDF(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        if (typeof pdfjsLib === 'undefined') {
            showToast('PDF Engine library unavailable.', 'danger');
            return;
        }

        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let parsedRecords = [];

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const content = await page.getTextContent();
            const items = content.items;
            if (!items.length) continue;

            items.sort((a, b) => b.transform[5] - a.transform[5]);
            let rows = [];
            let currentRow = [];
            let lastY = items[0].transform[5];

            for (let item of items) {
                let y = item.transform[5];
                if (Math.abs(lastY - y) > 4) {
                    if (currentRow.length) {
                        currentRow.sort((a, b) => a.transform[4] - b.transform[4]);
                        rows.push(currentRow.map(it => it.str.trim()));
                    }
                    currentRow = [item];
                    lastY = y;
                } else {
                    currentRow.push(item);
                }
            }
            if (currentRow.length) {
                currentRow.sort((a, b) => a.transform[4] - b.transform[4]);
                rows.push(currentRow.map(it => it.str.trim()));
            }

            for (let r of rows) {
                const text = r.join(' ');
                if (text.includes('සංඛ්‍යාව') || text.includes('ලිපිනය') || text.includes('SmartCoop') || text.includes('පිටු අංක')) continue;

                let accNo = '';
                for (let cell of r) {
                    let digits = cell.replace(/\D/g, '');
                    if (digits.length >= 7 && digits.length <= 12 && digits.startsWith('010')) {
                        accNo = digits;
                        break;
                    }
                }
                if (!accNo) continue;

                let nic = '-';
                for (let cell of r) {
                    let ex = extractNIC(cell);
                    if (ex !== '-') { nic = ex; break; }
                }
                if (nic === '-') {
                    nic = extractNIC(r.join(' '));
                }

                let phone = r.find(s => /^0\d{9}$/.test(s.replace(/\s/g, ''))) || '-';
                let birthday = r.find(s => /^\d{4}-\d{2}-\d{2}$/.test(s)) || '-';
                let rawGender = r.find(s => {
                    let lower = s.toLowerCase();
                    return lower.includes('ස්ත්‍රී') || lower.includes('පුරුෂ') || lower.includes('female') || lower.includes('male') || lower === 'f' || lower === 'm';
                }) || '';
                let gender = normalizeGender(rawGender, nic);

                let dates = r.filter(s => /^\d{4}-\d{2}-\d{2}$/.test(s));
                let joinedDate = dates.length > 1 ? dates[1] : (dates[0] && dates[0] !== birthday ? dates[0] : '-');

                parsedRecords.push({ accountNo: accNo, nic, birthday, gender, phone, joinedDate });
            }
        }

        if (parsedRecords.length > 0) {
            const initialCount = dbAccounts.length;
            dbAccounts = mergeAndDeduplicate([...dbAccounts, ...parsedRecords]);
            saveDatabase();
            refreshAllViews();

            const addedOrUpdated = dbAccounts.length - initialCount;
            showToast(`PDF Import Success! Extracted ${parsedRecords.length} records.`);
        } else {
            showToast('No account records identified in PDF.', 'danger');
        }

    } catch (err) {
        console.error(err);
        showToast('PDF Parsing error.', 'danger');
    } finally {
        document.getElementById('importProgress').style.display = 'none';
    }
}

// Parse Excel File
function parseExcelFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            let newRecords = [];
            jsonData.forEach(row => {
                const accNo = row['Account No'] || row['AccountNo'] || row['AccNo'] || row['සාමාජικ අංකය'] || row['Account_No'];
                if (accNo) {
                    const rawNic = row['NIC'] || row['NIC No'] || row['හැඳුනුම්පත් අංකය'] || row['NIC_No'] || '-';
                    const nic = extractNIC(rawNic);
                    const rawGender = row['Gender'] || row['Sex'] || row['ලිංගය'] || row['ස්ත්‍රී/පුරුෂ'] || '';
                    newRecords.push({
                        accountNo: accNo.toString().trim(),
                        nic: nic,
                        birthday: row['Birthday'] || row['උපන් දිනය'] || '-',
                        gender: normalizeGender(rawGender, nic),
                        phone: row['Phone'] || row['දුරකතන'] || '-',
                        joinedDate: row['JoinedDate'] || row['ආරම්භක දිනය'] || '-'
                    });
                }
            });

            if (newRecords.length) {
                dbAccounts = mergeAndDeduplicate([...dbAccounts, ...newRecords]);
                saveDatabase();
                refreshAllViews();
                showToast(`Excel Import Success! Processed ${newRecords.length} records.`);
            }
        } catch(err) {
            console.error(err);
            showToast('Excel reading failed.', 'danger');
        } finally {
            document.getElementById('importProgress').style.display = 'none';
        }
    };
    reader.readAsArrayBuffer(file);
}

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    if (type === 'danger') toast.style.backgroundColor = '#ef4444';
    if (type === 'success') toast.style.backgroundColor = '#16a34a';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3500);
}

// =============================================================
// BULK SMS BROADCASTER ENGINE
// =============================================================

let _bulkReadyAccounts = [];

function getBulkSmsFiltered() {
    const prefix = (document.getElementById('bulkSmsPrefix')?.value || '0101').trim();
    const genderFilter = document.getElementById('bulkSmsGender')?.value || 'all';
    const phoneFilter = document.getElementById('bulkSmsPhoneFilter')?.value || 'valid';

    return dbAccounts.filter(a => {
        // Prefix match
        if (prefix && !a.accountNo.startsWith(prefix)) return false;

        // Gender filter
        if (genderFilter === 'male') {
            const g = (a.gender || '').toLowerCase();
            if (g !== 'male' && g !== 'm') return false;
        } else if (genderFilter === 'female') {
            const g = (a.gender || '').toLowerCase();
            if (g !== 'female' && g !== 'f') return false;
        }

        // Phone filter
        if (phoneFilter === 'valid') {
            if (!a.phone || a.phone === '-' || !/^0\d{9}$/.test(a.phone.replace(/\s/g, ''))) return false;
        }

        return true;
    });
}

function updateBulkSmsBanner() {
    const filtered = getBulkSmsFiltered();
    const countTag = document.getElementById('bulkSmsCountTag');
    const banner = document.getElementById('bulkSmsStatBanner');
    const statText = document.getElementById('bulkSmsStatText');

    if (countTag) countTag.textContent = `${filtered.length} Recipients`;

    if (banner && statText) {
        if (filtered.length > 0) {
            const withPhone = filtered.filter(a => a.phone && a.phone !== '-' && /^0\d{9}$/.test(a.phone.replace(/\s/g, ''))).length;
            const prefix = document.getElementById('bulkSmsPrefix')?.value || '0101';
            statText.textContent = `"${prefix}" prefix accounts: ${filtered.length} total | ${withPhone} with valid phones | ${filtered.length - withPhone} without phone`;
            banner.style.display = 'block';
        } else {
            banner.style.display = 'none';
        }
    }
}

function generateBulkSmsList() {
    const filtered = getBulkSmsFiltered();
    const message = document.getElementById('bulkSmsMessage')?.value || '';

    if (!message.trim()) {
        showToast('SMS message liyanna! Message field empty.', 'danger');
        return;
    }

    if (filtered.length === 0) {
        showToast('No matching accounts found! Change prefix or filter.', 'danger');
        return;
    }

    const progress = document.getElementById('bulkSmsSendProgress');
    const progressFill = document.getElementById('bulkSmsProgressFill');
    const progressLabel = document.getElementById('bulkSmsProgressLabel');
    const resultCard = document.getElementById('bulkSmsResultCard');
    const listContainer = document.getElementById('bulkSmsListContainer');
    const readyCount = document.getElementById('bulkSmsReadyCount');
    const skipCount = document.getElementById('bulkSmsSkipCount');

    // Show progress
    if (progress) progress.style.display = 'block';
    if (progressFill) progressFill.style.width = '0%';
    if (progressLabel) progressLabel.textContent = `Generating list for ${filtered.length} accounts...`;

    let readyAccounts = [];
    let skippedAccounts = [];

    filtered.forEach(a => {
        const phone = (a.phone || '').replace(/\s/g, '');
        const hasValidPhone = /^0\d{9}$/.test(phone);
        if (hasValidPhone) {
            readyAccounts.push(a);
        } else {
            skippedAccounts.push(a);
        }
    });

    // Render list
    setTimeout(() => {
        if (progressFill) progressFill.style.width = '100%';
        if (progressLabel) progressLabel.textContent = `Done! ${readyAccounts.length} accounts ready.`;

        if (readyCount) readyCount.textContent = `${readyAccounts.length} Ready`;
        if (skipCount) skipCount.textContent = `${skippedAccounts.length} Skipped (No Phone)`;

        const encodedMsg = encodeURIComponent(message);

        let html = '';

        if (readyAccounts.length > 0) {
            html += `<div style="padding:12px 20px;background:#f0fdf4;border-bottom:2px solid #bbf7d0;font-size:12px;font-weight:700;color:#15803d;letter-spacing:0.5px;">
                ✅ READY TO SEND — ${readyAccounts.length} ACCOUNTS
            </div>`;
            readyAccounts.forEach((a, idx) => {
                const cleanPhone = (a.phone || '').replace(/\s/g, '');
                const whatsappPhone = formatWhatsAppPhone(cleanPhone);
                const genderBadge = ((a.gender || '').toLowerCase() === 'female' || (a.gender || '').toLowerCase() === 'f')
                    ? `<span style="background:#fce7f3;color:#be185d;padding:2px 8px;border-radius:8px;font-size:10px;font-weight:700;">Female</span>`
                    : `<span style="background:#dbeafe;color:#1d4ed8;padding:2px 8px;border-radius:8px;font-size:10px;font-weight:700;">Male</span>`;

                html += `
                    <div class="bulk-sms-row" style="display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-bottom:1px solid #f1f5f9;gap:12px;flex-wrap:wrap;" id="bulk-row-${idx}">
                        <div style="display:flex;align-items:center;gap:12px;min-width:0;flex:1;">
                            <div style="background:#eff6ff;color:#2563eb;width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0;">${idx + 1}</div>
                            <div style="min-width:0;">
                                <div style="font-weight:800;color:#0f172a;font-size:13px;">${a.accountNo} ${genderBadge}</div>
                                <div style="font-size:12px;color:#64748b;margin-top:2px;">📞 ${a.phone}</div>
                            </div>
                        </div>
                        <div style="display:flex;gap:6px;flex-shrink:0;">
                            <a href="sms:${cleanPhone}?body=${encodedMsg}" class="btn-comm btn-sms" style="font-size:11px;padding:6px 14px;" onclick="markSmsSent('bulk-row-${idx}')">
                                ${SVG_SMS} SMS
                            </a>
                            <a href="https://wa.me/${whatsappPhone}?text=${encodedMsg}" target="_blank" class="btn-comm btn-wa" style="font-size:11px;padding:6px 14px;">
                                ${SVG_WA} WA
                            </a>
                            <a href="tel:${cleanPhone}" class="btn-comm btn-call" style="font-size:11px;padding:6px 14px;">
                                ${SVG_CALL} Call
                            </a>
                        </div>
                    </div>`;
            });
        }

        if (skippedAccounts.length > 0) {
            html += `<div style="padding:12px 20px;background:#fffbeb;border-bottom:2px solid #fde68a;border-top:2px solid #fde68a;font-size:12px;font-weight:700;color:#92400e;letter-spacing:0.5px;margin-top:4px;">
                ⚠️ SKIPPED — ${skippedAccounts.length} ACCOUNTS (No Valid Phone)
            </div>`;
            skippedAccounts.forEach(a => {
                html += `
                    <div style="display:flex;align-items:center;gap:12px;padding:10px 20px;border-bottom:1px solid #f1f5f9;opacity:0.6;">
                        <div style="background:#fef3c7;color:#92400e;width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">—</div>
                        <div style="font-size:12px;color:#64748b;"><strong style="color:#0f172a;">${a.accountNo}</strong> — Phone: ${a.phone || 'N/A'}</div>
                    </div>`;
            });
        }

        if (listContainer) listContainer.innerHTML = html;
        if (resultCard) resultCard.style.display = 'block';

        _bulkReadyAccounts = readyAccounts;
        const btnSendAll = document.getElementById('btnSendAllNow');
        if (btnSendAll) {
            btnSendAll.onclick = openBulkSendAllModal;
        }

        setTimeout(() => {
            if (progress) progress.style.display = 'none';
        }, 1200);

        showToast(`✅ SMS List Ready! ${readyAccounts.length} accounts yawanna puluwan.`, 'success');

        // Scroll to result
        resultCard?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }, 300);
}

function markSmsSent(rowId) {
    const row = document.getElementById(rowId);
    if (row) {
        row.style.background = '#f0fdf4';
        row.style.borderLeft = '3px solid #22c55e';
        const sent = document.createElement('span');
        sent.style.cssText = 'font-size:10px;color:#16a34a;font-weight:700;margin-left:8px;';
        sent.textContent = '✓ SMS Sent';
        const numDiv = row.querySelector('div div div');
        if (numDiv) numDiv.appendChild(sent);
    }
}
window.markSmsSent = markSmsSent;

function copyAllFilteredNumbers() {
    const filtered = getBulkSmsFiltered();
    const validPhones = filtered
        .filter(a => a.phone && a.phone !== '-' && /^0\d{9}$/.test(a.phone.replace(/\s/g,'')))
        .map(a => a.phone.replace(/\s/g,''));

    if (validPhones.length === 0) {
        showToast('No valid phone numbers to copy!', 'danger');
        return;
    }

    const text = validPhones.join('\n');
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✅ ${validPhones.length} phone numbers copied to clipboard!`, 'success');
    }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        showToast(`✅ ${validPhones.length} phone numbers copied!`, 'success');
    });
}

function copyBulkSmsMessage() {
    const message = document.getElementById('bulkSmsMessage')?.value || '';
    if (!message.trim()) {
        showToast('Message field empty!', 'danger');
        return;
    }
    navigator.clipboard.writeText(message).then(() => {
        showToast('✅ SMS message copied to clipboard!', 'success');
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = message;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        showToast('✅ Message copied!', 'success');
    });
}

// =============================================================
// BULK SEND ALL MODAL — Open, Tabs, Download
// =============================================================

function openBulkSendAllModal() {
    if (_bulkReadyAccounts.length === 0) {
        // Try to build from current filter
        const filtered = getBulkSmsFiltered();
        _bulkReadyAccounts = filtered.filter(a =>
            a.phone && a.phone !== '-' && /^0\d{9}$/.test(a.phone.replace(/\s/g, ''))
        );
    }

    if (_bulkReadyAccounts.length === 0) {
        showToast('No valid accounts! Generate SMS List first.', 'danger');
        return;
    }

    const message = document.getElementById('bulkSmsMessage')?.value || '';

    // Populate modal fields
    const phones = _bulkReadyAccounts.map(a => a.phone.replace(/\s/g, ''));

    const numbersEl = document.getElementById('bulkAllNumbersText');
    if (numbersEl) numbersEl.value = phones.join('\n');

    const countEl = document.getElementById('bulkModalNumberCount');
    if (countEl) countEl.textContent = phones.length;

    const msgEl = document.getElementById('bulkModalMessageText');
    if (msgEl) msgEl.value = message;

    // Reset to step 1
    switchBulkTab(1);

    // Show modal
    const modal = document.getElementById('bulkSendAllModal');
    if (modal) modal.style.display = 'flex';
}
window.openBulkSendAllModal = openBulkSendAllModal;

function switchBulkTab(tabNum) {
    [1, 2, 3].forEach(n => {
        const content = document.getElementById(`bulkTabContent${n}`);
        const tab = document.getElementById(`tabStep${n}`);
        if (content) content.style.display = (n === tabNum) ? 'block' : 'none';
        if (tab) {
            if (n === tabNum) {
                tab.style.background = '#eff6ff';
                tab.style.color = '#2563eb';
                tab.style.borderBottom = '2px solid #2563eb';
            } else {
                tab.style.background = 'white';
                tab.style.color = '#64748b';
                tab.style.borderBottom = '2px solid transparent';
            }
        }
    });
}
window.switchBulkTab = switchBulkTab;

function copyBulkNumbers() {
    const el = document.getElementById('bulkAllNumbersText');
    const text = el?.value || '';
    if (!text.trim()) { showToast('No numbers!', 'danger'); return; }
    el.select();
    navigator.clipboard.writeText(text).then(() => {
        showToast(`✅ ${_bulkReadyAccounts.length} numbers copied!`, 'success');
    }).catch(() => {
        document.execCommand('copy');
        showToast(`✅ Numbers copied!`, 'success');
    });
}
window.copyBulkNumbers = copyBulkNumbers;

function copyBulkMessage() {
    const el = document.getElementById('bulkModalMessageText');
    const text = el?.value || '';
    if (!text.trim()) { showToast('Message empty!', 'danger'); return; }
    el.select();
    navigator.clipboard.writeText(text).then(() => {
        showToast('✅ Message copied!', 'success');
    }).catch(() => {
        document.execCommand('copy');
        showToast('✅ Message copied!', 'success');
    });
}
window.copyBulkMessage = copyBulkMessage;

function downloadBulkSmsCSV() {
    if (_bulkReadyAccounts.length === 0) {
        showToast('No accounts! Generate list first.', 'danger');
        return;
    }
    const message = document.getElementById('bulkSmsMessage')?.value || '';
    // Escape CSV fields
    const esc = v => `"${(v || '').toString().replace(/"/g, '""')}"`;
    let csv = 'Account No,Phone,Gender,Message\n';
    _bulkReadyAccounts.forEach(a => {
        csv += `${esc(a.accountNo)},${esc(a.phone.replace(/\s/g,''))},${esc(a.gender)},${esc(message)}\n`;
    });
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const prefix = document.getElementById('bulkSmsPrefix')?.value || '0101';
    a.download = `GSCS_BulkSMS_${prefix}_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    showToast(`✅ CSV downloaded! ${_bulkReadyAccounts.length} rows.`, 'success');
}
window.downloadBulkSmsCSV = downloadBulkSmsCSV;

function downloadBulkSmsTxt() {
    if (_bulkReadyAccounts.length === 0) {
        showToast('No accounts! Generate list first.', 'danger');
        return;
    }
    const phones = _bulkReadyAccounts.map(a => a.phone.replace(/\s/g, '')).join('\n');
    const blob = new Blob([phones], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const prefix = document.getElementById('bulkSmsPrefix')?.value || '0101';
    a.download = `GSCS_PhoneNumbers_${prefix}_${new Date().toISOString().slice(0,10)}.txt`;
    a.click();
    showToast(`✅ TXT downloaded! ${_bulkReadyAccounts.length} numbers.`, 'success');
}
window.downloadBulkSmsTxt = downloadBulkSmsTxt;
