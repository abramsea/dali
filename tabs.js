
    btn1.onclick = function showTab() {
        var a = document.getElementById('tab1');
        var b = document.getElementById('tab2');
        var c = document.getElementById('tab3');
        var d = document.getElementById('tab4');
        var e = document.getElementById('tab5');
        var f = document.getElementById('tab6');

        if (a.className === "block b07") {
        a.className += " active";
        btn1.className += " selected";
        b.className = "block b08"
        c.className = "block b09"
        d.className = "block b10"
        e.className = "block b11"
        f.className = "block b12"
        btn2.className = "nav_item";
        btn3.className = "nav_item";
        btn4.className = "nav_item";
        btn5.className = "nav_item";
        btn6.className = "nav_item";
        }
    }


    btn2.onclick = function showTab() {
        var a = document.getElementById('tab1');
        var b = document.getElementById('tab2');
        var c = document.getElementById('tab3');
        var d = document.getElementById('tab4');
        var e = document.getElementById('tab5');
        var f = document.getElementById('tab6');

        if (b.className === "block b08") {
        a.className = "block b07";
        b.className += " active"
        btn2.className += " selected";
        c.className = "block b09"
        d.className = "block b10"
        e.className = "block b11"
        f.className = "block b12"
        btn1.className = "nav_item";
        btn3.className = "nav_item";
        btn4.className = "nav_item";
        btn5.className = "nav_item";
        btn6.className = "nav_item";
        }
    }


    btn3.onclick = function showTab() {
        var a = document.getElementById('tab1');
        var b = document.getElementById('tab2');
        var c = document.getElementById('tab3');
        var d = document.getElementById('tab4');
        var e = document.getElementById('tab5');
        var f = document.getElementById('tab6');

        if (c.className === "block b09") {
        a.className = "block b07";
        b.className = "block b08"
        c.className += " active"
        btn3.className += " selected";
        d.className = "block b10"
        e.className = "block b11"
        f.className = "block b12"
        btn2.className = "nav_item";
        btn1.className = "nav_item";
        btn4.className = "nav_item";
        btn5.className = "nav_item";
        btn6.className = "nav_item";
        }
    }

    btn4.onclick = function showTab() {
        var a = document.getElementById('tab1');
        var b = document.getElementById('tab2');
        var c = document.getElementById('tab3');
        var d = document.getElementById('tab4');
        var e = document.getElementById('tab5');
        var f = document.getElementById('tab6');

        if (d.className === "block b10") {
        a.className = "block b07";
        b.className = "block b08"
        c.className = "block b09"
        d.className += " active"
        btn4.className += " selected";
        e.className = "block b11"
        f.className = "block b12"
        btn2.className = "nav_item";
        btn3.className = "nav_item";
        btn1.className = "nav_item";
        btn5.className = "nav_item";
        btn6.className = "nav_item";
        }
    }

    btn5.onclick = function showTab() {
        var a = document.getElementById('tab1');
        var b = document.getElementById('tab2');
        var c = document.getElementById('tab3');
        var d = document.getElementById('tab4');
        var e = document.getElementById('tab5');
        var f = document.getElementById('tab6');

        if (e.className === "block b11") {
        a.className = "block b07";
        b.className = "block b08"
        c.className = "block b09"
        d.className = "block b10"
        e.className += " active"
        btn5.className += " selected";
        f.className = "block b12"
        btn2.className = "nav_item";
        btn3.className = "nav_item";
        btn4.className = "nav_item";
        btn1.className = "nav_item";
        btn6.className = "nav_item";
        }
    }
    btn6.onclick = function showTab() {
        var a = document.getElementById('tab1');
        var b = document.getElementById('tab2');
        var c = document.getElementById('tab3');
        var d = document.getElementById('tab4');
        var e = document.getElementById('tab5');
        var f = document.getElementById('tab6');

        if (f.className === "block b12") {
        a.className = "block b07";
        b.className = "block b08"
        c.className = "block b09"
        d.className = "block b10"
        e.className = "block b11"
        f.className += " active"
        btn6.className += " selected";
        btn2.className = "nav_item";
        btn3.className = "nav_item";
        btn4.className = "nav_item";
        btn5.className = "nav_item";
        btn1.className = "nav_item";
        }
    }

    btn7.onclick = function showTab() {
        var a = document.getElementById('tab7');
        var b = document.getElementById('tab8');
        var c = document.getElementById('tab9');
        var d = document.getElementById('tab10');
    

        if (a.className === "block b07") {
        a.className += " active"
        b.className = "block b08"
        c.className = "block b09"
        d.className = "block b12"

        btn7.className += " selected";
        btn8.className = "nav_item";
        btn9.className = "nav_item";
        btn10.className = "nav_item";
        }
    }


    btn8.onclick = function showTab() {
        var a = document.getElementById('tab7');
        var b = document.getElementById('tab8');
        var c = document.getElementById('tab9');
        var d = document.getElementById('tab10');
    

        if (b.className === "block b08") {
        a.className = "block b07"
        b.className += " active"
        c.className = "block b09"
        d.className = "block b12"

        btn7.className = "nav_item";
        btn8.className += " selected";
        btn9.className = "nav_item";
        btn10.className = "nav_item";
        }
    }


    btn9.onclick = function showTab() {
        var a = document.getElementById('tab7');
        var b = document.getElementById('tab8');
        var c = document.getElementById('tab9');
        var d = document.getElementById('tab10');
    

        if (c.className === "block b09") {
        a.className = "block b07"
        b.className = "block b08"
        c.className += " active"
        d.className = "block b12"

        btn7.className = "nav_item";
        btn8.className = "nav_item";
        btn9.className += " selected";
        btn10.className = "nav_item";
        }
    }


    btn10.onclick = function showTab() {
        var a = document.getElementById('tab7');
        var b = document.getElementById('tab8');
        var c = document.getElementById('tab9');
        var d = document.getElementById('tab10');
    

        if (d.className === "block b12") {
        a.className = "block b07"    
        b.className = "block b08"
        c.className = "block b09"
        d.className += " active"

        btn7.className = "nav_item";
        btn8.className = "nav_item";
        btn9.className = "nav_item";
        btn10.className += " selected";
        }
    }
