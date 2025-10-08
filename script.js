// Data 19 file
const files = [
    {
        name: "debian-9.13.0-amd64-DVD-2",
        description: "debian-9.13.0-amd64-DVD-2",
        size: "4,35 GB",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/debian-9.13.0-amd64-DVD-2.iso",
        icon: "💿"
    },
    {
        name: "debian-10.5.0-amd64-DVD-1.iso",
        description: "debian-10.5.0-amd64-DVD-1.iso",
        size: "3.69 GB",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/debian-10.5.0-amd64-DVD-1.iso",
        icon: "💿"
    },
    {
        name: "debian-10.5.0-amd64-DVD-2",
        description: "debian-10.5.0-amd64-DVD-2",
        size: "4,36 GB",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/debian-10.5.0-amd64-DVD-2.iso",
        icon: "💿"
    },
    {
        name: "debian-10.5.0-amd64-DVD-3",
        description: "debian-10.5.0-amd64-DVD-3",
        size: "4,36 GB",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/debian-10.5.0-amd64-DVD-3.iso",
        icon: "💿"
    },
    {
        name: "office-2021",
        description: "office-2021",
        size: "3,41 GB",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/Microsoft.Office.2016-2021x64.v2021.12.iso",
        icon: "💿"
    },
    {
        name: "ubuntu-24.10-desktop-amd64",
        description: "ubuntu-24.10-desktop-amd64",
        size: "5,27 GB",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/ubuntu-24.10-desktop-amd64.iso",
        icon: "💿"
    },
    {
        name: "ubuntu-24.10-live-server-amd64",
        description: "ubuntu-24.10-live-server-amd64",
        size: "1,95 GB",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/ubuntu-24.10-live-server-amd64.iso",
        icon: "💿"
    },
     {
        name: "win 10 ",
        description: "windows 10",
        size: "4,55 GB ",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/win 10 original.iso",
        icon: "💿"
    },
    {
        name: "win 11 ",
        description: "windows 11",
        size: "5,41 GB ",
        date: "2025-09-08",
        category: "os",
        url: "files/iso/Win11_24H2_English_x64.iso",
        icon: "💿"
    },
    {
        name: "putty-64bit-0.82-installer",
        description: "putty-64bit-0.82-installer",
        size: "3,62 MB",
        date: "2025-08-09",
        category: "tools",
        url: "files/putty-64bit-0.82-installer.msi",
        icon: "🛠️"
    },
    {
        name: "VC_redist.x64",
        description: "VC_redist.x64 C++2019",
        size: "24,4 MB ",
        date: "2025-08-09",
        category: "tools",
        url: "files/setup/VC_redist.x64.exe",
        icon: "🛠️"
    },
     {
        name: "VirtualBox-7.0.20-163906-Win",
        description: "VirtualBox-7.0.20-163906-Win",
        size: "105 MB ",
        date: "2025-08-09",
        category: "tools",
        url: "files/setup/VirtualBox-7.0.20-163906-Win.exe",
        icon: "🛠️"
    },
    {
        name: "WinSCP-6.5-Setup",
        description: "WinSCP-6.5-Setup",
        size: "11,6 MB ",
        date: "2025-08-09",
        category: "tools",
        url: "files/setup/WinSCP-6.5-Setup.exe",
        icon: "🛠️"
    },
    {
        name: "wordpress-6.8.1",
        description: "wordpress-6.8.1",
        size: "27,2 MB ",
        date: "2025-08-09",
        category: "tools",
        url: "files/setup/wordpress-6.8.1.zip",
        icon: "🛠️"
    },
     {
        name: "1.Cara Instal Debian 10 di VirtualBox",
        description: "Cara Instal Debian 10 di VirtualBox",
        size: "33,1 MB",
        date: "2025-09-08",
        category: "media",
        url: "files/vid/1. INSTALL DEBIAN 10 VIRTUALBOX ｜｜ MANAGE FILE AND DIRECTORY.mp4",
        icon: "📼"
    },
    {
        name: "2. Remote Server SSH and Network Configuration Debian 10",
        description: "Remote Server SSH and Network Configuration Debian 10",
        size: "37,5 MB",
        date: "2025-09-08",
        category: "media",
        url: "files/vid/1. INSTALL DEBIAN 10 VIRTUALBOX ｜｜ MANAGE FILE AND DIRECTORY.mp4",
        icon: "📼"
    },
    {
        name: "3. FTP SERVER DEBIAN 10 UPLOAD DOWNLOAD FILE or DIRECTORY",
        description: "FTP SERVER DEBIAN 10 UPLOAD DOWNLOAD FILE or DIRECTORY",
        size: "60,6 MB",
        date: "2025-08-09",
        category: "media",
        url: "files/vid/3. FTP SERVER DEBIAN 10 __ UPLOAD DOWNLOAD FILE or DIRECTORY.mp4",
        icon: "📼"
    },
    {
        name: "4. SAMBA SERVER DEBIAN 10 INSTALL AND CONFIGURATION SAMBA LINUX DEBIAN",
        description: "SAMBA SERVER DEBIAN 10 INSTALL AND CONFIGURATION SAMBA LINUX DEBIAN",
        size: "70,6 MB",
        date: "2025-08-09",
        category: "media",
        url: "files/vid/4. SAMBA SERVER DEBIAN 10 __ INSTALL AND CONFIGURATION SAMBA LINUX DEBIAN.mp4",
        icon: "📼"
    },
    {
        name: "5. DNS SERVER DEBIAN 10 INSTALL AND CONFIGURE BIND9 DEBIAN 10",
        description: " DNS SERVER DEBIAN 10 INSTALL AND CONFIGURE BIND9 DEBIAN 10",
        size: "48,0 MB",
        date: "2025-09-09",
        category: "media",
        url: "files/vid/5. DNS SERVER DEBIAN 10 INSTALL AND CONFIGURE __ BIND9 DEBIAN 10.mp4",
        icon: "📼"
    },
    {
        name: "6. WEB SERVER DEBIAN 10 INSTALL AND CONFIGURE INSTALL APACHE2 DEBIAN 10 UPLOAD SIMPLE WEBSITE 3",
        description: " WEB SERVER DEBIAN 10 INSTALL AND CONFIGURE INSTALL APACHE2 ",
        size: "94,9 MB",
        date: "2025-09-09",
        category: "media",
        url: "files/vid/6. WEB SERVER DEBIAN 10 INSTALL AND CONFIGURE __ INSTALL APACHE2 DEBIAN 10 __ UPLOAD SIMPLE WEBSITE 3.mp4",
        icon: "📼"
    },
    {
        name: "7. DATABASE MARIADB  PHPMYADMIN DEBIAN 10 INSTALL AND CONFIGURE",
        description: " DATABASE MARIADB - PHPMYADMIN DEBIAN 10  INSTALL AND CONFIGURE ",
        size: "91,0 MB",
        date: "2025-09-09",
        category: "media",
        url: "files/vid/7. DATABASE MARIADB - PHPMYADMIN DEBIAN 10 __ INSTALL AND CONFIGURE.mp4",
        icon: "📼"
    },
    {
        name: "8, WODPRESS - DEBIAN 10  INSTALL AND CONFIGURE",
        description: " DATABASE MARIADB - PHPMYADMIN DEBIAN 10  INSTALL AND CONFIGURE ",
        size: "91,0 MB",
        date: "2025-09-09",
        category: "media",
        url: "files/vid/8. WODPRESS - DEBIAN 10 __ INSTALL AND CONFIGURE.mp4",
        icon: "📼"
    },
    {
        name: "Tutorial Instalasi Mail Server dan Web Mail pada virtual box mengunakan Debian 10",
        description: "Tutorial Instalasi Mail Server dan Web Mail pada virtual box mengunakan Debian 10",
        size: "70,5 MB ",
        date: "2025-09-09",
        category: "media",
        url: "files/vid/Tutorial Instalasi Mail Server dan Web Mail pada virtual box mengunakan Debian 10.mp4",
        icon: "📼"
    },


];

// Fungsi untuk mendapatkan nama kategori
function getCategoryName(category) {
    const categories = {
        'os': 'Sistem Operasi',
        'doc': 'Dokumen',
        'tools': 'Tools',
        'media': 'Media'
    };
    return categories[category] || 'Lainnya';
}

// Fungsi untuk menampilkan file
function displayFiles(fileList = files) {
    const fileListContainer = document.getElementById('fileList');
    fileListContainer.innerHTML = '';

    fileList.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-header">
                <div class="file-icon">${file.icon}</div>
                <div class="file-info">
                    <h3>${file.name}</h3>
                    <span class="category">${getCategoryName(file.category)}</span>
                </div>
            </div>
            <div class="file-description">${file.description}</div>
            <div class="file-details">
                <span>${file.size}</span>
                <span>${file.date}</span>
            </div>
            <a href="${file.url}" class="download-btn" download>📥 Download</a>
        `;
        fileListContainer.appendChild(fileItem);
    });
}

// Fungsi pencarian
function searchFiles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredFiles = files.filter(file => 
        file.name.toLowerCase().includes(searchTerm) || 
        file.description.toLowerCase().includes(searchTerm) ||
        getCategoryName(file.category).toLowerCase().includes(searchTerm)
    );
    displayFiles(filteredFiles);
}

// Fungsi filter kategori
function filterCategory(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    let filteredFiles = files;
    if (category !== 'all') {
        filteredFiles = files.filter(file => file.category === category);
    }
    displayFiles(filteredFiles);
}

// Event listener untuk input pencarian
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchFiles();
    }
});

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    displayFiles();
});