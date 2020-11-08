window.onload = function () {
    generateBadge();
};

function generateBadge() {
    // let name = jAnswear['userNameFk'];

    // let answear1 = jAnswear['answear1'];
    // let answear2 = jAnswear['answear2'];
    // let answear3 = jAnswear['answear3'];


    let name = "You are a";

    let answear1 = "Naive";
    let answear2 = "Unthinking";
    let answear3 = "Conformists";

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="315" height="315" viewBox="0 0 315 315">
    <style>
        text {
            fill: black;
            text-anchor:middle;
            dominant-baseline: middle;
        }
    </style>
        <g id="Rectangle_287" data-name="Rectangle 287" transform="translate(12 11)" stroke="#000" stroke-width="5">
            <rect width="303" height="304" rx="20" stroke="none"/>
            <rect x="2.5" y="2.5" width="298" height="299" rx="17.5" fill="none" stroke="none"/>
        </g>
        <g id="Rectangle_288" data-name="Rectangle 288" fill="#f4f2ee" stroke="#000" stroke-width="5">
            <rect width="303" height="304" rx="20" stroke="none"/>
            <rect x="2.5" y="2.5" width="298" height="299" rx="17.5" fill="none" stroke-width="6" stroke="black"/>
        </g>
        <g id="Group_238" data-name="Group 238" transform="translate(-7014 -13595)">
            <text id="_1.some_adjective" data-name="1.some adjective" transform="translate(7166 13733)" font-size="31" font-family="Monarcha-Bold, Monarcha" font-weight="700"><tspan y="0">${answear1}</tspan></text>
            <text id="_2.some_adjective" data-name="2.some adjective" transform="translate(7166 13783)" font-size="31" font-family="Monarcha-Bold, Monarcha" font-weight="700"><tspan y="0">${answear2}</tspan></text>
            <text id="_3.some_adjective" data-name="3.some adjective" transform="translate(7166 13833)" font-size="31" font-family="Monarcha-Bold, Monarcha" font-weight="700"><tspan y="0">${answear3}</tspan></text>
            <text id="Tom_is_a" data-name="Tom is a" transform="translate(7158 13683)" font-size="31" font-family="Monarcha-Bold, Monarcha" font-weight="700"><tspan y="0">${name}</tspan></text>
        </g>
    </svg>
`
    svgToPng(svg, (imgData) => {
        const pngImage = document.createElement('img');
        //document.querySelector('.page__subject').appendChild(pngImage);
        // document.body.appendChild(pngImage);
        pngImage.src = imgData;

        const link = document.querySelector('.download--link');
        link.href = imgData;
    });
    function svgToPng(svg, callback) {
        const url = getSvgUrl(svg);
        svgUrlToPng(url, (imgData) => {
            callback(imgData);
            URL.revokeObjectURL(url);
        });
    }
    function getSvgUrl(svg) {
        return URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    }
    function svgUrlToPng(svgUrl, callback) {
        const svgImage = document.createElement('img');
        // imgPreview.style.position = 'absolute';
        // imgPreview.style.top = '-9999px';

        document.querySelector('.page__subject').appendChild(svgImage);
        //document.body.appendChild(svgImage);
        svgImage.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = svgImage.clientWidth;
            canvas.height = svgImage.clientHeight;
            const canvasCtx = canvas.getContext('2d');
            canvasCtx.drawImage(svgImage, 0, 0);
            canvasCtx.fillStyle = 'blue';
            const imgData = canvas.toDataURL('image/png');
            callback(imgData);
            // document.body.removeChild(imgPreview);
        };
        svgImage.src = svgUrl;
    }
}

// document.querySelector("#badge-download").addEventListener("click", destroySession);

// function destroySession() {
//     console.log('download');
// }

