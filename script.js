document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  document.querySelector("a[href^='mailto']").addEventListener("click", function () {
    alert("Estás a punto de enviar un correo a Brian Esquivel.");
  });
  
  document.getElementById("downloadBtn").addEventListener("click", () => {
    const element = document.getElementById("cv");
    const opt = {
      margin:       0.5,
      filename:     'Brian_Esquivel_CV.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    // Asegúrate de que html2pdf esté incluido en el proyecto
    html2pdf().set(opt).from(element).save();
  });
  