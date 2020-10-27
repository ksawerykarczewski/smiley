
let svg =
    `<svg id="svg_element" xmlns="http://www.w3.org/2000/svg" width="315" height="315" viewBox="0 0 315 315">
<g id="Group_234" data-name="Group 234" transform="translate(-43 -212)">
    <g id="Group_233" data-name="Group 233">
        <g id="Rectangle_268" data-name="Rectangle 268" transform="translate(55 223)" stroke="#000"
            stroke-width="5">
            <rect width="303" height="304" rx="20" stroke="none" />
            <rect x="2.5" y="2.5" width="298" height="299" rx="17.5" fill="none" />
        </g>
        <g id="Rectangle_267" data-name="Rectangle 267" transform="translate(43 212)" fill="#f4f2ee"
            stroke="#000" stroke-width="5">
            <rect width="303" height="304" rx="20" stroke="none" />
            <rect x="2.5" y="2.5" width="298" height="299" rx="17.5" fill="none" />
        </g>
        <text id="Bitter" transform="translate(196 275)" font-size="31"
            font-family="Monarcha-Bold, Monarcha" font-weight="700">
            <tspan x="-46.701" y="0">Bitter</tspan>
        </text>
        <text id="Fascist" transform="translate(195 315)" font-size="31"
            font-family="Monarcha-Bold, Monarcha" font-weight="700">
            <tspan x="-54.343" y="0">Fascist</tspan>
        </text>
        <text id="Idiot" transform="translate(195 355)" font-size="31" font-family="Monarcha-Bold, Monarcha"
            font-weight="700">
            <tspan x="-38.378" y="0">Idiot</tspan>
        </text>
        <text id="Who_does_not_have_opinion_of_her_his_own" data-name="Who does not  
have opinion 
of her/his own" transform="translate(195 395)" font-size="31" font-family="Monarcha-Bold, Monarcha"
            font-weight="700">
            <tspan x="-112.763" y="0" xml:space="preserve">Who does not </tspan>
            <tspan x="-105.757" y="40">have opinion </tspan>
            <tspan x="-115.552" y="80">of her/his own</tspan>
        </text>
    </g>
</g>
</svg>`

svgToPng(svg, (imgData) => {
    const pngImage = document.createElement('img');
    //document.body.appendChild(pngImage);
    pngImage.src = imgData;
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
    document.querySelector('.page__subject').appendChild(svgImage);
    svgImage.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = svgImage.clientWidth;
        canvas.height = svgImage.clientHeight;
        const canvasCtx = canvas.getContext('2d');
        canvasCtx.drawImage(svgImage, 0, 0);
        const imgData = canvas.toDataURL('image/png');
        callback(imgData);
        // button.href = imgData;
        //console.log(button.href);
    };

    svgImage.src = svgUrl;
}

var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    let canvas = document.querySelector('canvas');
    // var dataURL = canvas.toDataURL('image/png');
    //button.href = canvas;
    console.log(canvas.imgData);
});
