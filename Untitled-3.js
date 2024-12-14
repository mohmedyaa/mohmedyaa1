// إعداد Swiper.js للتنقل بين الشرائح
var swiper = new Swiper(".swiper", {
    effect: "cube", // التأثير المستخدم للتنقل
    allowTouchMove: true, // السماح بالتمرير باللمس
    grabCursor: true, // عرض المؤشر على شكل يد عند التحريك
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    mousewheel: true // السماح باستخدام عجلة الفأرة
  });
  
  // تحديث حالة القائمة الجانبية عند تغيير الشريحة
  swiper.on("slideChange", function () {
    // إزالة الحالة النشطة من جميع الروابط
    for (let i of document.querySelectorAll(".Links li")) {
      i.classList.remove("activeLink");
    }
    // إضافة الحالة النشطة للرابط المرتبط بالشريحة الحالية
    Array.from(document.querySelectorAll(".Links li"))[
      swiper.activeIndex
    ].classList.add("activeLink");
  });
  
  // دالة التنقل بين الأقسام باستخدام القائمة الجانبية
  function Navigate(index) {
    // إزالة الحالة النشطة من جميع الروابط
    for (let i of document.querySelectorAll(".Links li")) {
      i.classList.remove("activeLink");
    }
    // إضافة الحالة النشطة للرابط الذي تم النقر عليه
    Array.from(document.querySelectorAll(".Links li"))[index].classList.add(
      "activeLink"
    );
    // الانتقال إلى الشريحة المحددة
    swiper.slideTo(index, 1000, true);
  }
  
  // إعداد زر "Hire Me" في الصفحة الأولى (Home)
  document.querySelector(
    ".HomeContent .buttonGroup button:first-child"
  ).onclick = function () {
    Navigate(1); // الانتقال إلى الشريحة رقم 1 (About Me)
  };
  
  // إعداد زر "Contact Me" في الصفحة الأولى (Home)
  document.querySelector(
    ".HomeContent .buttonGroup button:last-child"
  ).onclick = function () {
    Navigate(4); // الانتقال إلى الشريحة رقم 4 (Contact Me)
  };
  
  // إعداد زر "Hire Me" في الصفحة الثانية (About Me)
  document.querySelector(
    ".about-us .buttonGroup button:first-child"
  ).onclick = function () {
    Navigate(0); // الانتقال إلى الشريحة رقم 0 (Home)
  };
  
  // إعداد زر "Contact Me" في الصفحة الثانية (About Me)
  document.querySelector(
    ".about-us .buttonGroup button:last-child"
  ).onclick = function () {
    Navigate(4); // الانتقال إلى الشريحة رقم 4 (Contact Me)
  };
  // إضافة وظيفة لتوجيه المستخدم عند النقر على الأيقونات
  document.querySelector(".phone-icon").onclick = function () {
    window.location.href = "tel:+01022114601"; // استبدل هذا برقم هاتفك
  };
  
  document.querySelector(".location-icon").onclick = function () {
    window.location.href = "https://www.google.com/maps?q=عنوان+موقعك"; // استبدل هذا بعنوان موقعك
  };
  
  document.querySelector(".linkedin-icon").onclick = function () {
    window.location.href =
      "https://www.linkedin.com/in/mohamed-dyaa-al-arja-9211ab309/"; // رابط LinkedIn الخاص بك
  };
  
  document.querySelector(".gmail-icon").onclick = function () {
    window.location.href = "mailto:mohmeddyaa18@gmail.com"; // بريد الجيميل الخاص بك
  };
  
  // إعداد Swiper.js للتنقل بين الشرائح
  var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: true,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    mousewheel: true
  });
  
  // تحديث حالة القائمة الجانبية عند تغيير الشريحة
  swiper.on("slideChange", function () {
    for (let i of document.querySelectorAll(".Links li")) {
      i.classList.remove("activeLink");
    }
    Array.from(document.querySelectorAll(".Links li"))[
      swiper.activeIndex
    ].classList.add("activeLink");
  });
  
  // دالة التنقل بين الأقسام باستخدام القائمة الجانبية
  function Navigate(index) {
    for (let i of document.querySelectorAll(".Links li")) {
      i.classList.remove("activeLink");
    }
    Array.from(document.querySelectorAll(".Links li"))[index].classList.add(
      "activeLink"
    );
    swiper.slideTo(index, 1000, true);
  }
  
  // إعداد زر "Hire Me" في الصفحة الأولى (Home)
  document.querySelector(
    ".HomeContent .buttonGroup button:first-child"
  ).onclick = function () {
    Navigate(1); // الانتقال إلى الشريحة رقم 1 (About Me)
  };
  
  // إعداد زر "Contact Me" في الصفحة الأولى (Home)
  document.querySelector(
    ".HomeContent .buttonGroup button:last-child"
  ).onclick = function () {
    Navigate(4); // الانتقال إلى الشريحة رقم 4 (Contact Me)
  };
  
  // إعداد زر "Hire Me" في الصفحة الثانية (About Me)
  document.querySelector(
    ".about-us .buttonGroup button:first-child"
  ).onclick = function () {
    Navigate(0); // الانتقال إلى الشريحة رقم 0 (Home)
  };
  
  // إعداد زر "Contact Me" في الصفحة الثانية (About Me)
  document.querySelector(
    ".about-us .buttonGroup button:last-child"
  ).onclick = function () {
    Navigate(4); // الانتقال إلى الشريحة رقم 4 (Contact Me)
  };
  document.addEventListener('DOMContentLoaded', function() {
    // فتح المودال عند النقر على الصورة
    document.querySelectorAll('.open-modal').forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();  // منع الانتقال للرابط
        let modal = document.getElementById("myModal");
        let modalImg = document.getElementById("img01");
        
        modal.style.display = "block";
        modalImg.src = item.querySelector('img').src;  // تعيين مصدر الصورة
      });
    });
  
    // إغلاق المودال عند النقر على زر الإغلاق
    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById("myModal").style.display = "none";
    });
  
    // إضافة تأثير التكبير عند النقر على الصورة داخل المودال
    document.querySelector('.modal-img').addEventListener('click', function() {
      // تكبير الصورة بشكل كامل عند النقر داخل المودال
      this.style.transform = this.style.transform === 'scale(2)' ? 'scale(1)' : 'scale(2)';
    });
  });
  