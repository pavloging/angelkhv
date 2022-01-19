if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  const women = document.querySelector("#women");
  women.style.backgroundAttachment = "inherit;";

  const men = document.querySelector("#men");
  men.style.backgroundAttachment = "inherit;";

  const children = document.querySelector("#children");
  children.style.backgroundAttachment = "inherit;";

  document.getElementById("women").style.backgroundAttachment = "inherit;";
  document.getElementById("men").style.backgroundAttachment = "inherit;";
  document.getElementById("children").style.backgroundAttachment = "inherit;";
}
