// Set current date
function setCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const today = new Date();
    const dateString = today.toLocaleDateString('ar-EG', options);
    document.getElementById('currentDate').textContent = dateString;
}

// Initialize date on page load
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
});

// Order Product Function
function orderProduct(productName, price) {
    const phoneNumber = '201283340332';
    const message = `مرحباً، أود طلب ${productName} بسعر ${price} ج.م. هل يتوفر الآن؟`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Show confirmation
    showNotification(`تم إرسال طلب ${productName}`);
    
    // Optionally open WhatsApp
    // window.open(whatsappURL, '_blank');
}

// Notification Function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #52b788, #ff6b9d);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});