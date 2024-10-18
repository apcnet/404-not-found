// Animação da barra de progresso
gsap.to("#progress", {
    width: "100%",
    duration: 4,
    repeat: -1,
    ease: "power1.inOut",
    yoyo: true,
    onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        document.getElementById('progress-value').textContent = `${progress}%`;
    }
});