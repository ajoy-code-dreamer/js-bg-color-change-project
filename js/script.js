// =========== color switcher =============
let banner = document.querySelector("#banner");
let colorSwitch = document.querySelector(".btn");
let text = document.querySelector(".heading");
let textArray = Array.from(text.innerHTML);
text.innerHTML = "";
let textStart = 0

// ================= typeJs ================

function typeJs(){
    text.innerHTML += textArray[textStart]
    textStart++
    if(textStart > textArray.length){
        textStart = 0
        text.innerHTML = ""
    }
    
}
let typeInterval = setInterval(()=>{
    typeJs()
},200)
// ================= typeJs ================


let allColors = [
  `AliceBlue`,
  `AntiqueWhite`,
  `Aqua`,
  `Aquamarine`,
  `Azure`,
  `Beige`,
  `Bisque`,
  `BlanchedAlmond`,
  `Blue`,
  `BlueViolet`,
  `Brown`,
  `BurlyWood`,
  `CadetBlue`,
  `Chartreuse`,
  `Chocolate`,
  `Coral`,
  `CornflowerBlue`,
  `Cornsilk`,
  `Crimson`,
  `Cyan`,
  `DarkBlue`,
  `DarkCyan`,
  `DarkGoldenRod`,
  `DarkGray`,
  `DarkGrey`,
  `DarkGreen`,
  `DarkKhaki`,
  `DarkMagenta`,
  `DarkOliveGreen`,
  `Darkorange`,
  `DarkOrchid`,
  `DarkRed`,
  `DarkSalmon`,
  `DarkSeaGreen`,
  `DarkSlateBlue`,
  `DarkSlateGray`,
  `DarkSlateGrey`,
  `DarkTurquoise`,
  `DarkViolet`,
  `DeepPink`,
  `DeepSkyBlue`,
  `DimGray`,
  `DimGrey`,
  `DodgerBlue`,
  `FireBrick`,
  `FloralWhite`,
  `ForestGreen`,
  `Fuchsia`,
  `Gainsboro`,
  `GhostWhite`,
  `Gold`,
  `GoldenRod`,
  `Gray`,
  `Grey`,
  `Green`,
  `GreenYellow`,
  `HoneyDew`,
  `HotPink`,
  `IndianRed`,
  `Indigo`,
  `Ivory`,
  `Khaki`,
  `Lavender`,
  `LavenderBlush`,
  `LawnGreen`,
  `LemonChiffon`,
  `LightBlue`,
  `LightCoral`,
  `LightCyan`,
  `LightGoldenRodYellow`,
  `LightGray`,
  `LightGrey`,
  `LightGreen`,
  `LightPink`,
  `LightSalmon`,
  `LightSeaGreen`,
  `LightSkyBlue`,
  `LightSlateGray`,
  `LightSlateGrey`,
  `LightSteelBlue`,
  `LightYellow`,
  `Lime`,
  `LimeGreen`,
  `Linen`,
  `Magenta`,
  `Maroon`,
  `MediumAquaMarine`,
  `MediumBlue`,
  `MediumOrchid`,
  `MediumPurple`,
  `MediumSeaGreen`,
  `MediumSlateBlue`,
  `MediumSpringGreen`,
  `MediumTurquoise`,
  `MediumVioletRed`,
  `MidnightBlue`,
  `MintCream`,
  `MistyRose`,
  `Moccasin`,
  `NavajoWhite`,
  `Navy`,
  `OldLace`,
  `Olive`,
  `OliveDrab`,
  `Orange`,
  `OrangeRed`,
  `Orchid`,
  `PaleGoldenRod`,
  `PaleGreen`,
  `PaleTurquoise`,
  `PaleVioletRed`,
  `PapayaWhip`,
  `PeachPuff`,
  `Peru`,
  `Pink`,
  `Plum`,
  `PowderBlue`,
  `Purple`,
  `Red`,
  `RosyBrown`,
  `RoyalBlue`,
  `SaddleBrown`,
  `Salmon`,
  `SandyBrown`,
  `SeaGreen`,
  `SeaShell`,
  `Sienna`,
  `Silver`,
  `SkyBlue`,
  `SlateBlue`,
  `SlateGray`,
  `SlateGrey`,
  `Snow`,
  `SpringGreen`,
  `SteelBlue`,
  `Tan`,
  `Teal`,
  `Thistle`,
  `Tomato`,
  `Turquoise`,
  `Violet`,
  `Wheat`,
  `White`,
  `WhiteSmoke`,
  `Yellow`,
  `YellowGreen`,
];
let colorStart = 0;

colorSwitch.addEventListener("click", function () {
  colorStart++;
  banner.style.background = allColors[colorStart];
  if (colorStart > allColors.length) {
    colorStart = 0;
  }
});

// =========== color switcher =============
