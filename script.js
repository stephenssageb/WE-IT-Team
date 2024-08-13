function startDownload(linkId) {
    let downloadLinks = {
        'link1': 'https://my.weteam.tech/epc',
        'link2': 'https://my.weteam.tech/crops',
        'link3': 'https://download.splashtop.com/sos/SplashtopSOS.exe',
        'link4': 'https://my.weteam.tech/sa252',
        'link5': 'https://my.weteam.tech/teams64'
    };

    window.location.href = downloadLinks[linkId];
}
