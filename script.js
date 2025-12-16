function analyze() {
  const result = document.getElementById("result");
  const image = document.getElementById("imageInput").files[0];

  if (!image) {
    result.innerText = "❗ رجاءً ارفعي صورة أولاً";
    return;
  }

  result.innerText = "🤖 يتم تحليل الدرس... (نسخة تجريبية)";
}
