const wrapper = document.getElementById("buttons-div");
let userinput = document.getElementById("input-number");

wrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    if (event.target.id == "equals") {
      if (/\d/.test(userinput.innerHTML)) {
        try {
          userinput.innerHTML = eval(userinput.innerHTML);
        } catch (e) {
          if (e instanceof SyntaxError) {
            document.getElementById("error").innerHTML =
              "Invalid entry. Please try again.";
          }
        }
      } else {
        alert("fuckhead");
      }
    } else if (event.target.id == "back") {
      userinput.innerHTML = userinput.innerHTML.slice(0, -1);
    } else if (event.target.id == "clear") {
      userinput.innerHTML = "";
    } else if (event.target.id == "negpos") {
      if (userinput.innerHTML.charAt(0) == "-") {
        userinput.innerHTML = userinput.innerHTML.slice(1);
      } else {
        userinput.innerHTML = "-" + userinput.innerHTML;
      }
    } else {
      userinput.innerHTML = userinput.innerHTML + event.target.innerHTML;
    }
  }
});

function switchTheme(e) {
  let themeLink = document.getElementById("theme");
  let theme = document.getElementById("theme-select").value;
  themeLink.href = theme + ".css";
}
