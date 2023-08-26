const wheel=document.getElementById("wheel");

for (let i = 0; i < 12; i++) {
  let line = document.createElement("div");
  line.className = "line";
  line.style.transform = "rotate("+i*15+"deg)";
  wheel.appendChild(line);
}
