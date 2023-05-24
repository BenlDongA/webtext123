document.addEventListener("DOMContentLoaded", function() {
  var refreshIcon = document.getElementById("refreshIcon");
  if (refreshIcon) {
    refreshIcon.addEventListener("click", function() {
      location.reload();
    });
  }
}); //ngôi nhà f5

// thay doi quocs gia
function showCountries() {
  var countryTable = document.getElementById("countryTable");
  if (countryTable.classList.contains("hidden")) {
    countryTable.classList.remove("hidden");
  } else {
    countryTable.classList.add("hidden");
  }
}
function selectCountry(event) {
  var selectedCountryElement = document.getElementById("selectedCountry");
  var selectedCountryImageElement = document.getElementById("selectedCountryImage");
  var tempCountry = selectedCountryElement.innerText;
  selectedCountryElement.innerText = event.target.innerText;
  event.target.innerText = tempCountry;
  var tempImage = selectedCountryImageElement.src;
  selectedCountryImageElement.src = event.currentTarget.querySelector("img").src;
  event.currentTarget.querySelector("img").src = tempImage;
  var countryTable = document.getElementById("countryTable");
  countryTable.classList.add("hidden");
}
function getCurrentTime() { // dồng hồ
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
function updateTime() {
  const clock = document.getElementById('clock');
  clock.innerText = getCurrentTime();
}
setInterval(updateTime, 1000);
////
function navigateToHTML(filename) {
  sessionStorage.setItem('previousPage', window.location.href); // Lưu trang trước khi chuyển hướng
  window.location.href = filename;
}

// Kiểm tra xem trang có được tải lại hay không
if (performance.navigation.type === 1) {
  var previousPage = sessionStorage.getItem('previousPage');
  if (previousPage) {
      sessionStorage.removeItem('previousPage'); // Xóa trang đã lưu
      if (window.location.href !== previousPage) {
          window.location.href = 'index.html'; // Chuyển hướng đến trang index
      }
  }
}
/// chuyen cac gia dau
function showContent(category) {
 
  var contents = document.getElementsByClassName('trandau1');
  for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
  }

  var selectedContents = document.getElementsByClassName(category);
  for (var j = 0; j < selectedContents.length; j++) {
      selectedContents[j].style.display = 'block';
  }
  document.getElementById("categoryTitle").textContent = category;
}
// than search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.Thanhsearch1-a input');
    const searchButton = document.querySelector('.Thanhsearch1-a button');
    const noidungtinlienquan = document.querySelectorAll('.noidungtinlienquan');
    searchButton.addEventListener('click', searchNoidungtinlienquan);
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        searchNoidungtinlienquan();
      }
    });
    function searchNoidungtinlienquan(event) {
      event.preventDefault(); // Ngăn chặn sự kiện mặc định của form
      const searchText = searchInput.value.trim().toLowerCase();
      noidungtinlienquan.forEach(function(noidung) {
        const noidungText = noidung.innerText.toLowerCase();
        if (noidungText.includes(searchText)) {
          noidung.style.display = 'block'; // Hiển thị phần tử nếu có chứa từ khóa tìm kiếm
        } else {
          noidung.style.display = 'none'; // Ẩn phần tử nếu không chứa từ khóa tìm kiếm
        }
      });
      searchInput.value = '';
    }
  });

// chuyen doi cac hinh anh tieu de
  document.addEventListener('DOMContentLoaded', function() {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
      interval: 2200, // Đặt thời gian trượt giữa các slide (đơn vị: mili giây)
      ride: true // Tự động chuyển đổi slide
    });
  });

//  box chat
  document.addEventListener('DOMContentLoaded', function() {
    var chatBox = document.getElementById('chat-box');
    var chatWindow = document.getElementById('chat-window');
    var closeButton = document.getElementById('close-button');
  
    chatBox.addEventListener('dblclick', function() {
      chatWindow.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function() {
      chatWindow.style.display = 'none';
    });
  
    // Các xử lý khác của hộp chat (gửi tin nhắn, xử lý dữ liệu, v.v.) có thể được thêm vào ở đây
  });
  function handleSendButtonClick() {
    const feedbackInput = document.getElementById("feedback-input");
    const chatContent = document.getElementById("chat-content");
    const feedback = feedbackInput.value;
  
    if (feedback.trim() !== "") {
      const thankYouMessage = document.createElement("p");
      thankYouMessage.textContent = "Cảm ơn phản hồi của bạn";
      chatContent.appendChild(thankYouMessage);
  
      feedbackInput.value = "";
    }
  }
  function setupEventListeners() {
    const sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", handleSendButtonClick);
  }
  document.addEventListener("DOMContentLoaded", setupEventListeners);

