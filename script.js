// Xử lý nút Upload
const uploadButton = document.getElementById('upload-button');
const responseBox = document.getElementById('response-box');

uploadButton.addEventListener('click', function() {
  uploadButton.disabled = true;
  responseBox.textContent = 'Đã gửi webhook...';
  fetch('https://n8n-TinZ.aipencil.name.vn/webhook/sales_data_tinz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'TinZ nhận data' })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    responseBox.textContent = 'Upload thành công';
    uploadButton.disabled = false;
  })
  .catch(error => {
    console.error('Error:', error);
    responseBox.textContent = 'Gửi webhook không thành công';
    uploadButton.disabled = false;
  });
});