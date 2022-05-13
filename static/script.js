const btn = document.getElementById("generateButton");
const textarea = document.getElementById("textarea");
const resultContainer = document.getElementById("resultContainer");
const copyBtn = document.getElementById("copyButton");

let btnState = 1;

btn.addEventListener("click", async () => {
  if (btnState === 1 && textarea.value.trim() !== "") {
    btn.innerHTML = "Clear";
    btnState = 2;

    let billingCodes = textarea.value;

    if (billingCodes) {
      billingCodes = billingCodes.trim();
      const response = await fetch("/ntpn", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ billingCodes }),
      });
      if (response.ok) {
        const text = await response.json();
        const result = document.getElementById("result");
        result.value = text
          .map((row) => `${row.code} : ${row.ntpn}`)
          .join("\n");
        resultContainer.classList.remove("hidden");

        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(result.value);
          copyBtn.innerHTML = "Copied!";
        });
      }
    }
  } else {
    btn.innerHTML = "Generate";
    textarea.value = "";
    copyBtn.innerHTML = "Copy";
    btnState = 1;
    resultContainer.classList.add("hidden");
  }
});
