window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Sumbit").addEventListener("click", () => {
        const amount = parseFloat(document.getElementById("amount").value);
        
        if (isNaN(amount)) return;

        const tipEl = document.getElementById("tip");
        const tip = Number.parseInt(tipEl.options[tipEl.selectedIndex].value).toFixed(
            2
        );
        const people = Number.parseInt(document.getElementById("people").value);

        const tipInRupiah = amount * (tip / 100) * 15000; 
        const subTotal = parseFloat(amount + tipInRupiah);
        const total = subTotal / people;

        document.querySelector(".info__tip").innerHTML = `⭐️ Tip: Rp ${new Intl.NumberFormat().format(parseFloat(tipInRupiah))}`;
        document.querySelector(".info__total").innerHTML = `💰 Total: Rp ${new Intl.NumberFormat().format(total)} ${people > 1 ? "Per Orang" : ""}`;
        document.querySelector(".info").style = "display: block";
    });
});
