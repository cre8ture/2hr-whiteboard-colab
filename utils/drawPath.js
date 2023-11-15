export function drawPath(path) {
  // console.log("path", path)
  const div = document.getElementById('__next');
  if (!div) {
    throw new Error('Main div not found');
  }

  let svg = div.querySelector('svg');
  if (!svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.pointerEvents = "none";
    div.appendChild(svg);
    console.log("i am appending svg", svg)

  }

  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  polyline.setAttribute("points", path.map(p => `${p.x},${p.y}`).join(" "));
  polyline.setAttribute("stroke", "#BA90F4"); // Change the color to #BA90F4
  polyline.setAttribute("stroke-width", "5"); // Increase the thickness to 5
  polyline.setAttribute("fill", "none");

  console.log("polyline", polyline)
  svg.appendChild(polyline);

  return svg;
}