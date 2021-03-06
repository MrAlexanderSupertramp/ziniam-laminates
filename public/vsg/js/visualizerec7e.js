function tabChange(n) {
    TabCurrentStatus = n;
    n == "floortile" ? ($(".style-filter").show(), $(".style-filter").hasClass("active") && $(".style-filter").addClass("show")) : ($(".style-filter").hide(), $(".style-filter").removeClass("show"))
}

function MagiczoomLargesizeimages() {
    function t(n, t) {
        var u = 0,
            r = 0;
        for (var i in n) r++;
        for (i in n) images[i] = new Image, images[i].crossOrigin = "Anonymous", images[i].onload = function () {
            ++u >= r && t(images)
        }, images[i].src = n[i]
    }
    var n = {
        base: imagepath + "bathroom-base-large.png",
        backsplash: $("#" + BacksplashId).attr("data-src").replace("thumb", "baselarge").replace("jpg", "png"),
        walltile: $("#" + WallTileId).attr("data-src").replace("thumb", "baselarge").replace("jpg", "png"),
        floortile: $("#" + FloorTileId).attr("data-src").replace("thumb", "baselarge").replace("jpg", "png")
    };
    $("#wallfloor").children().hasClass("checked") && (n.walltile = n.floortile.replace("floor-tile", "floor-wall-tile"));
    t(n, function (n) {
        imgHeight = n.base.height;
        imgWidth = n.base.width;
        canvas.height = imgHeight;
        canvas.width = imgWidth;
        context.restore();
        n.base && context.drawImage(n.base, 0, 0, imgWidth, imgHeight);
        n.backsplash && context.drawImage(n.backsplash, 0, 0, imgWidth, imgHeight);
        n.walltile && context.drawImage(n.walltile, 0, 0, imgWidth, imgHeight);
        n.floortile && context.drawImage(n.floortile, 0, 0, imgWidth, imgHeight);
        $("#zoom").attr("href", canvas.toDataURL());
        $("#Expandzoom").attr("href", canvas.toDataURL());
        $("#magiczoomcanvasimg").attr("src", canvas.toDataURL());
        $("#magiczoomExpandcanvasimg").attr("src", canvas.toDataURL());
        cnt > 0 && MagicZoom.update("zoom", canvas.toDataURL(), $("#zoom").attr("href"));
        cnt > 0 && MagicZoom.update("Expandzoom", canvas.toDataURL(), $("#Expandzoom").attr("href"));
        cnt++
    })
}

function initCanvas() {
    function n(n, t) {
        var u = 0,
            r = 0;
        for (var i in n) r++;
        for (i in n) images[i] = new Image, images[i].crossOrigin = "Anonymous", images[i].onload = function () {
            ++u >= r && t(images)
        }, images[i].src = n[i]
    }
    n(sources, function (n) {
        (imgHeight == 0 || imgHeight == 1317) && (imgHeight = n.base.height, imgWidth = n.base.width);
        canvas.height = imgHeight;
        canvas.width = imgWidth;
        context.restore();
        n.base && context.drawImage(n.base, 0, 0, imgWidth, imgHeight);
        n.backsplash && context.drawImage(n.backsplash, 0, 0, imgWidth, imgHeight);
        n.walltile && context.drawImage(n.walltile, 0, 0, imgWidth, imgHeight);
        n.floortile && context.drawImage(n.floortile, 0, 0, imgWidth, imgHeight);
        $("#zoom").attr("href", canvas.toDataURL());
        $("#Expandzoom").attr("href", canvas.toDataURL());
        $("#magiczoomcanvasimg").attr("src", canvas.toDataURL());
        $("#magiczoomExpandcanvasimg").attr("src", canvas.toDataURL());
        cnt > 0 && MagicZoom.update("zoom", canvas.toDataURL(), $("#zoom").attr("href"));
        cnt > 0 && MagicZoom.update("Expandzoom", canvas.toDataURL(), $("#Expandzoom").attr("href"));
        canvas1.height = 712;
        canvas1.width = imgWidth;
        context1.restore();
        n.base && context1.drawImage(n.base, 0, 0, imgWidth, imgHeight);
        n.backsplash && context1.drawImage(n.backsplash, 0, 0, imgWidth, imgHeight);
        n.walltile && context1.drawImage(n.walltile, 0, 0, imgWidth, imgHeight);
        n.floortile && context1.drawImage(n.floortile, 0, 0, imgWidth, imgHeight);
        cnt++
    })
}

function ChangeProduct(n, t, i, r, u) {
    var h, f, c;
    n == "Wall Tile" && ($(":checkbox").prop("checked", !1), $("#wallfloor").children().removeClass("checked"));
    var e = $(i).find("img").attr("data-src"),
        l = $(i).find("img").attr("id"),
        o = n.toString().toLowerCase().replace(/\s/g, "").concat("prodname"),
        s = n.toString().toLowerCase().replace(/\s/g, "").concat("prodid"),
        a = n.toString().toLowerCase().replace(/\s/g, "").concat("thumbimg");
    $("." + o).text(t);
    $("." + s).text(t);
    $("#" + a).attr({
        src: e,
        alt: t
    });
    $("." + o).attr({
        href: "" + r.replace("%", "''")
    });
    $("." + s).attr({
        href: "" + r.replace("%", "''")
    });
    n.toString().toLowerCase().replace(/\s/g, "") == "backsplash" ? (sources.backsplash = e.replace("thumb", "base").replace("jpg", "png"), BacksplashId = u) : n.toString().toLowerCase().replace(/\s/g, "") == "walltile" ? (sources.walltile = e.replace("thumb", "base").replace("jpg", "png"), wallfloortileimagepath = sources.walltile, wallfloortilethumbimagepath = e, wallfloortileproductname = $("#" + WallTileId).attr("alt"), wallfloortilehref = "" + r.replace("%", "''"), wallfloortileproductname = t, WallTileId = u) : n.toString().toLowerCase().replace(/\s/g, "") == "floortile" && (sources.floortile = e.replace("thumb", "base").replace("jpg", "png"), FloorTileId = u, $("#wallfloor").children().hasClass("checked") && (sources.walltile = sources.floortile.replace("floor-tile", "floor-wall-tile"), $("#walltilethumbimg").attr("src", e), $(".walltileprodname").text(t), $(".walltileprodid").text(t), $(".walltileprodname").attr({
        href: "" + r.replace("%", "''")
    }), $(".walltileprodid").attr({
        href: "" + r.replace("%", "''")
    })));
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#zoom").offset().top
    }, 2e3);
    windowwidth <= 1199 && document.getElementById("ExpandText").style.display == "block" && $.magnificPopup.close();
    $("#" + n.toString().toLowerCase().replace(/\s/g, "")).find("img").removeClass("selected-prod");
    initCanvas();
    $("#" + l).addClass("selected-prod");
    h = parent !== window;
    f = null;
    h && (f = document.referrer, f == "" && (f = window.location.href));
    f == null && (f = "");
    c = f;
    $.ajax({
        url: "partial/productselectionlog/",
        type: "POST",
        dataType: "json",
        data: {
            SubCategoryType: n,
            ProductSelected: t,
            PatternName: null,
            Websiteurl: c,
            VisualizerType: "BRV"
        },
        success: function (n) {
            console.log(n)
        },
        error: function (n) {
            console.log(n)
        }
    })
}

function FilterDropDown() {
    var n = document.getElementById("dropdownDIV"),
        t = document.getElementById("sharepopup");
    t.style.display == "block" && (t.style.display = "none");
    n.style.display === "none" || n.style.display === "" ? n.style.display = "block" : n.style.display === "block" && (n.style.display = "none")
}

function sharepopup() {
    var n = document.getElementById("sharepopup"),
        t = document.getElementById("dropdownDIV");
    t.style.display == "block" && (t.style.display = "none");
    n.style.display === "none" || n.style.display === "" ? n.style.display = "block" : n.style.display === "block" && (n.style.display = "none")
}

function printBathroomVisualizer() {
    var i, n, t;
    AddDetailsToCanvas(!0);
    i = canvas.toDataURL("image/png");
    n = "<!DOCTYPE html>";
    n += "<html>";
    n += "<head><title>Bathroom Visualizer<\/title><\/head>";
    n += "<body>";
    n += '<img src="' + i + '" style="max-width:100%;height:auto;"  crossorigin="anonymous"/>';
    n += '<table style="width:100%;">';
    n += '<tr><td colspan="4" style="text-align:center;"><h2>My Bathroom Visualizer Design<\/h2><\/td><\/tr>';
    n += '<tr><td><b>Backsplash<\/b><\/td> <td>:<\/td><td style="width:100%;">' + $(".backsplashprodname").text() + "<\/td><\/tr>";
    n += "<tr><td><b>WallTile<\/b><\/td><td>:<\/td><td>" + $(".walltileprodname").text() + "<\/td><\/tr>";
    n += "<tr><td><b>FloorTile<\/b><\/td><td>:<\/td><td>" + $(".floortileprodname").text() + "<\/td><\/tr>";
    n += "<\/table>";
    n += "<\/body>";
    n += "<\/html>";
    t = window.open("", "", "width=680,height=520");
    t.document.open();
    t.document.write(n);
    t.document.close();
    setTimeout(function () {
        t.focus();
        t.print();
        initCanvas();
        t.close()
    }, 250)
}

function AddDetailsToCanvas(n) {
    function i(n, t) {
        var u = 0,
            r = 0;
        for (var i in n) r++;
        for (i in n) images[i] = new Image, images[i].crossOrigin = "Anonymous", images[i].onload = function () {
            ++u >= r && t(images)
        }, images[i].src = n[i]
    }
    var t = 16;
    n = n || !1;
    i(sources, function (i) {
        (imgHeight == 0 || imgHeight == 1317) && (imgHeight = i.base.height, imgWidth = i.base.width);
        canvas1.height = n ? imgHeight : imgHeight + t * 4 + 10;
        canvas1.width = imgWidth;
        context1.restore();
        i.base && context1.drawImage(i.base, 0, 0, imgWidth, imgHeight);
        i.backsplash && context1.drawImage(i.backsplash, 0, 0, imgWidth, imgHeight);
        i.walltile && context1.drawImage(i.walltile, 0, 0, imgWidth, imgHeight);
        i.floortile && context1.drawImage(i.floortile, 0, 0, imgWidth, imgHeight)
    });
    n || (context1.font = "bold 16px Arial", context1.fillText("My Bathroom Visualizer Design", 10, imgHeight + t * 1), context1.fillText("Backsplash", 10, imgHeight + t * 2), context1.fillText(": " + $(".backsplashprodname").text(), 100, imgHeight + t * 2), context1.fillText("WallTile", 10, imgHeight + t * 3), context1.fillText(": " + $(".walltileprodname").text(), 100, imgHeight + t * 3), context1.fillText("FloorTile", 10, imgHeight + t * 4), context1.fillText(": " + $(".floortileprodname").text(), 100, imgHeight + t * 4))
}

function downloadBathroomVisualizer() {
    AddDetailsToCanvas(!1);
    canvas1.toBlob(function (n) {
        saveAs(n, "My_Bathroom_Design.png")
    });
    initCanvas()
}

function openEmailDailog() {
    $("#myModal").slideDown("slow");
    $("#myModal").addClass("in");
    var n = getDetailDescription();
    CKEDITOR.instances.editor.setData(n)
}

function getDetailDescription() {
    return EmaildescArr = "<h1>Your Customized Bathroom  Visualizer Design<\/h1> <br/>", EmaildescArr += "<ul><li><h3><b>Backsplash<\/b>  :" + $(".backsplashprodname").text() + "<\/h3><\/li>", EmaildescArr += "<li><h3><b>Wall Tile   <\/b>    :" + $(".walltileprodname").text() + "<\/h3> <\/li>", EmaildescArr += "<li><h3><b>Floor Tile <\/b>     :" + $(".floortileprodname").text() + "<\/h3> <\/li><\/ul>"
}

function Close() {
    $("#myModal").hide();
    $("#canvasModal").hide();
    document.getElementById("ToIds").value = "";
    document.getElementById("CCIds").value = "";
    document.getElementById("BCCIds").value = ""
}

function SendEmail() {
    var n = "<h3>My Bathroom Visualizer Design<\/h3><br><br>",
        t, i;
    n += "<ul><li><b>Backsplash <\/b>			: <a href=" + $(".backsplashprodname").attr("href") + ">" + $(".backsplashprodname").text() + "<\/a><\/li><br>";
    n += "<li><b>Wall Tile <\/b>			: <a href=" + $(".walltileprodname").attr("href") + ">" + $(".walltileprodname").text() + "<\/a><\/li><br><br>";
    n += "<li><b>Floor Tile <\/b>			: <a href=" + $(".floortileprodname").attr("href") + ">" + $(".floortileprodname").text() + "<\/a><\/li><br><\/ul>";
    t = $($.parseHTML(n.split("<br>").join("\n")));
    i = document.getElementById("email");
    $("#ToIds").val() != null && $("#ToIds").val() != "" && i.style.display == "none" ? $.ajax({
        url: "partial/sendemail/",
        type: "POST",
        dataType: "json",
        data: {
            ToIds: $("#ToIds").val(),
            CCIds: $("#CCIds").val(),
            BCCIds: $("#BCCIds").val(),
            Subject: $("#subject").val(),
            MailBody: t.text(),
            AttachedImg: canvas.toDataURL("image/png'").replace(/^data:image\/(png|jpg);base64,/, "")
        },
        success: function () {
            alert("Mail Sent");
            Close()
        },
        error: function (n) {
            console.log(n);
            alert("Mail Failed");
            Close()
        }
    }) : alert("Enter To Address mail id")
}

function shareFB() {
    var t, i, n, r;
    AddDetailsToCanvas(!1);
    t = canvas.toDataURL("image/png");
    try {
        i = dataURItoBlob(t);
        n = new FormData;
        n.append("Name", "BathroomVisualizer");
        r = "BV_BL" + BacksplashId + "WL" + WallTileId + "FL" + FloorTileId;
        n.append(r, i);
        n != null && $.ajax({
            url: "/bathroom-visualizer/partial/saveimage/",
            type: "POST",
            processData: !1,
            contentType: !1,
            dataType: "json",
            data: n,
            success: function (n) {
                share_image = n.data[0];
                FBShareOp(product_name, share_url, share_image, share_capt, description)
            },
            error: function (n) {
                console.log(n);
                alert("image not saved in folder")
            }
        })
    } catch (u) {
        console.log(u)
    }
    initCanvas()
}

function FBShareOp(n, t, i, r, u) {
    FB.ui({
        method: "feed",
        name: n,
        link: r,
        picture: i,
        caption: u,
        description: t
    }, function (n) {
        n && n.post_id
    })
}

function shareTwitter() {
    var t, i, n, r;
    AddDetailsToCanvas(!1);
    t = canvas.toDataURL("image/png");
    try {
        i = dataURItoBlob(t);
        n = new FormData;
        n.append("Name", "BathroomVisualizer");
        r = "BV_BL" + BacksplashId + "WL" + WallTileId + "FL" + FloorTileId;
        n.append(r, i);
        n != null && $.ajax({
            url: "/bathroom-visualizer/partial/saveimage/",
            type: "POST",
            processData: !1,
            contentType: !1,
            dataType: "json",
            data: n,
            success: function (n) {
                share_image = n.data[0];
                ToTwitter(share_image)
            },
            error: function (n) {
                console.log(n);
                alert("image not saved in folder")
            }
        })
    } catch (u) {
        console.log(u)
    }
    initCanvas()
}

function ToTwitter(n) {
    window.open("https://twitter.com/intent/tweet?text=My Bathroom Design <br/> &url=" + n, "", "toolbar=0, status=0, width=650, height=360")
}

function sharePinterest() {
    var t, i, n, r;
    AddDetailsToCanvas(!1);
    t = canvas.toDataURL("image/png");
    try {
        i = dataURItoBlob(t);
        n = new FormData;
        n.append("Name", "BathroomVisualizer");
        r = "BV_BL" + BacksplashId + "WL" + WallTileId + "FL" + FloorTileId;
        n.append(r, i);
        n != null && $.ajax({
            url: "/bathroom-visualizer/partial/saveimage/",
            type: "POST",
            processData: !1,
            contentType: !1,
            dataType: "json",
            data: n,
            success: function (n) {
                share_image = n.data[0];
                ToPinterest(share_image)
            },
            error: function (n) {
                console.log(n);
                alert("image not saved in folder")
            }
        })
    } catch (u) {
        console.log(u)
    }
    initCanvas()
}

function ToPinterest(n) {
    window.open("//pinterest.com/pin/create/button/?url=" + document.URL + "&media=" + n + "&description=My Bathroom Design")
}

function shareGoogle() {
    var t, i, n, r;
    AddDetailsToCanvas(!1);
    t = canvas.toDataURL("image/png");
    try {
        i = dataURItoBlob(t);
        n = new FormData;
        n.append("Name", "BathroomVisualizer");
        r = "BV_BL" + BacksplashId + "WL" + WallTileId + "FL" + FloorTileId;
        n.append(r, i);
        n != null && $.ajax({
            url: "/bathroom-visualizer/partial/saveimage/",
            type: "POST",
            processData: !1,
            contentType: !1,
            dataType: "json",
            data: n,
            success: function (n) {
                share_image = n.data[0];
                ToGooglePlus(share_image)
            },
            error: function (n) {
                console.log(n);
                alert("image not saved in folder")
            }
        })
    } catch (u) {
        console.log(u)
    }
    initCanvas()
}

function ToGooglePlus(n) {
    window.open("https://plus.google.com/share?url=" + document.URL + "?simg=" + n)
}

function dataURItoBlob(n) {
    var i, u, r, t;
    for (i = n.split(",")[0].indexOf("base64") >= 0 ? atob(n.split(",")[1]) : unescape(n.split(",")[1]), u = n.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(i.length), t = 0; t < i.length; t++) r[t] = i.charCodeAt(t);
    return new Blob([r], {
        type: u
    })
}

function tabbuttons(n) {
    var t = parent !== window;
    t && ($("#visualizercountsection").addClass("hide"), $("#ancFacebook").addClass("hide"), $("#ancTwitter").addClass("hide"), $("#ancpinit").addClass("hide"), $("#ancgplus").addClass("hide"), $(window).width() >= 790 ? ($(".sharepopupbutton").css("max-width", "115px"), $(".sharepopupbutton").css("left", "170px")) : $(window).width() < 790 && ($(".popover-content").css("width", "140px"), $(".popover-content").css("margin-left", "0%"), $(".sharepopupbutton").css("left", "5px")));
    document.getElementById("ExpandText").style.display == "block" ? ($("body").addClass("scrollhidden"), n < 768 ? ($("#ExpandParagraph").removeClass("hide"), $("#Sharebutton").addClass("hidden"), $("#Expand").addClass("hidden"), document.getElementById("sharepopup").style.display == "block" && (document.getElementById("sharepopup").style.display = "none"), $("#dropdownarrow").css("left", "90%")) : ($("#Sharebutton").removeClass("hidden"), $("#Expand").addClass("hidden"), $("#ExpandParagraph").addClass("hide"), $("#dropdownarrow").css("left", "10%")), $(window).width() >= 1600 ? ($(".nav-tabs").removeClass("col-lg-6").addClass("col-lg-5"), $(".tab-content").removeClass("col-lg-6").addClass("col-lg-5")) : ($(".nav-tabs").removeClass("col-lg-5").addClass("col-lg-6"), $(".tab-content").removeClass("col-lg-5").addClass("col-lg-6")), $(window).width() >= 500 && $(window).width() <= 767 ? $(".subcategory-img").removeClass("col-xs-4 col-sm-2 col-md-2 col-lg-2").addClass("col-xs-3 col-sm-2 col-md-2 col-lg-2") : $(".subcategory-img").removeClass("col-xs-3 col-sm-2 col-md-2 col-lg-2").addClass("col-xs-4 col-sm-2 col-md-2 col-lg-2"), $(window).width() >= 880 && $(window).width() <= 1199 ? $(".subcategory-img").find("img").removeClass("thumbimg").addClass("thumbimgmd") : $(".subcategory-img").find("img").hasClass("thumbimgmd") && $(".subcategory-img").find("img").removeClass("thumbimgmd").addClass("thumbimg")) : ($("body").removeClass("scrollhidden"), $(".subcategory-img").find("img").hasClass("thumbimgmd") && $(".subcategory-img").find("img").removeClass("thumbimgmd").addClass("thumbimg"), $(window).width() < 768 ? $("#dropdownarrow").css("left", "50%") : $("#dropdownarrow").css("left", "10%"))
}
var saveAs, CategoryID, sources, images, cnt, editor;
(function (n) {
    "use strict";
    var t, i;
    if (n.URL = n.URL || n.webkitURL, n.Blob && n.URL) try {
        new Blob;
        return
    } catch (r) {}
    t = n.BlobBuilder || n.WebKitBlobBuilder || n.MozBlobBuilder || function (n) {
        var s = function (n) {
                return Object.prototype.toString.call(n).match(/^\[object\s(.*)\]$/)[1]
            },
            h = function () {
                this.data = []
            },
            t = function (n, t, i) {
                this.data = n;
                this.size = n.length;
                this.type = t;
                this.encoding = i
            },
            u = h.prototype,
            r = t.prototype,
            c = n.FileReaderSync,
            l = function (n) {
                this.code = this[this.name = n]
            },
            a = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
            f = a.length,
            i = n.URL || n.webkitURL || n,
            v = i.createObjectURL,
            y = i.revokeObjectURL,
            e = i,
            p = n.btoa,
            w = n.atob,
            b = n.ArrayBuffer,
            o = n.Uint8Array,
            k = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
        for (t.fake = r.fake = !0; f--;) l.prototype[a[f]] = f + 1;
        return i.createObjectURL || (e = n.URL = function (n) {
            var t = document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                i;
            return t.href = n, "origin" in t || (t.protocol.toLowerCase() === "data:" ? t.origin = null : (i = n.match(k), t.origin = i && i[1])), t
        }), e.createObjectURL = function (n) {
            var u = n.type,
                r;
            return (u === null && (u = "application/octet-stream"), n instanceof t) ? (r = "data:" + u, n.encoding === "base64") ? r + ";base64," + n.data : n.encoding === "URI" ? r + "," + decodeURIComponent(n.data) : p ? r + ";base64," + p(n.data) : r + "," + encodeURIComponent(n.data) : v ? v.call(i, n) : void 0
        }, e.revokeObjectURL = function (n) {
            n.substring(0, 5) !== "data:" && y && y.call(i, n)
        }, u.append = function (n) {
            var i = this.data,
                e;
            if (o && (n instanceof b || n instanceof o)) {
                for (var u = "", f = new o(n), r = 0, h = f.length; r < h; r++) u += String.fromCharCode(f[r]);
                i.push(u)
            } else if (s(n) === "Blob" || s(n) === "File")
                if (c) e = new c, i.push(e.readAsBinaryString(n));
                else throw new l("NOT_READABLE_ERR");
            else n instanceof t ? n.encoding === "base64" && w ? i.push(w(n.data)) : n.encoding === "URI" ? i.push(decodeURIComponent(n.data)) : n.encoding === "raw" && i.push(n.data) : (typeof n != "string" && (n += ""), i.push(unescape(encodeURIComponent(n))))
        }, u.getBlob = function (n) {
            return arguments.length || (n = null), new t(this.data.join(""), n, "raw")
        }, u.toString = function () {
            return "[object BlobBuilder]"
        }, r.slice = function (n, i, r) {
            var u = arguments.length;
            return u < 3 && (r = null), new t(this.data.slice(n, u > 1 ? i : this.data.length), r, this.encoding)
        }, r.toString = function () {
            return "[object Blob]"
        }, r.close = function () {
            this.size = 0;
            delete this.data
        }, h
    }(n);
    n.Blob = function (n, i) {
        var o = i ? i.type || "" : "",
            f = new t,
            r, e, u;
        if (n)
            for (r = 0, e = n.length; r < e; r++) Uint8Array && n[r] instanceof Uint8Array ? f.append(n[r].buffer) : f.append(n[r]);
        return u = f.getBlob(o), !u.slice && u.webkitSlice && (u.slice = u.webkitSlice), u
    };
    i = Object.getPrototypeOf || function (n) {
        return n.__proto__
    };
    n.Blob.prototype = i(new n.Blob)
})(typeof self != "undefined" && self || typeof window != "undefined" && window || this.content || this),
function (n) {
    "use strict";
    var i = n.Uint8Array,
        r = n.HTMLCanvasElement,
        t = r && r.prototype,
        e = /\s*;\s*base64\s*(?:;|$)/i,
        u = "toDataURL",
        f, o = function (n) {
            for (var c = n.length, u = new i(c / 4 * 3 | 0), l = 0, o = 0, t = [0, 0], s = 0, r = 0, e, h, a; c--;) h = n.charCodeAt(l++), e = f[h - 43], e !== 255 && e !== a && (t[1] = t[0], t[0] = h, r = r << 6 | e, s++, s === 4 && (u[o++] = r >>> 16, t[1] !== 61 && (u[o++] = r >>> 8), t[0] !== 61 && (u[o++] = r), s = 0));
            return u
        };
    i && (f = new i([62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]));
    !r || t.toBlob && t.toBlobHD || (t.toBlob || (t.toBlob = function (n, t) {
        if (t || (t = "image/png"), this.mozGetAsFile) {
            n(this.mozGetAsFile("canvas", t));
            return
        }
        if (this.msToBlob && /^\s*image\/png\s*(?:$|;)/i.test(t)) {
            n(this.msToBlob());
            return
        }
        var l = Array.prototype.slice.call(arguments, 1),
            s = this[u].apply(this, l),
            h = s.indexOf(","),
            f = s.substring(h + 1),
            c = e.test(s.substring(0, h)),
            r;
        Blob.fake ? (r = new Blob, r.encoding = c ? "base64" : "URI", r.data = f, r.size = f.length) : i && (r = c ? new Blob([o(f)], {
            type: t
        }) : new Blob([decodeURIComponent(f)], {
            type: t
        }));
        n(r)
    }), t.toBlobHD = !t.toBlobHD && t.toDataURLHD ? function () {
        u = "toDataURLHD";
        var n = this.toBlob();
        return u = "toDataURL", n
    } : t.toBlob)
}(typeof self != "undefined" && self || typeof window != "undefined" && window || this.content || this);
saveAs = saveAs || function (n) {
    "use strict";
    if (typeof n != "undefined" && (typeof navigator == "undefined" || !/MSIE [1-9]\./.test(navigator.userAgent))) {
        var s = n.document,
            r = function () {
                return n.URL || n.webkitURL || n
            },
            i = s.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            h = "download" in i,
            c = function (n) {
                var t = new MouseEvent("click");
                n.dispatchEvent(t)
            },
            l = /constructor/i.test(n.HTMLElement) || n.safari,
            u = /CriOS\/[\d]+/.test(navigator.userAgent),
            a = function (t) {
                (n.setImmediate || n.setTimeout)(function () {
                    throw t;
                }, 0)
            },
            v = "application/octet-stream",
            y = 4e4,
            f = function (n) {
                var t = function () {
                    typeof n == "string" ? r().revokeObjectURL(n) : n.remove()
                };
                setTimeout(t, y)
            },
            p = function (n, t, i) {
                var r, u;
                for (t = [].concat(t), r = t.length; r--;)
                    if (u = n["on" + t[r]], typeof u == "function") try {
                        u.call(n, i || n)
                    } catch (f) {
                        a(f)
                    }
            },
            e = function (n) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type) ? new Blob([String.fromCharCode(65279), n], {
                    type: n.type
                }) : n
            },
            o = function (t, o, s) {
                s || (t = e(t));
                var a = this,
                    k = t.type,
                    b = k === v,
                    y, w = function () {
                        p(a, "writestart progress write writeend".split(" "))
                    },
                    d = function () {
                        var i, e;
                        if ((u || b && l) && n.FileReader) {
                            i = new FileReader;
                            i.onloadend = function () {
                                var t = u ? i.result : i.result.replace(/^data:[^;]*;/, "data:attachment/file;"),
                                    r = n.open(t, "_blank");
                                r || (n.location.href = t);
                                t = undefined;
                                a.readyState = a.DONE;
                                w()
                            };
                            i.readAsDataURL(t);
                            a.readyState = a.INIT;
                            return
                        }
                        y || (y = r().createObjectURL(t));
                        b ? n.location.href = y : (e = n.open(y, "_blank"), e || (n.location.href = y));
                        a.readyState = a.DONE;
                        w();
                        f(y)
                    };
                if (a.readyState = a.INIT, h) {
                    y = r().createObjectURL(t);
                    setTimeout(function () {
                        i.href = y;
                        i.download = o;
                        c(i);
                        w();
                        f(y);
                        a.readyState = a.DONE
                    });
                    return
                }
                d()
            },
            t = o.prototype,
            w = function (n, t, i) {
                return new o(n, t || n.name || "download", i)
            };
        return typeof navigator != "undefined" && navigator.msSaveOrOpenBlob ? function (n, t, i) {
            return t = t || n.name || "download", i || (n = e(n)), navigator.msSaveOrOpenBlob(n, t)
        } : (t.abort = function () {}, t.readyState = t.INIT = 0, t.WRITING = 1, t.DONE = 2, t.error = t.onwritestart = t.onprogress = t.onwrite = t.onabort = t.onerror = t.onwriteend = null, w)
    }
}(typeof self != "undefined" && self || typeof window != "undefined" && window || this.content);
typeof module != "undefined" && module.exports ? module.exports.saveAs = saveAs : typeof define != "undefined" && define !== null && define.amd !== null && define("FileSaver.js", function () {
    return saveAs
});
document.addEventListener("DOMContentLoaded", function () {
    let t = [].slice.call(document.querySelectorAll("img.lazy")),
        i = !1;
    const n = function () {
        i === !1 && (i = !0, setTimeout(function () {
            t.forEach(function (i) {
                i.getBoundingClientRect().top <= window.innerHeight && i.getBoundingClientRect().bottom >= 0 && getComputedStyle(i).display !== "none" && (i.src = i.dataset.src, i.classList.remove("lazy"), t = t.filter(function (n) {
                    return n !== i
                }), t.length === 0 && (document.removeEventListener("scroll", n), window.removeEventListener("load", n), window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n)))
            });
            i = !1
        }, 200))
    };
    document.addEventListener("scroll", n);
    window.addEventListener("load", n);
    window.addEventListener("resize", n);
    window.addEventListener("orientationchange", n)
});
eval(function (n, t, i, r, u, f) {
    if (u = function (n) {
            return (n < t ? "" : u(parseInt(n / t))) + ((n = n % t) > 35 ? String.fromCharCode(n + 29) : n.toString(36))
        }, !"".replace(/^/, String)) {
        while (i--) f[u(i)] = r[i] || u(i);
        r = [function (n) {
            return f[n]
        }];
        u = function () {
            return "\\w+"
        };
        i = 1
    }
    while (i--) r[i] && (n = n.replace(new RegExp("\\b" + u(i) + "\\b", "g"), r[i]));
    return n
}('1j.9Q=(17(){1b z,A;z=A=(17(){1b V={4J:"hN.3-b5",dc:0,8d:{},$bw:17(Z){1a(Z.$6t||(Z.$6t=++P.dc))},at:17(Z){1a(P.8d[Z]||(P.8d[Z]={}))},$F:17(){},$1l:17(){1a 1l},$1r:17(){1a 1r},d8:"dm-"+1p.5P(1p.6p()*1t bA().db()),3t:17(Z){1a(2E!=Z)},br:17(aa,Z){1a(2E!=aa)?aa:Z},9T:17(Z){1a!!(Z)},1O:17(Z){if(!P.3t(Z)){1a 1l}if(Z.$4z){1a Z.$4z}if(!!Z.6w){if(1==Z.6w){1a"6c"}if(3==Z.6w){1a"d6"}}if(Z.1I&&Z.de){1a"hO"}if(Z.1I&&Z.9q){1a"29"}if((Z 5c 1j.6Y||Z 5c 1j.bJ)&&Z.5m===P.3J){1a"3X"}if(Z 5c 1j.6a){1a"43"}if(Z 5c 1j.bJ){1a"17"}if(Z 5c 1j.5Z){1a"1N"}if(P.1e.4Z){if(P.3t(Z.ea)){1a"1z"}}1k{if(Z===1j.1z||Z.5m==1j.1v||Z.5m==1j.fm||Z.5m==1j.ff||Z.5m==1j.hP||Z.5m==1j.hQ){1a"1z"}}if(Z 5c 1j.bA){1a"d7"}if(Z 5c 1j.er){1a"hL"}if(Z===1j){1a"1j"}if(Z===1n){1a"1n"}1a 8v(Z)},26:17(ae,ad){if(!(ae 5c 1j.6a)){ae=[ae]}if(!ad){1a ae[0]}1U(1b ac=0,aa=ae.1I;ac<aa;ac++){if(!P.3t(ae)){8B}1U(1b ab in ad){if(!6Y.2A.3W.2c(ad,ab)){8B}3i{ae[ac][ab]=ad[ab]}3F(Z){}}}1a ae[0]},a0:17(ad,ac){if(!(ad 5c 1j.6a)){ad=[ad]}1U(1b ab=0,Z=ad.1I;ab<Z;ab++){if(!P.3t(ad[ab])){8B}if(!ad[ab].2A){8B}1U(1b aa in(ac||{})){if(!ad[ab].2A[aa]){ad[ab].2A[aa]=ac[aa]}}}1a ad[0]},da:17(ab,aa){if(!P.3t(ab)){1a ab}1U(1b Z in(aa||{})){if(!ab[Z]){ab[Z]=aa[Z]}}1a ab},$3i:17(){1U(1b aa=0,Z=29.1I;aa<Z;aa++){3i{1a 29[aa]()}3F(ab){}}1a 1h},$A:17(ab){if(!P.3t(ab)){1a P.$([])}if(ab.dd){1a P.$(ab.dd())}if(ab.de){1b aa=ab.1I||0,Z=1t 6a(aa);5z(aa--){Z[aa]=ab[aa]}1a P.$(Z)}1a P.$(6a.2A.b6.2c(ab))},6m:17(){1a 1t bA().db()},4b:17(ad){1b ab;4G(P.1O(ad)){1C"8l":ab={};1U(1b ac in ad){ab[ac]=P.4b(ad[ac])}1H;1C"43":ab=[];1U(1b aa=0,Z=ad.1I;aa<Z;aa++){ab[aa]=P.4b(ad[aa])}1H;1Q:1a ad}1a P.$(ab)},$:17(ab){1b Z=1r;if(!P.3t(ab)){1a 1h}if(ab.$bB){1a ab}4G(P.1O(ab)){1C"43":ab=P.da(ab,P.26(P.6a,{$bB:P.$F}));ab.3b=ab.dl;1a ab;1H;1C"1N":1b aa=1n.dT(ab);if(P.3t(aa)){1a P.$(aa)}1a 1h;1H;1C"1j":1C"1n":P.$bw(ab);ab=P.26(ab,P.3y);1H;1C"6c":P.$bw(ab);ab=P.26(ab,P.3Y);1H;1C"1z":ab=P.26(ab,P.1v);1H;1C"d6":1C"17":1C"43":1C"d7":1Q:Z=1l;1H}if(Z){1a P.26(ab,{$bB:P.$F})}1k{1a ab}},$1t:17(Z,ab,aa){1a P.$(P.du.89(Z)).8p(ab||{}).1y(aa||{})},6P:17(aa,ac,ag){1b ad,ab,ae,af=[],Z=-1;ag||(ag=P.d8);ad=P.$(ag)||P.$1t("2o",{id:ag,1u:"9D/6C"}).2a((1n.hR||1n.3A),"1G");ab=ad.df||ad.dg;if("1N"!=P.1O(ac)){1U(1b ae in ac){af.3e(ae+":"+ac[ae])}ac=af.7k(";")}if(ab.d9){Z=ab.d9(aa+" {"+ac+"}",ab.i0.1I)}1k{Z=ab.i1(aa,ac)}1a Z},i2:17(ac,Z){1b ab,aa;ab=P.$(ac);if("6c"!==P.1O(ab)){1a}aa=ab.df||ab.dg;if(aa.dn){aa.dn(Z)}1k{if(aa.dp){aa.dp(Z)}}},hY:17(){1a"hU-hT-hV-hW-hX".4h(/[hE]/g,17(ab){1b aa=1p.6p()*16|0,Z=ab=="x"?aa:(aa&3|8);1a Z.8q(16)}).7p()},64:(17(){1b Z;1a 17(aa){if(!Z){Z=1n.89("a")}Z.3E("6Z",aa);1a("!!"+Z.6Z).4h("!!","")}})(),hD:17(ab){1b ac=0,Z=ab.1I;1U(1b aa=0;aa<Z;++aa){ac=31*ac+ab.fq(aa);ac%=hm}1a ac}};1b P=V;1b Q=V.$;if(!1j.dq){1j.dq=V;1j.$dm=V.$}P.6a={$4z:"43",4K:17(ac,ad){1b Z=13.1I;1U(1b aa=13.1I,ab=(ad<0)?1p.1W(0,aa+ad):ad||0;ab<aa;ab++){if(13[ab]===ac){1a ab}}1a-1},5R:17(Z,aa){1a 13.4K(Z,aa)!=-1},dl:17(Z,ac){1U(1b ab=0,aa=13.1I;ab<aa;ab++){if(ab in 13){Z.2c(ac,13[ab],ab,13)}}},33:17(Z,ae){1b ad=[];1U(1b ac=0,aa=13.1I;ac<aa;ac++){if(ac in 13){1b ab=13[ac];if(Z.2c(ae,13[ac],ac,13)){ad.3e(ab)}}}1a ad},hn:17(Z,ad){1b ac=[];1U(1b ab=0,aa=13.1I;ab<aa;ab++){if(ab in 13){ac[ab]=Z.2c(ad,13[ab],ab,13)}}1a ac}};P.a0(5Z,{$4z:"1N",4Y:17(){1a 13.4h(/^\\s+|\\s+$/g,"")},eq:17(Z,aa){1a(aa||1l)?(13.8q()===Z.8q()):(13.5o().8q()===Z.5o().8q())},5C:17(){1a 13.4h(/-\\D/g,17(Z){1a Z.9W(1).7p()})},ar:17(){1a 13.4h(/[A-Z]/g,17(Z){1a("-"+Z.9W(0).5o())})},hp:17(Z){1a 5K(13,Z||10)},hk:17(){1a 2u(13)},cC:17(){1a!13.4h(/1r/i,"").4Y()},4I:17(aa,Z){Z=Z||"";1a(Z+13+Z).4K(Z+aa+Z)>-1}});V.a0(bJ,{$4z:"17",1E:17(){1b aa=P.$A(29),Z=13,ab=aa.6I();1a 17(){1a Z.66(ab||1h,aa.5F(P.$A(29)))}},2L:17(){1b aa=P.$A(29),Z=13,ab=aa.6I();1a 17(ac){1a Z.66(ab||1h,P.$([ac||(P.1e.2D?1j.1z:1h)]).5F(aa))}},2F:17(){1b aa=P.$A(29),Z=13,ab=aa.6I();1a 1j.4v(17(){1a Z.66(Z,aa)},ab||0)},dw:17(){1b aa=P.$A(29),Z=13;1a 17(){1a Z.2F.66(Z,aa)}},dI:17(){1b aa=P.$A(29),Z=13,ab=aa.6I();1a 1j.eC(17(){1a Z.66(Z,aa)},ab||0)}});1b W={},O=2y.hj.5o(),N=O.3z(/(3O|6D|4Z|bq)\\/(\\d+\\.?\\d*)/i),S=O.3z(/(hf|bF)\\/(\\d+\\.?\\d*)/i)||O.3z(/(cK|5O|a1|dj|72|bF)\\/(\\d+\\.?\\d*)/i),U=O.3z(/4J\\/(\\d+\\.?\\d*)/i),J=1n.5a.2o;17 K(aa){1b Z=aa.9W(0).7p()+aa.b6(1);1a aa in J||("cT"+Z)in J||("cL"+Z)in J||("6e"+Z)in J||("O"+Z)in J}P.1e={2J:{he:!!(1n.hg),hh:!!(1j.c5),bu:!!(1n.eM),4X:!!(1n.hi||1n.hq||1n.9F||1n.d0||1n.hr||1n.hz||1n.hA||1n.hB||1n.hC),dO:!!(1j.hy)&&!!(1j.hx)&&(1j.8S&&"ht"in 1t 8S),1Z:K("1Z"),2l:K("2l"),9b:K("9b"),dh:K("dh"),51:1l,cS:1l,8n:1l,5q:1l,7P:(17(){1a 1n.hs.hu("bv://bs.bx.by/hv/hw/i4#i5","1.1")})()},aF:17(){1a"iJ"in 1j||(1j.di&&1n 5c di)||(2y.iK>0)||(2y.iL>0)}(),34:O.3z(/(6R|bb\\d+|iM).+|iI|iH\\/|iD|iC|iE|iF|iG|iN|iO|ip(d4|d5|ad)|iW|iX|iY |iZ|iV|iU|34.+dj|iQ|72 m(iP|in)i|iR( iS)?|dk|p(iT|iB)\\/|iA|ih|ig|ii(4|6)0|ij|ik|ic\\.(1e|3M)|ib|i7|i6 (ce|dk)|i9|ia/)?1r:1l,7u:(N&&N[1])?N[1].5o():(1j.72)?"bq":!!(1j.il)?"4Z":(2E!==1n.im||1h!=1j.iw)?"6D":(1h!==1j.ix||!2y.iy)?"3O":"iz",4J:(N&&N[2])?2u(N[2]):0,4l:(S&&S[1])?S[1].5o():"",76:(S&&S[2])?2u(S[2]):0,8E:"",b4:"",4R:"",2D:0,57:O.3z(/ip(?:ad|d5|d4)/)?"9Y":(O.3z(/(?:iv|6R)/)||2y.57.3z(/iu|91|iq/i)||["io"])[0].5o(),d1:1n.9H&&"cP"==1n.9H.5o(),cR:0,4e:17(){1a(1n.9H&&"cP"==1n.9H.5o())?1n.3A:1n.5a},51:1j.51||1j.ir||1j.is||1j.hd||1j.j0||2E,9w:1j.9w||1j.cQ||1j.cQ||1j.gX||1j.g6||1j.g7||2E,2n:1l,7D:17(){if(P.1e.2n){1a}1b ac,ab;P.1e.2n=1r;P.3A=P.$(1n.3A);P.91=P.$(1j);3i{1b aa=P.$1t("2X").1y({1f:2K,1g:2K,7a:"6l",2h:"5y",1G:-g8}).2a(1n.3A);P.1e.cR=aa.dS-aa.e1;aa.2U()}3F(Z){}3i{ac=P.$1t("2X");ab=ac.2o;ab.cN="cO:24(bD://),24(bD://),g9 24(bD://)";P.1e.2J.cS=(/(24\\s*\\(.*?){3}/).3j(ab.cO);ab=1h;ac=1h}3F(Z){}if(!P.1e.7g){P.1e.7g=P.a9("2l").ar()}3i{ac=P.$1t("2X");ac.2o.cN=P.a9("33").ar()+":59(g0);";P.1e.2J.8n=!!ac.2o.1I&&(!P.1e.2D||P.1e.2D>9);ac=1h}3F(Z){}if(!P.1e.2J.8n){P.$(1n.5a).1B("6O-fZ-3g")}3i{P.1e.2J.5q=(17(){1b ad=P.$1t("5q");1a!!(ad.cJ&&ad.cJ("2d"))})()}3F(Z){}if(2E===1j.g1&&2E!==1j.g2){W.2V="g3"}P.3y.2W.2c(P.$(1n),"9e")}};(17(){1b ae=[],ad,ac,aa;17 Z(){1a!!(29.9q.bT)}4G(P.1e.7u){1C"4Z":if(!P.1e.4J){P.1e.4J=!!(1j.8S)?3:2}1H;1C"6D":P.1e.4J=(S&&S[2])?2u(S[2]):0;1H}P.1e[P.1e.7u]=1r;if(S&&"cK"===S[1]){P.1e.4l="5O"}if(!!1j.5O){P.1e.5O=1r}if(S&&"bF"===S[1]){P.1e.4l="72";P.1e.72=1r}if("a1"===P.1e.4l&&(U&&U[1])){P.1e.76=2u(U[1])}if("6R"==P.1e.57&&P.1e.3O&&(U&&U[1])){P.1e.83=1r}ad=({6D:["-cM-","cL","cM"],3O:["-3O-","cT","3O"],4Z:["-6e-","6e","6e"],bq:["-o-","O","o"]})[P.1e.7u]||["","",""];P.1e.8E=ad[0];P.1e.b4=ad[1];P.1e.4R=ad[2];P.1e.2D=(!P.1e.4Z)?2E:(1n.cU)?1n.cU:17(){1b af=0;if(P.1e.d1){1a 5}4G(P.1e.4J){1C 2:af=6;1H;1C 3:af=7;1H}1a af}();ae.3e(P.1e.57+"-3g");if(P.1e.34){ae.3e("34-3g")}if(P.1e.83){ae.3e("6R-1e-3g")}if(P.1e.2D){P.1e.4l="ie";P.1e.76=P.1e.2D;ae.3e("ie"+P.1e.2D+"-3g");1U(ac=11;ac>P.1e.2D;ac--){ae.3e("gj-ie"+ac+"-3g")}}if(P.1e.3O&&P.1e.4J<gk){P.1e.2J.4X=1l}if(P.1e.51){P.1e.51.2c(1j,17(){P.1e.2J.51=1r})}if(P.1e.2J.7P){ae.3e("7P-3g")}1k{ae.3e("6O-7P-3g")}aa=(1n.5a.6r||"").3z(/\\S+/g)||[];1n.5a.6r=P.$(aa).5F(ae).7k(" ");3i{1n.5a.3E("3r-3g-d2",P.1e.4l);1n.5a.3E("3r-3g-d2-gl",P.1e.76)}3F(ab){}if(P.1e.2D&&P.1e.2D<9){1n.89("5E");1n.89("eE")}})();(17(){P.1e.4X={9J:P.1e.2J.4X,4W:17(){1a!!(1n.gh||1n[P.1e.4R+"gg"]||1n.4X||1n.gc||1n[P.1e.4R+"gd"])},c2:17(Z,aa){aa||(aa={});if(13.9J){P.$(1n).1D(13.bc,13.d3=17(ab){if(13.4W()){aa.c1&&aa.c1()}1k{P.$(1n).1P(13.bc,13.d3);aa.bZ&&aa.bZ()}}.2L(13));P.$(1n).1D(13.b8,13.6g=17(ab){aa.8M&&aa.8M();P.$(1n).1P(13.b8,13.6g)}.2L(13));(Z[P.1e.4R+"fY"]||Z[P.1e.4R+"gf"]||Z.gm||17(){}).2c(Z)}1k{if(aa.8M){aa.8M()}}},f4:(1n.9F||1n.d0||1n[P.1e.4R+"fV"]||1n[P.1e.4R+"fG"]||17(){}).1E(1n),bc:1n.cZ?"fH":(1n.9F?"":P.1e.4R)+"fF",b8:1n.cZ?"fJ":(1n.9F?"":P.1e.4R)+"fE",fC:P.1e.4R,fD:1h}})();1b Y=/\\S+/g,M=/^(3L(cV|cW|cX|cY)fI)|((7e|8a)(cV|cW|cX|cY))$/,R={"fU":("2E"===8v(J.dr))?"fL":"dr"},T={em:1r,ei:1r,2r:1r,eh:1r,1m:1r},L=(1j.ds)?17(ab,Z){1b aa=1j.ds(ab,1h);1a aa?aa.fS(Z)||aa[Z]:1h}:17(ac,aa){1b ab=ac.fR,Z=1h;Z=ab?ab[aa]:1h;if(1h==Z&&ac.2o&&ac.2o[aa]){Z=ac.2o[aa]}1a Z};17 X(ab){1b Z,aa;aa=(P.1e.3O&&"33"==ab)?1l:(ab in J);if(!aa){Z=P.1e.b4+ab.9W(0).7p()+ab.b6(1);if(Z in J){1a Z}}1a ab}P.a9=X;P.3Y={dY:17(Z){1a!(Z||"").4I(" ")&&(13.6r||"").4I(Z," ")},1B:17(ad){1b aa=(13.6r||"").3z(Y)||[],ac=(ad||"").3z(Y)||[],Z=ac.1I,ab=0;1U(;ab<Z;ab++){if(!P.$(aa).5R(ac[ab])){aa.3e(ac[ab])}}13.6r=aa.7k(" ");1a 13},1T:17(ae){1b aa=(13.6r||"").3z(Y)||[],ad=(ae||"").3z(Y)||[],Z=ad.1I,ac=0,ab;1U(;ac<Z;ac++){if((ab=P.$(aa).4K(ad[ac]))>-1){aa.9R(ab,1)}}13.6r=ae?aa.7k(" "):"";1a 13},fM:17(Z){1a 13.dY(Z)?13.1T(Z):13.1B(Z)},3q:17(aa){1b ab=aa.5C(),Z=1h;aa=R[ab]||(R[ab]=X(ab));Z=L(13,aa);if("2B"===Z){Z=1h}if(1h!==Z){if("2r"==aa){1a P.3t(Z)?2u(Z):1}if(M.3j(aa)){Z=5K(Z,10)?Z:"6y"}}1a Z},3Q:17(aa,Z){1b ac=aa.5C();3i{if("2r"==aa){13.dZ(Z);1a 13}aa=R[ac]||(R[ac]=X(ac));13.2o[aa]=Z+(("6b"==P.1O(Z)&&!T[ac])?"2v":"")}3F(ab){}1a 13},1y:17(aa){1U(1b Z in aa){13.3Q(Z,aa[Z])}1a 13},fP:17(){1b Z={};P.$A(29).3b(17(aa){Z[aa]=13.3q(aa)},13);1a Z},dZ:17(ab,Z){1b aa;Z=Z||1l;13.2o.2r=ab;ab=5K(2u(ab)*2K);if(Z){if(0===ab){if("3w"!=13.2o.4w){13.2o.4w="3w"}}1k{if("5J"!=13.2o.4w){13.2o.4w="5J"}}}if(P.1e.2D&&P.1e.2D<9){if(!9I(ab)){if(!~13.2o.33.4K("bl")){13.2o.33+=" e0:dX.dW.bl(a8="+ab+")"}1k{13.2o.33=13.2o.33.4h(/a8=\\d*/i,"a8="+ab)}}1k{13.2o.33=13.2o.33.4h(/e0:dX.dW.bl\\(a8=\\d*\\)/i,"").4Y();if(""===13.2o.33){13.2o.5r("33")}}}1a 13},8p:17(Z){1U(1b aa in Z){if("3X"===aa){13.1B(""+Z[aa])}1k{13.3E(aa,""+Z[aa])}}1a 13},gW:17(){1b aa=0,Z=0;aa=13.3q("1Z-5p");Z=13.3q("1Z-ca");aa=aa.4K("6e")>-1?2u(aa):aa.4K("s")>-1?2u(aa)*aK:0;Z=Z.4K("6e")>-1?2u(Z):Z.4K("s")>-1?2u(Z)*aK:0;1a aa+Z},4m:17(){1a 13.1y({63:"2Z",4w:"3w"})},5v:17(){1a 13.1y({63:"",4w:"5J"})},1F:17(){1a{1f:13.dS,1g:13.gn}},8g:17(aa){1b Z=13.1F();Z.1f-=(2u(13.3q("3L-1M-1f")||0)+2u(13.3q("3L-2N-1f")||0));Z.1g-=(2u(13.3q("3L-1G-1f")||0)+2u(13.3q("3L-2M-1f")||0));if(!aa){Z.1f-=(2u(13.3q("7e-1M")||0)+2u(13.3q("7e-2N")||0));Z.1g-=(2u(13.3q("7e-1G")||0)+2u(13.3q("7e-2M")||0))}1a Z},7n:17(){1a{1G:13.8t,1M:13.8z}},gY:17(){1b Z=13,aa={1G:0,1M:0};do{aa.1M+=Z.8z||0;aa.1G+=Z.8t||0;Z=Z.4M}5z(Z);1a aa},8x:17(){1b ad=13,aa=0,ac=0;if(P.3t(1n.5a.7l)){1b Z=13.7l(),ab=P.$(1n).7n(),ae=P.1e.4e();1a{1G:Z.1G+ab.y-ae.gU,1M:Z.1M+ab.x-ae.gT}}do{aa+=ad.gP||0;ac+=ad.gO||0;ad=ad.gQ}5z(ad&&!(/^(?:3A|bh)$/i).3j(ad.au));1a{1G:ac,1M:aa}},7o:17(){1b aa=13.8x();1b Z=13.1F();1a{1G:aa.1G,2M:aa.1G+Z.1g,1M:aa.1M,2N:aa.1M+Z.1f}},5t:17(aa){3i{13.gR=aa}3F(Z){13.gS=aa}1a 13},2U:17(){1a(13.4M)?13.4M.bE(13):13},5k:17(){P.$A(13.gZ).3b(17(Z){if(3==Z.6w||8==Z.6w){1a}P.$(Z).5k()});13.2U();13.bo();if(13.$6t){P.8d[13.$6t]=1h;52 P.8d[13.$6t]}1a 1h},3c:17(ab,aa){aa=aa||"2M";1b Z=13.4r;("1G"==aa&&Z)?13.h0(ab,Z):13.b3(ab);1a 13},2a:17(ab,aa){1b Z=P.$(ab).3c(13,aa);1a 13},eL:17(Z){13.3c(Z.4M.8m(13,Z));1a 13},ap:17(Z){if("6c"!==P.1O("1N"==P.1O(Z)?Z=1n.dT(Z):Z)){1a 1l}1a(13==Z)?1l:(13.5R&&!(P.1e.dV))?(13.5R(Z)):(13.dU)?!!(13.dU(Z)&16):P.$A(13.81(Z.au)).5R(Z)}};P.3Y.ha=P.3Y.3q;P.3Y.hb=P.3Y.1y;if(!1j.3Y){1j.3Y=P.$F;if(P.1e.7u.3O){1j.1n.89("h7")}1j.3Y.2A=(P.1e.7u.3O)?1j["[[h2.2A]]"]:{}}P.a0(1j.3Y,{$4z:"6c"});P.3y={1F:17(){if(P.1e.aF||P.1e.h1||P.1e.dV){1a{1f:1j.5L,1g:1j.5d}}1a{1f:P.1e.4e().e1,1g:P.1e.4e().h3}},7n:17(){1a{x:1j.h4||P.1e.4e().8z,y:1j.h5||P.1e.4e().8t}},gN:17(){1b Z=13.1F();1a{1f:1p.1W(P.1e.4e().gM,Z.1f),1g:1p.1W(P.1e.4e().gv,Z.1g)}}};P.26(1n,{$4z:"1n"});P.26(1j,{$4z:"1j"});P.26([P.3Y,P.3y],{2e:17(ac,aa){1b Z=P.at(13.$6t),ab=Z[ac];if(2E!==aa&&2E===ab){ab=Z[ac]=aa}1a(P.3t(ab)?ab:1h)},3a:17(ab,aa){1b Z=P.at(13.$6t);Z[ab]=aa;1a 13},38:17(aa){1b Z=P.at(13.$6t);52 Z[aa];1a 13}});if(!(1j.bk&&1j.bk.2A&&1j.bk.2A.bM)){P.26([P.3Y,P.3y],{bM:17(Z){1a P.$A(13.9K("*")).33(17(ab){3i{1a(1==ab.6w&&ab.6r.4I(Z," "))}3F(aa){}})}})}P.26([P.3Y,P.3y],{9V:17(){1a 13.bM(29[0])},81:17(){1a 13.9K(29[0])}});if(P.1e.4X.9J&&!1n.e2){P.3Y.e2=17(){P.1e.4X.c2(13)}}P.1v={$4z:"1z",6j:P.$1l,2g:17(){1a 13.5g().40()},5g:17(){if(13.e9){13.e9()}1k{13.ea=1r}1a 13},40:17(){if(13.eb){13.eb()}1k{13.gu=1l}1a 13},4j:17(){13.6j=P.$1r;1a 13},7C:17(){1b aa,Z;aa=((/3x/i).3j(13.1u))?13.2I[0]:13;1a(!P.3t(aa))?{x:0,y:0}:{x:aa.2H,y:aa.2G}},5u:17(){1b aa,Z;aa=((/3x/i).3j(13.1u))?13.2I[0]:13;1a(!P.3t(aa))?{x:0,y:0}:{x:aa.4V||aa.2H+P.1e.4e().8z,y:aa.4O||aa.2G+P.1e.4e().8t}},cc:17(){1b Z=13.4c||13.j1;5z(Z&&3==Z.6w){Z=Z.4M}1a Z},8r:17(){1b aa=1h;4G(13.1u){1C"7H":1C"gp":1C"go":aa=13.8V||13.gq;1H;1C"8J":1C"bf":1C"fo":aa=13.8V||13.gr;1H;1Q:1a aa}3i{5z(aa&&3==aa.6w){aa=aa.4M}}3F(Z){aa=1h}1a aa},6H:17(){if(!13.e8&&13.2q!==2E){1a(13.2q&1?1:(13.2q&2?3:(13.2q&4?2:0)))}1a 13.e8},gs:17(){1a(13.2k&&("3x"===13.2k||13.2k===13.5i))||(/3x/i).3j(13.1u)},gz:17(){1a 13.2k?(("3x"===13.2k||13.5i===13.2k)&&13.9u):1===13.2I.1I&&(13.6d.1I?13.6d[0].3K==13.2I[0].3K:1r)}};P.cb="e7";P.cg="gA";P.9m="";if(!1n.e7){P.cb="gI";P.cg="gJ";P.9m="88"}P.1v.1x={1u:"",x:1h,y:1h,2S:1h,2q:1h,4c:1h,8V:1h,$4z:"1z.4q",6j:P.$1l,5j:P.$([]),4f:17(Z){1b aa=Z;13.5j.3e(aa)},2g:17(){1a 13.5g().40()},5g:17(){13.5j.3b(17(aa){3i{aa.5g()}3F(Z){}});1a 13},40:17(){13.5j.3b(17(aa){3i{aa.40()}3F(Z){}});1a 13},4j:17(){13.6j=P.$1r;1a 13},7C:17(){1a{x:13.2H,y:13.2G}},5u:17(){1a{x:13.x,y:13.y}},cc:17(){1a 13.4c},8r:17(){1a 13.8V},6H:17(){1a 13.2q},f8:17(){1a 13.5j.1I>0?13.5j[0].cc():2E}};P.26([P.3Y,P.3y],{1D:17(ab,ad,ae,ah){1b ag,Z,ac,af,aa;if("1N"==P.1O(ab)){aa=ab.8O(" ");if(aa.1I>1){ab=aa}}if(P.1O(ab)=="43"){P.$(ab).3b(13.1D.2L(13,ad,ae,ah));1a 13}if(!ab||!ad||P.1O(ab)!="1N"||P.1O(ad)!="17"){1a 13}if(ab=="9e"&&P.1e.2n){ad.2c(13);1a 13}ab=W[ab]||ab;ae=5K(ae||50);if(!ad.$9l){ad.$9l=1p.5P(1p.6p()*P.6m())}ag=P.3y.2e.2c(13,"7Y",{});Z=ag[ab];if(!Z){ag[ab]=Z=P.$([]);ac=13;if(P.1v.1x[ab]){P.1v.1x[ab].1L.5V.2c(13,ah)}1k{Z.3o=17(ai){ai=P.26(ai||1j.e,{$4z:"1z"});P.3y.2W.2c(ac,ab,P.$(ai))};13[P.cb](P.9m+ab,Z.3o,1l)}}af={1u:ab,fn:ad,ch:ae,e4:ad.$9l};Z.3e(af);Z.gL(17(aj,ai){1a aj.ch-ai.ch});1a 13},1P:17(af){1b ad=P.3y.2e.2c(13,"7Y",{}),ab,Z,aa,ag,ae,ac;ae=29.1I>1?29[1]:-2K;if("1N"==P.1O(af)){ac=af.8O(" ");if(ac.1I>1){af=ac}}if(P.1O(af)=="43"){P.$(af).3b(13.1P.2L(13,ae));1a 13}af=W[af]||af;if(!af||P.1O(af)!="1N"||!ad||!ad[af]){1a 13}ab=ad[af]||[];1U(aa=0;aa<ab.1I;aa++){Z=ab[aa];if(-2K==ae||!!ae&&ae.$9l===Z.e4){ag=ab.9R(aa--,1)}}if(0===ab.1I){if(P.1v.1x[af]){P.1v.1x[af].1L.2U.2c(13)}1k{13[P.cg](P.9m+af,ab.3o,1l)}52 ad[af]}1a 13},2W:17(ad,af){1b ac=P.3y.2e.2c(13,"7Y",{}),ab,Z,aa;ad=W[ad]||ad;if(!ad||P.1O(ad)!="1N"||!ac||!ac[ad]){1a 13}3i{af=P.26(af||{},{1u:ad})}3F(ae){}if(2E===af.2S){af.2S=P.6m()}ab=ac[ad]||[];1U(aa=0;aa<ab.1I&&!(af.6j&&af.6j());aa++){ab[aa].fn.2c(13,af)}},c8:17(aa,Z){1b ad=("9e"==aa)?1l:1r,ac=13,ab;aa=W[aa]||aa;if(!ad){P.3y.2W.2c(13,aa);1a 13}if(ac===1n&&1n.8X&&!ac.aZ){ac=1n.5a}if(1n.8X){ab=1n.8X(aa);ab.5Y(Z,1r,1r)}1k{ab=1n.gB();ab.9k=aa}if(1n.8X){ac.aZ(ab)}1k{ac.gD("88"+Z,ab)}1a ab},bo:17(){1b aa=P.3y.2e.2c(13,"7Y");if(!aa){1a 13}1U(1b Z in aa){P.3y.1P.2c(13,Z)}P.3y.38.2c(13,"7Y");1a 13}});(17(Z){if("8Q"===1n.8L){1a Z.1e.7D.2F(1)}if(Z.1e.3O&&Z.1e.4J<gF){(17(){(Z.$(["2j","8Q"]).5R(1n.8L))?Z.1e.7D():29.9q.2F(50)})()}1k{if(Z.1e.4Z&&Z.1e.2D<9&&1j==1G){(17(){(Z.$3i(17(){Z.1e.4e().it("1M");1a 1r}))?Z.1e.7D():29.9q.2F(50)})()}1k{Z.3y.1D.2c(Z.$(1n),"kX",Z.1e.7D);Z.3y.1D.2c(Z.$(1j),"5W",Z.1e.7D)}}})(V);P.3J=17(){1b ad=1h,aa=P.$A(29);if("3X"==P.1O(aa[0])){ad=aa.6I()}1b Z=17(){1U(1b ag in 13){13[ag]=P.4b(13[ag])}if(13.5m.$3P){13.$3P={};1b ai=13.5m.$3P;1U(1b ah in ai){1b af=ai[ah];4G(P.1O(af)){1C"17":13.$3P[ah]=P.3J.e5(13,af);1H;1C"8l":13.$3P[ah]=P.4b(af);1H;1C"43":13.$3P[ah]=P.4b(af);1H}}}1b ae=(13.3H)?13.3H.66(13,29):13;52 13.bT;1a ae};if(!Z.2A.3H){Z.2A.3H=P.$F}if(ad){1b ac=17(){};ac.2A=ad.2A;Z.2A=1t ac;Z.$3P={};1U(1b ab in ad.2A){Z.$3P[ab]=ad.2A[ab]}}1k{Z.$3P=1h}Z.5m=P.3J;Z.2A.5m=Z;P.26(Z.2A,aa[0]);P.26(Z,{$4z:"3X"});1a Z};V.3J.e5=17(Z,aa){1a 17(){1b ac=13.bT;1b ab=aa.66(Z,29);1a ab}};(17(ac){1b ab=ac.$;1b Z=5,aa=bH;ac.1v.1x.1S=1t ac.3J(ac.26(ac.1v.1x,{1u:"1S",3H:17(af,ae){1b ad=ae.5u();13.x=ad.x;13.y=ad.y;13.2H=ae.2H;13.2G=ae.2G;13.2S=ae.2S;13.2q=ae.6H();13.4c=af;13.4f(ae)}}));ac.1v.1x.1S.1L={1w:{7N:aa,2q:1},5V:17(ad){13.3a("1z:1S:1w",ac.26(ac.4b(ac.1v.1x.1S.1L.1w),ad||{}));13.1D("6X",ac.1v.1x.1S.1L.3o,1);13.1D("6x",ac.1v.1x.1S.1L.3o,1);13.1D("2O",ac.1v.1x.1S.1L.c7,1);if(ac.1e.4Z&&ac.1e.2D<9){13.1D("92",ac.1v.1x.1S.1L.3o,1)}},2U:17(){13.1P("6X",ac.1v.1x.1S.1L.3o);13.1P("6x",ac.1v.1x.1S.1L.3o);13.1P("2O",ac.1v.1x.1S.1L.c7);if(ac.1e.4Z&&ac.1e.2D<9){13.1P("92",ac.1v.1x.1S.1L.3o)}},c7:17(ad){ad.40()},3o:17(ag){1b af,ad,ae;ad=13.2e("1z:1S:1w");if(ag.1u!="92"&&ag.6H()!=ad.2q){1a}if(13.2e("1z:1S:bW")){13.38("1z:1S:bW");1a}if("6X"==ag.1u){af=1t ac.1v.1x.1S(13,ag);13.3a("1z:1S:9d",af)}1k{if("6x"==ag.1u){af=13.2e("1z:1S:9d");if(!af){1a}ae=ag.5u();13.38("1z:1S:9d");af.4f(ag);if(ag.2S-af.2S<=ad.7N&&1p.87(1p.4A(ae.x-af.x,2)+1p.4A(ae.y-af.y,2))<=Z){13.2W("1S",af)}1n.2W("6x",ag)}1k{if(ag.1u=="92"){af=1t ac.1v.1x.1S(13,ag);13.2W("1S",af)}}}}}})(V);(17(aa){1b Z=aa.$;aa.1v.1x.2T=1t aa.3J(aa.26(aa.1v.1x,{1u:"2T",2p:"3N",6h:1l,3H:17(ae,ad,ac){1b ab=ad.5u();13.x=ab.x;13.y=ab.y;13.2H=ad.2H;13.2G=ad.2G;13.2S=ad.2S;13.2q=ad.6H();13.4c=ae;13.4f(ad);13.2p=ac}}));aa.1v.1x.2T.1L={5V:17(){1b ac=aa.1v.1x.2T.1L.e6.2L(13),ab=aa.1v.1x.2T.1L.8Y.2L(13);13.1D("6X",aa.1v.1x.2T.1L.bS,1);13.1D("6x",aa.1v.1x.2T.1L.8Y,1);1n.1D("6S",ac,1);1n.1D("6x",ab,1);13.3a("1z:2T:4F:1n:5T",ac);13.3a("1z:2T:4F:1n:7O",ab)},2U:17(){13.1P("6X",aa.1v.1x.2T.1L.bS);13.1P("6x",aa.1v.1x.2T.1L.8Y);Z(1n).1P("6S",13.2e("1z:2T:4F:1n:5T")||aa.$F);Z(1n).1P("6x",13.2e("1z:2T:4F:1n:7O")||aa.$F);13.38("1z:2T:4F:1n:5T");13.38("1z:2T:4F:1n:7O")},bS:17(ac){1b ab;if(1!=ac.6H()){1a}ab=1t aa.1v.1x.2T(13,ac,"3N");13.3a("1z:2T:3N",ab)},8Y:17(ac){1b ab;ab=13.2e("1z:2T:3N");if(!ab){1a}ac.40();ab=1t aa.1v.1x.2T(13,ac,"9y");13.38("1z:2T:3N");13.2W("2T",ab)},e6:17(ac){1b ab;ab=13.2e("1z:2T:3N");if(!ab){1a}ac.40();if(!ab.6h){ab.6h=1r;13.2W("2T",ab)}ab=1t aa.1v.1x.2T(13,ac,"dB");13.2W("2T",ab)}}})(V);(17(aa){1b Z=aa.$;aa.1v.1x.4d=1t aa.3J(aa.26(aa.1v.1x,{1u:"4d",7F:1l,7K:1h,3H:17(ad,ac){1b ab=ac.5u();13.x=ab.x;13.y=ab.y;13.2H=ac.2H;13.2G=ac.2G;13.2S=ac.2S;13.2q=ac.6H();13.4c=ad;13.4f(ac)}}));aa.1v.1x.4d.1L={1w:{7N:7b},5V:17(ab){13.3a("1z:4d:1w",aa.26(aa.4b(aa.1v.1x.4d.1L.1w),ab||{}));13.1D("1S",aa.1v.1x.4d.1L.3o,1)},2U:17(){13.1P("1S",aa.1v.1x.4d.1L.3o)},3o:17(ad){1b ac,ab;ac=13.2e("1z:4d:1z");ab=13.2e("1z:4d:1w");if(!ac){ac=1t aa.1v.1x.4d(13,ad);ac.7K=4v(17(){ac.7F=1r;ad.6j=aa.$1l;13.2W("1S",ad);13.38("1z:4d:1z")}.1E(13),ab.7N+10);13.3a("1z:4d:1z",ac);ad.4j()}1k{3R(ac.7K);13.38("1z:4d:1z");if(!ac.7F){ac.4f(ad);ad.4j().2g();13.2W("4d",ac)}1k{}}}}})(V);(17(af){1b ae=af.$;17 Z(ag){1a ag.2k?(("3x"===ag.2k||ag.5i===ag.2k)&&ag.9u):1===ag.2I.1I&&(ag.6d.1I?ag.6d[0].3K==ag.2I[0].3K:1r)}17 ab(ag){if(ag.2k){1a("3x"===ag.2k||ag.5i===ag.2k)?ag.93:1h}1k{1a ag.2I[0].3K}}17 ac(ag){if(ag.2k){1a("3x"===ag.2k||ag.5i===ag.2k)?ag:1h}1k{1a ag.2I[0]}}af.1v.1x.21=1t af.3J(af.26(af.1v.1x,{1u:"21",id:1h,3H:17(ah,ag){1b ai=ac(ag);13.id=ai.93||ai.3K;13.x=ai.4V;13.y=ai.4O;13.4V=ai.4V;13.4O=ai.4O;13.2H=ai.2H;13.2G=ai.2G;13.2S=ag.2S;13.2q=0;13.4c=ah;13.4f(ag)}}));1b aa=10,ad=7b;af.1v.1x.21.1L={5V:17(ag){13.1D(["5f",1j.2y.3d?"6Q":"7r"],af.1v.1x.21.1L.7M,1);13.1D(["6v",1j.2y.3d?"5Q":"6o"],af.1v.1x.21.1L.6J,1);13.1D("2O",af.1v.1x.21.1L.bQ,1)},2U:17(){13.1P(["5f",1j.2y.3d?"6Q":"7r"],af.1v.1x.21.1L.7M);13.1P(["6v",1j.2y.3d?"5Q":"6o"],af.1v.1x.21.1L.6J);13.1P("2O",af.1v.1x.21.1L.bQ)},bQ:17(ag){ag.40()},7M:17(ag){if(!Z(ag)){13.38("1z:21:1z");1a}13.3a("1z:21:1z",1t af.1v.1x.21(13,ag));13.3a("1z:1S:bW",1r)},6J:17(aj){1b ah=af.6m(),ai=13.2e("1z:21:1z"),ag=13.2e("1z:21:1w");if(!ai||!Z(aj)){1a}13.38("1z:21:1z");if(ai.id==ab(aj)&&aj.2S-ai.2S<=ad&&1p.87(1p.4A(ac(aj).4V-ai.x,2)+1p.4A(ac(aj).4O-ai.y,2))<=aa){13.38("1z:1S:9d");aj.2g();ai.4f(aj);13.2W("21",ai)}}}})(V);P.1v.1x.3D=1t P.3J(P.26(P.1v.1x,{1u:"3D",7F:1l,7K:1h,3H:17(aa,Z){13.x=Z.x;13.y=Z.y;13.2H=Z.2H;13.2G=Z.2G;13.2S=Z.2S;13.2q=0;13.4c=aa;13.4f(Z)}}));P.1v.1x.3D.1L={1w:{7N:bH},5V:17(Z){13.3a("1z:3D:1w",P.26(P.4b(P.1v.1x.3D.1L.1w),Z||{}));13.1D("21",P.1v.1x.3D.1L.3o,1)},2U:17(){13.1P("21",P.1v.1x.3D.1L.3o)},3o:17(ab){1b aa,Z;aa=13.2e("1z:3D:1z");Z=13.2e("1z:3D:1w");if(!aa){aa=1t P.1v.1x.3D(13,ab);aa.7K=4v(17(){aa.7F=1r;ab.6j=P.$1l;13.2W("21",ab)}.1E(13),Z.7N+10);13.3a("1z:3D:1z",aa);ab.4j()}1k{3R(aa.7K);13.38("1z:3D:1z");if(!aa.7F){aa.4f(ab);ab.4j().2g();13.2W("3D",aa)}1k{}}}};(17(ae){1b ad=ae.$;17 Z(af){1a af.2k?(("3x"===af.2k||af.5i===af.2k)&&af.9u):1===af.2I.1I&&(af.6d.1I?af.6d[0].3K==af.2I[0].3K:1r)}17 ab(af){if(af.2k){1a("3x"===af.2k||af.5i===af.2k)?af.93:1h}1k{1a af.2I[0].3K}}17 ac(af){if(af.2k){1a("3x"===af.2k||af.5i===af.2k)?af:1h}1k{1a af.2I[0]}}1b aa=10;ae.1v.1x.2t=1t ae.3J(ae.26(ae.1v.1x,{1u:"2t",2p:"3N",id:1h,6h:1l,3H:17(ah,ag,af){1b ai=ac(ag);13.id=ai.93||ai.3K;13.2H=ai.2H;13.2G=ai.2G;13.4V=ai.4V;13.4O=ai.4O;13.x=ai.4V;13.y=ai.4O;13.2S=ag.2S;13.2q=0;13.4c=ah;13.4f(ag);13.2p=af}}));ae.1v.1x.2t.1L={5V:17(){1b ag=ae.1v.1x.2t.1L.9j.1E(13),af=ae.1v.1x.2t.1L.6J.1E(13);13.1D(["5f",1j.2y.3d?"6Q":"7r"],ae.1v.1x.2t.1L.7M,1);13.1D(["6v",1j.2y.3d?"5Q":"6o"],ae.1v.1x.2t.1L.6J,1);13.1D(["8P",1j.2y.3d?"5D":"6u"],ae.1v.1x.2t.1L.9j,1);13.3a("1z:2t:4F:1n:5T",ag);13.3a("1z:2t:4F:1n:7O",af);ad(1n).1D(1j.2y.3d?"5D":"6u",ag,1);ad(1n).1D(1j.2y.3d?"5Q":"6o",af,1)},2U:17(){13.1P(["5f",1j.2y.3d?"6Q":"7r"],ae.1v.1x.2t.1L.7M);13.1P(["6v",1j.2y.3d?"5Q":"6o"],ae.1v.1x.2t.1L.6J);13.1P(["8P",1j.2y.3d?"5D":"6u"],ae.1v.1x.2t.1L.9j);ad(1n).1P(1j.2y.3d?"5D":"6u",13.2e("1z:2t:4F:1n:5T")||ae.$F,1);ad(1n).1P(1j.2y.3d?"5Q":"6o",13.2e("1z:2t:4F:1n:7O")||ae.$F,1);13.38("1z:2t:4F:1n:5T");13.38("1z:2t:4F:1n:7O")},7M:17(ag){1b af;if(!Z(ag)){1a}af=1t ae.1v.1x.2t(13,ag,"3N");13.3a("1z:2t:3N",af)},6J:17(ag){1b af;af=13.2e("1z:2t:3N");if(!af||!af.6h||af.id!=ab(ag)){1a}af=1t ae.1v.1x.2t(13,ag,"9y");13.38("1z:2t:3N");13.2W("2t",af)},9j:17(ag){1b af;af=13.2e("1z:2t:3N");if(!af||!Z(ag)){1a}if(af.id!=ab(ag)){13.38("1z:2t:3N");1a}if(!af.6h&&1p.87(1p.4A(ac(ag).4V-af.x,2)+1p.4A(ac(ag).4O-af.y,2))>aa){af.6h=1r;13.2W("2t",af)}if(!af.6h){1a}af=1t ae.1v.1x.2t(13,ag,"dB");13.2W("2t",af)}}})(V);P.1v.1x.3U=1t P.3J(P.26(P.1v.1x,{1u:"3U",48:1,aC:1,dD:1,2p:"ko",3H:17(aa,Z){13.2S=Z.2S;13.2q=0;13.4c=aa;13.x=Z.4g[0].2H+(Z.4g[1].2H-Z.4g[0].2H)/2;13.y=Z.4g[0].2G+(Z.4g[1].2G-Z.4g[0].2G)/2;13.dC=1p.87(1p.4A(Z.4g[0].2H-Z.4g[1].2H,2)+1p.4A(Z.4g[0].2G-Z.4g[1].2G,2));13.4f(Z)},3Z:17(Z){1b aa;13.2p="km";if(Z.2I[0].3K!=13.5j[0].4g[0].3K||Z.2I[1].3K!=13.5j[0].4g[1].3K){1a}aa=1p.87(1p.4A(Z.2I[0].2H-Z.2I[1].2H,2)+1p.4A(Z.2I[0].2G-Z.2I[1].2G,2));13.aC=13.48;13.48=aa/13.dC;13.dD=13.48/13.aC;13.x=Z.2I[0].2H+(Z.2I[1].2H-Z.2I[0].2H)/2;13.y=Z.2I[0].2G+(Z.2I[1].2G-Z.2I[0].2G)/2;13.4f(Z)}}));P.1v.1x.3U.1L={5V:17(){13.1D("5f",P.1v.1x.3U.1L.aB,1);13.1D("6v",P.1v.1x.3U.1L.av,1);13.1D("8P",P.1v.1x.3U.1L.az,1)},2U:17(){13.1P("5f",P.1v.1x.3U.1L.aB);13.1P("6v",P.1v.1x.3U.1L.av);13.1P("8P",P.1v.1x.3U.1L.az)},aB:17(aa){1b Z;if(aa.4g.1I!=2){1a}aa.40();Z=1t P.1v.1x.3U(13,aa);13.3a("1z:3U:1z",Z)},av:17(aa){1b Z;Z=13.2e("1z:3U:1z");if(!Z){1a}aa.40();13.38("1z:3U:1z")},az:17(aa){1b Z;Z=13.2e("1z:3U:1z");if(!Z){1a}aa.40();Z.3Z(aa);13.2W("3U",Z)}};(17(ae){1b ac=ae.$;ae.1v.1x.4x=1t ae.3J(ae.26(ae.1v.1x,{1u:"4x",3H:17(ak,aj,am,ag,af,al,ah){1b ai=aj.5u();13.x=ai.x;13.y=ai.y;13.2S=aj.2S;13.4c=ak;13.l5=am||0;13.aV=ag||0;13.8u=af||0;13.l9=al||0;13.l8=ah||0;13.aX=aj.aX||0;13.cd=1l;13.4f(aj)}}));1b ad,aa;17 Z(){ad=1h}17 ab(af,ag){1a(af>50)||(1===ag&&!("91"==ae.1e.57&&af<1))||(0===af%12)||(0==af%4.lc)}ae.1v.1x.4x.1L={9k:"ld"in 1n||ae.1e.2D>8?"kS":"l2",5V:17(){13.1D(ae.1v.1x.4x.1L.9k,ae.1v.1x.4x.1L.3o,1)},2U:17(){13.1P(ae.1v.1x.4x.1L.9k,ae.1v.1x.4x.1L.3o,1)},3o:17(ak){1b al=0,ai=0,ag=0,af=0,aj,ah;if(ak.dE){ag=ak.dE*-1}if(ak.dA!==2E){ag=ak.dA}if(ak.dz!==2E){ag=ak.dz}if(ak.dt!==2E){ai=ak.dt*-1}if(ak.8u){ag=-1*ak.8u}if(ak.aV){ai=ak.aV}if(0===ag&&0===ai){1a}al=0===ag?ai:ag;af=1p.1W(1p.3B(ag),1p.3B(ai));if(!ad||af<ad){ad=af}aj=al>0?"5P":"4t";al=1p[aj](al/ad);ai=1p[aj](ai/ad);ag=1p[aj](ag/ad);if(aa){3R(aa)}aa=4v(Z,7b);ah=1t ae.1v.1x.4x(13,ak,al,ai,ag,0,ad);ah.cd=ab(ad,ak.aX||0);13.2W("4x",ah)}}})(V);P.91=P.$(1j);P.du=P.$(1n);1a V})();(17(L){if(!L){5N"6L 6M 6N"}1b K=L.$;1b J=1j.jn||1j.ju||1h;z.aG=1t L.3J({2b:1h,2n:1l,1w:{9r:L.$F,67:L.$F,aN:L.$F,6g:L.$F,7q:L.$F,dG:L.$F,a5:1l,dv:1r},1A:1h,7W:1h,aM:0,7z:{9r:17(M){if(M.4c&&(7b===M.4c.9o||dN===M.4c.9o)&&M.jB){13.1w.9r.1E(1h,(M.2j-(13.1w.dv?13.aM:0))/M.jD).2F(1);13.aM=M.2j}},67:17(M){if(M){K(M).2g()}13.7Z();if(13.2n){1a}13.2n=1r;13.7Q();!13.1w.a5&&13.1w.9r.1E(1h,1).2F(1);13.1w.67.1E(1h,13).2F(1);13.1w.7q.1E(1h,13).2F(1)},aN:17(M){if(M){K(M).2g()}13.7Z();13.2n=1l;13.7Q();13.1w.aN.1E(1h,13).2F(1);13.1w.7q.1E(1h,13).2F(1)},6g:17(M){if(M){K(M).2g()}13.7Z();13.2n=1l;13.7Q();13.1w.6g.1E(1h,13).2F(1);13.1w.7q.1E(1h,13).2F(1)}},a2:17(){K(["5W","aE","dF"]).3b(17(M){13.2b.1D(M,13.7z["88"+M].2L(13).dw(1))},13)},7Z:17(){if(13.7W){3i{3R(13.7W)}3F(M){}13.7W=1h}K(["5W","aE","dF"]).3b(17(N){13.2b.1P(N)},13)},7Q:17(){13.1F();if(13.2b.2e("1t")){1b M=13.2b.4M;13.2b.2U().38("1t").1y({2h:"jk",1G:"2B"});M.5k()}},dP:17(N){1b O=1t 8S(),M;K(["aE","j6"]).3b(17(P){O["88"+P]=K(17(Q){13.7z["88"+P].2c(13,Q)}).1E(13)},13);O.6g=K(17(){13.1w.dG.1E(1h,13).2F(1);13.1w.a5=1l;13.a2();13.2b.1X=N}).1E(13);O.67=K(17(){if(7b!==O.9o&&dN!==O.9o){13.7z.6g.2c(13);1a}M=O.j3;13.a2();if(J&&!L.1e.4Z&&!("9Y"===L.1e.57&&L.1e.4J<j4)){13.2b.3E("1X",J.ja(M))}1k{13.2b.1X=N}}).1E(13);O.8I("jb",N);O.jh="jj";O.jf()},3H:17(N,M){13.1w=L.26(13.1w,M);13.2b=K(N)||L.$1t("2b",{},{"1W-1f":"2Z","1W-1g":"2Z"}).2a(L.$1t("2X").1B("3g-aP-2b").1y({2h:"5y",1G:-eJ,1f:10,1g:10,7a:"3w"}).2a(1n.3A)).3a("1t",1r);if(L.1e.2J.dO&&13.1w.a5&&"1N"==L.1O(N)){13.dP(N);1a}1b O=17(){if(13.dL()){13.7z.67.2c(13)}1k{13.7z.6g.2c(13)}O=1h}.1E(13);13.a2();if("1N"==L.1O(N)){13.2b.1X=N}1k{if(L.1e.4Z&&5==L.1e.4J&&L.1e.2D<9){13.2b.dM=17(){if(/2j|8Q/.3j(13.2b.8L)){13.2b.dM=1h;O&&O()}}.1E(13)}13.2b.1X=N.2s("1X")}13.2b&&13.2b.8Q&&O&&(13.7W=O.2F(2K))},k9:17(){13.7Z();13.7Q();13.2n=1l;1a 13},dL:17(){1b M=13.2b;1a(M.9p)?(M.9p>0):(M.8L)?("8Q"==M.8L):M.1f>0},1F:17(){1a 13.1A||(13.1A={1f:13.2b.9p||13.2b.1f,1g:13.2b.fe||13.2b.1g})}})})(z);(17(K){if(!K){5N"6L 6M 6N"}if(K.5H){1a}1b J=K.$;K.5H=1t K.3J({3H:17(M,L){1b N;13.el=K.$(M);13.1w=K.26(13.1w,L);13.5B=1l;13.7J=13.aL;N=K.5H.8y[13.1w.1Z]||13.1w.1Z;if("17"===K.1O(N)){13.7J=N}1k{13.5A=13.8C(N)||13.8C("6f")}if("1N"==K.1O(13.1w.7B)){13.1w.7B="kb"===13.1w.7B?65:5K(13.1w.7B)||1}},1w:{dJ:60,5p:9z,1Z:"6f",7B:1,4P:"kc",dH:K.$F,7f:K.$F,c6:K.$F,cy:K.$F,9U:1l,jZ:1l},4u:1h,5A:1h,7J:1h,jY:17(L){13.1w.1Z=L;L=K.5H.8y[13.1w.1Z]||13.1w.1Z;if("17"===K.1O(L)){13.7J=L}1k{13.7J=13.aL;13.5A=13.8C(L)||13.8C("6f")}},4D:17(N){1b L=/\\%$/,M;13.4u=N||{};13.ay=0;13.2p=0;13.jL=0;13.9G={};13.7v="7v"===13.1w.4P||"7v-4E"===13.1w.4P;13.7w="7w"===13.1w.4P||"7w-4E"===13.1w.4P;1U(M in 13.4u){L.3j(13.4u[M][0])&&(13.9G[M]=1r);if("4E"===13.1w.4P||"7v-4E"===13.1w.4P||"7w-4E"===13.1w.4P){13.4u[M].4E()}}13.aY=K.6m();13.ec=13.aY+13.1w.5p;13.1w.dH.2c();if(0===13.1w.5p){13.6G(1);13.1w.7f.2c()}1k{13.9O=13.dK.1E(13);if(!13.1w.9U&&K.1e.2J.51){13.5B=K.1e.51.2c(1j,13.9O)}1k{13.5B=13.9O.dI(1p.5w(aK/13.1w.dJ))}}1a 13},aU:17(){if(13.5B){if(!13.1w.9U&&K.1e.2J.51&&K.1e.9w){K.1e.9w.2c(1j,13.5B)}1k{f3(13.5B)}13.5B=1l}},2g:17(L){L=K.3t(L)?L:1l;13.aU();if(L){13.6G(1);13.1w.7f.2F(10)}1a 13},aw:17(N,M,L){N=2u(N);M=2u(M);1a(M-N)*L+N},dK:17(){1b M=K.6m(),L=(M-13.aY)/13.1w.5p,N=1p.5P(L);if(M>=13.ec&&N>=13.1w.7B){13.aU();13.6G(1);13.1w.7f.2F(10);1a 13}if(13.7v&&13.ay<N){1U(1b O in 13.4u){13.4u[O].4E()}}13.ay=N;if(!13.1w.9U&&K.1e.2J.51){13.5B=K.1e.51.2c(1j,13.9O)}13.6G((13.7w?N:0)+13.7J(L%1))},6G:17(L){1b M={},O=L;1U(1b N in 13.4u){if("2r"===N){M[N]=1p.5w(13.aw(13.4u[N][0],13.4u[N][1],L)*2K)/2K}1k{M[N]=13.aw(13.4u[N][0],13.4u[N][1],L);13.9G[N]&&(M[N]+="%")}}13.1w.c6(M,13.el);13.7j(M);13.1w.cy(M,13.el)},7j:17(L){1a 13.el.1y(L)},8C:17(L){1b M,N=1h;if("1N"!==K.1O(L)){1a 1h}4G(L){1C"9g":N=J([0,0,1,1]);1H;1C"6f":N=J([0.25,0.1,0.25,1]);1H;1C"6f-in":N=J([0.42,0,1,1]);1H;1C"6f-cn":N=J([0,0,0.58,1]);1H;1C"6f-in-cn":N=J([0.42,0,0.58,1]);1H;1C"cE":N=J([0.47,0,0.jT,0.jU]);1H;1C"cv":N=J([0.39,0.jX,0.jO,1]);1H;1C"jH":N=J([0.jJ,0.aJ,0.55,0.95]);1H;1C"co":N=J([0.55,0.jK,0.68,0.53]);1H;1C"ck":N=J([0.25,0.46,0.45,0.94]);1H;1C"kf":N=J([0.k2,0.cs,0.k1,0.k0]);1H;1C"ed":N=J([0.55,0.k4,0.k7,0.19]);1H;1C"ct":N=J([0.k6,0.61,0.cw,1]);1H;1C"jE":N=J([0.je,0.b9,0.cw,1]);1H;1C"jd":N=J([0.eZ,0.cs,0.eS,0.22]);1H;1C"ji":N=J([0.cB,0.84,0.44,1]);1H;1C"j9":N=J([0.77,0,0.9n,1]);1H;1C"jy":N=J([0.jx,0.aJ,0.jw,0.jz]);1H;1C"jv":N=J([0.23,1,0.32,1]);1H;1C"jo":N=J([0.86,0,0.jq,1]);1H;1C"cm":N=J([0.95,0.aJ,0.js,0.kh]);1H;1C"cu":N=J([0.19,1,0.22,1]);1H;1C"kW":N=J([1,0,0,1]);1H;1C"kY":N=J([0.6,0.kZ,0.98,0.kP]);1H;1C"kR":N=J([0.la,0.82,0.cB,1]);1H;1C"ks":N=J([0.kN,0.kv,0.15,0.86]);1H;1C"cz":N=J([0.6,-0.28,0.eU,0.b9]);1H;1C"cD":N=J([0.9n,0.c3,0.32,1.kn]);1H;1C"kx":N=J([0.68,-0.55,0.kI,1.55]);1H;1Q:L=L.4h(/\\s/g,"");if(L.3z(/^5S-5M\\((?:-?[0-9\\.]{0,}[0-9]{1,},){3}(?:-?[0-9\\.]{0,}[0-9]{1,})\\)$/)){N=L.4h(/^5S-5M\\s*\\(|\\)$/g,"").8O(",");1U(M=N.1I-1;M>=0;M--){N[M]=2u(N[M])}}}1a J(N)},aL:17(X){1b L=0,W=0,T=0,Y=0,V=0,R=0,S=13.1w.5p;17 Q(Z){1a((L*Z+W)*Z+T)*Z}17 P(Z){1a((Y*Z+V)*Z+R)*Z}17 N(Z){1a(3*L*Z+2*W)*Z+T}17 U(Z){1a 1/(7b*Z)}17 M(Z,aa){1a P(O(Z,aa))}17 O(ag,ah){1b af,ae,ad,aa,Z,ac;17 ab(ai){if(ai>=0){1a ai}1k{1a 0-ai}}1U(ad=ag,ac=0;ac<8;ac++){aa=Q(ad)-ag;if(ab(aa)<ah){1a ad}Z=N(ad);if(ab(Z)<0.bd){1H}ad=ad-aa/Z}af=0;ae=1;ad=ag;if(ad<af){1a af}if(ad>ae){1a ae}5z(af<ae){aa=Q(ad);if(ab(aa-ag)<ah){1a ad}if(ag>aa){af=ad}1k{ae=ad}ad=(ae-af)*0.5+af}1a ad}T=3*13.5A[0];W=3*(13.5A[2]-13.5A[0])-T;L=1-T-W;R=3*13.5A[1];V=3*(13.5A[3]-13.5A[1])-R;Y=1-R-V;1a M(X,U(S))}});K.5H.8y={9g:"9g",kC:"cE",kt:"cv",kJ:"cm",kl:"cu",kp:"co",l6:"ck",lb:"ed",l0:"ct",jp:"cz",jR:"cD",cp:17(M,L){L=L||[];1a 1p.4A(2,10*--M)*1p.ft(20*M*1p.fv*(L[0]||1)/3)},jI:17(M,L){1a 1-K.5H.8y.cp(1-M,L)},cq:17(N){1U(1b M=0,L=1;1;M+=L,L/=2){if(N>=(7-4*M)/11){1a L*L-1p.4A((11-6*M-11*N)/4,2)}}},ke:17(L){1a 1-K.5H.8y.cq(1-L)},2Z:17(L){1a 0}}})(z);(17(K){if(!K){5N"6L 6M 6N"}if(K.9f){1a}1b J=K.$;K.9f=1t K.3J(K.5H,{3H:17(L,M){13.bn=L;13.1w=K.26(13.1w,M);13.5B=1l;13.$3P.3H()},4D:17(P){1b L=/\\%$/,O,N,M=P.1I;13.b2=P;13.9X=1t 6a(M);1U(N=0;N<M;N++){13.9X[N]={};1U(O in P[N]){L.3j(P[N][O][0])&&(13.9X[N][O]=1r);if("4E"===13.1w.4P||"7v-4E"===13.1w.4P||"7w-4E"===13.1w.4P){13.b2[N][O].4E()}}}13.$3P.4D({});1a 13},6G:17(L){1U(1b M=0;M<13.bn.1I;M++){13.el=K.$(13.bn[M]);13.4u=13.b2[M];13.9G=13.9X[M];13.$3P.6G(L)}}})})(z);(17(K){if(!K){5N"6L 6M 6N";1a}if(K.ba){1a}1b J=K.$;K.ba=17(M,N){1b L=13.7m=K.$1t("2X",1h,{2h:"5y","z-8F":cF}).1B("kq");K.$(M).1D("7H",17(){L.2a(1n.3A)});K.$(M).1D("8J",17(){L.2U()});K.$(M).1D("6S",17(S){1b U=20,R=K.$(S).5u(),Q=L.1F(),P=K.$(1j).1F(),T=K.$(1j).7n();17 O(X,V,W){1a(W<(X-V)/2)?W:((W>(X+V)/2)?(W-V):(X-V)/2)}L.1y({1M:T.x+O(P.1f,Q.1f+2*U,R.x-T.x)+U,1G:T.y+O(P.1g,Q.1g+2*U,R.y-T.y)+U})});13.9D(N)};K.ba.2A.9D=17(L){13.7m.4r&&13.7m.bE(13.7m.4r);13.7m.3c(1n.9h(L))}})(z);(17(K){if(!K){5N"6L 6M 6N";1a}if(K.kH){1a}1b J=K.$;K.9x=17(O,N,M,L){13.9v=1h;13.5b=K.$1t("cj",1h,{2h:"5y","z-8F":cF,4w:"3w",2r:0.8}).1B(L||"").2a(M||1n.3A);13.cA(O);13.5v(N)};K.9x.2A.5v=17(L){13.5b.5v();13.9v=13.4m.1E(13).2F(K.br(L,kF))};K.9x.2A.4m=17(L){3R(13.9v);13.9v=1h;if(13.5b&&!13.bG){13.bG=1t z.5H(13.5b,{5p:K.br(L,be),7f:17(){13.5b.5k();52 13.5b;13.bG=1h}.1E(13)}).4D({2r:[13.5b.3q("2r"),0]})}};K.9x.2A.cA=17(L){13.5b.4r&&13.7m.bE(13.5b.4r);13.5b.3c(1n.9h(L))}})(z);(17(K){if(!K){5N"6L 6M 6N"}if(K.7L){1a}1b N=K.$,J=1h,R={"3h":1,43:2,6b:3,"17":4,1N:2K},L={"3h":17(U,T,S){if("3h"!=K.1O(T)){if(S||"1N"!=K.1O(T)){1a 1l}1k{if(!/^(1r|1l)$/.3j(T)){1a 1l}1k{T=T.cC()}}}if(U.3W("2C")&&!N(U["2C"]).5R(T)){1a 1l}J=T;1a 1r},1N:17(U,T,S){if("1N"!==K.1O(T)){1a 1l}1k{if(U.3W("2C")&&!N(U["2C"]).5R(T)){1a 1l}1k{J=""+T;1a 1r}}},6b:17(V,U,T){1b S=1l,X=/%$/,W=(K.1O(U)=="1N"&&X.3j(U));if(T&&!"6b"==8v U){1a 1l}U=2u(U);if(9I(U)){1a 1l}if(9I(V.7i)){V.7i=cG.gE}if(9I(V.bK)){V.bK=cG.gG}if(V.3W("2C")&&!N(V["2C"]).5R(U)){1a 1l}if(V.7i>U||U>V.bK){1a 1l}J=W?(U+"%"):U;1a 1r},43:17(V,T,S){if("1N"===K.1O(T)){3i{T=1j.gK.gy(T)}3F(U){1a 1l}}if(K.1O(T)==="43"){J=T;1a 1r}1k{1a 1l}},"17":17(U,T,S){if(K.1O(T)==="17"){J=T;1a 1r}1k{1a 1l}}},M=17(X,W,T){1b V;V=X.3W("3f")?X.3f:[X];if("43"!=K.1O(V)){1a 1l}1U(1b U=0,S=V.1I-1;U<=S;U++){if(L[V[U].1u](V[U],W,T)){1a 1r}}1a 1l},P=17(X){1b V,U,W,S,T;if(X.3W("3f")){S=X.3f.1I;1U(V=0;V<S;V++){1U(U=V+1;U<S;U++){if(R[X.3f[V]["1u"]\]>R[X.3f[U].1u]){T=X.3f[V];X.3f[V]=X.3f[U];X.3f[U]=T}}}}1a X},Q=17(V){1b U;U=V.3W("3f")?V.3f:[V];if("43"!=K.1O(U)){1a 1l}1U(1b T=U.1I-1;T>=0;T--){if(!U[T].1u||!R.3W(U[T].1u)){1a 1l}if(K.3t(U[T]["2C"])){if("43"!==K.1O(U[T]["2C"])){1a 1l}1U(1b S=U[T]["2C"].1I-1;S>=0;S--){if(!L[U[T].1u]({1u:U[T].1u},U[T]["2C"][S],1r)){1a 1l}}}}if(V.3W("1Q")&&!M(V,V["1Q"],1r)){1a 1l}1a 1r},O=17(S){13.4L={};13.1w={};13.cH(S)};K.26(O.2A,{cH:17(U){1b T,S,V;1U(T in U){if(!U.3W(T)){8B}S=(T+"").4Y().5C();if(!13.4L.3W(S)){13.4L[S]=P(U[T]);if(!Q(13.4L[S])){5N"gV hc ge fQ \'"+T+"\' fO in "+U}13.1w[S]=2E}}},7j:17(T,S){T=(T+"").4Y().5C();if(K.1O(S)=="1N"){S=S.4Y()}if(13.4L.3W(T)){J=S;if(M(13.4L[T],S)){13.1w[T]=J}J=1h}},eG:17(S){S=(S+"").4Y().5C();if(13.4L.3W(S)){1a K.3t(13.1w[S])?13.1w[S]:13.4L[S]["1Q"]}},8j:17(T){1U(1b S in T){13.7j(S,T[S])}},eN:17(){1b T=K.26({},13.1w);1U(1b S in T){if(2E===T[S]&&2E!==13.4L[S]["1Q"]){T[S]=13.4L[S]["1Q"]}}1a T},9s:17(S){N(S.8O(";")).3b(N(17(T){T=T.8O(":");13.7j(T.6I().4Y(),T.7k(":"))}).1E(13))},9T:17(S){S=(S+"").4Y().5C();1a 13.4L.3W(S)},fN:17(S){S=(S+"").4Y().5C();1a 13.9T(S)&&K.3t(13.1w[S])},2U:17(S){S=(S+"").4Y().5C();if(13.9T(S)){52 13.1w[S];52 13.4L[S]}}});K.7L=O}(z));(17(N){if(!N){5N"6L 6M 6N";1a}1b M=N.$;if(N.9Z){1a}1b L="bv://bs.bx.by/hZ/7P",K="bv://bs.bx.by/hG/hM";1b J=17(O){13.6K={};13.7E=M(O);13.5q=M(1n.9N(L,"7P"));13.5q.3E("1f",13.7E.9p||13.7E.1f);13.5q.3E("1g",13.7E.fe||13.7E.1g);13.1i=M(1n.9N(L,"1i"));13.1i.hF(K,"6Z",13.7E.2s("1X"));13.1i.3E("1f","2K%");13.1i.3E("1g","2K%");13.1i.2a(13.5q)};J.2A.75=17(){1a 13.5q};J.2A.59=17(O){if(1p.5w(O)<1){1a}if(!13.6K.59){13.6K.59=M(1n.9N(L,"33"));13.6K.59.3E("id","fB");13.6K.59.b3(M(1n.9N(L,"hI")).8p({"in":"hJ",fx:O}));13.6K.59.2a(13.5q);13.1i.3E("33","24(#fB)")}1k{13.6K.59.4r.3E("fx",O)}1a 13};N.9Z=J}(z));1b s=(17(L){1b K=L.$;1b J=17(N,M){13.3k={8E:"3g",3C:"7S",2h:"2M",1A:{g4:"2v",1f:"2B",1g:"2B"},gb:["1g","1f"]};13.3P=N;13.4N=1h;13.71=1h;13.2Q=1h;13.2R={};13.fu=[];13.6k=1h;13.bL=1h;13.5U=1h;13.3k=L.26(13.3k,M);13.3l=13.3k.8E+"-bO";13.8A=13.3k.8E+"-6V";13.fs()};J.2A={fs:17(){13.4N=L.$1t("2X").1B(13.3l).1B(13.3l+"-"+13.3k.3C).1y({4w:"3w"});13.71=L.$1t("2X").1B(13.3l+"-71").2a(13.4N);13.4N.2a(13.3P);K(["4y","4B"]).3b(17(M){13.2R[M]=L.$1t("2q").1B(13.3l+"-2q").1B(13.3l+"-2q-"+M).2a(13.4N).1D("1S 21",(17(O,N){K(O).5j[0].2g().4j();K(O).5g();13.6l(N)}).2L(13,M))}.1E(13));13.2R.4y.1B(13.3l+"-2q-4S");13.2Q=L.$1t("h8").1D("1S 21",17(M){M.2g()})},f1:17(N){1b M=L.$1t("h6").1B(13.8A).3c(N).2a(13.2Q);1t L.aG(N,{7q:13.9A.1E(13)});13.fu.3e(M);1a M},fd:17(N){1b M=13.6k||13.2Q.9V(13.8A+"-6W")[0];if(M){K(M).1T(13.8A+"-6W")}13.6k=K(N);if(!13.6k){1a}13.6k.1B(13.8A+"-6W");13.6l(13.6k)},bN:17(){if(13.71!==13.2Q.4M){K(13.2Q).2a(13.71);13.fA();K(1j).1D("73",13.5U=13.9A.1E(13));13.bN.1E(13).2F(1);1a}1b M=13.3P.1F();if(M.1g>0&&M.1g>M.1f){13.8H("4U")}1k{13.8H("7S")}13.9A();13.4N.1y({4w:""})},2g:17(){if(13.5U){K(1j).1P("73",13.5U)}13.4N.5k()},6l:17(Z,P){1b R={x:0,y:0},ac="4U"==13.3k.3C?"1G":"1M",U="4U"==13.3k.3C?"1g":"1f",Q="4U"==13.3k.3C?"y":"x",Y=13.2Q.4M.1F()[U],V=13.2Q.4M.8x(),O=13.2Q.1F()[U],X,M,ab,S,N,W,T,aa=[];if(13.bL){13.bL.2g()}1k{13.2Q.1y("1Z",L.1e.7g+5Z.7h(32)+"as")}if(2E===P){P=9z}X=13.2Q.8x();if("1N"==L.1O(Z)){R[Q]=("4B"==Z)?1p.1W(X[ac]-V[ac]-Y,Y-O):1p.2f(X[ac]-V[ac]+Y,0)}1k{if("6c"==L.1O(Z)){M=Z.1F();ab=Z.8x();R[Q]=1p.2f(0,1p.1W(Y-O,X[ac]+Y/2-ab[ac]-M[U]/2))}1k{1a}}if(L.1e.6D&&"6R"==L.1e.57||L.1e.2D&&L.1e.2D<10){if("1N"==L.1O(Z)&&R[Q]==X[ac]-V[ac]){X[ac]+=0===X[ac]-V[ac]?30:-30}R["8a-"+ac]=[((O<=Y)?0:(X[ac]-V[ac])),R[Q]];52 R.x;52 R.y;if(!13.bI){13.bI=1t L.9f([13.2Q],{5p:be})}aa.3e(R);13.bI.4D(aa);T=R["8a-"+ac][1]}1k{13.2Q.1y({1Z:L.1e.7g+5Z.7h(32)+P+"6e 6f",2l:"4n("+R.x+"2v, "+R.y+"2v, 0)"});T=R[Q]}if(T>=0){13.2R.4y.1B(13.3l+"-2q-4S")}1k{13.2R.4y.1T(13.3l+"-2q-4S")}if(T<=Y-O){13.2R.4B.1B(13.3l+"-2q-4S")}1k{13.2R.4B.1T(13.3l+"-2q-4S")}T=1h},fA:17(){1b O,N,P,W,V,Y,Q,U,T,X,ad,aa,ab,Z={x:0,y:0},M,S,R=bH,ac=17(ag){1b af,ae=0;1U(af=1.5;af<=90;af+=1.5){ae+=(ag*1p.ft(af/1p.fv/2))}(W<0)&&(ae*=(-1));1a ae};V=K(17(ae){Z={x:0,y:0};M="4U"==13.3k.3C?"1G":"1M";S="4U"==13.3k.3C?"1g":"1f";O="4U"==13.3k.3C?"y":"x";aa=13.2Q.4M.1F()[S];ad=13.2Q.1F()[S];P=aa-ad;if(P>=0){1a}if(ae.2p=="3N"){if(2E===ab){ab=0}13.2Q.3Q("1Z",L.1e.7g+5Z.7h(32)+"f9");Y=ae[O];T=ae.y;U=ae.x;X=1l}1k{if("9y"==ae.2p){if(X){1a}Q=ac(1p.3B(W));ab+=Q;(ab<=P)&&(ab=P);(ab>=0)&&(ab=0);Z[O]=ab;13.2Q.3Q("1Z",L.1e.7g+5Z.7h(32)+R+"6e  5S-5M(.0, .0, .0, 1)");13.2Q.3Q("2l","4n("+Z.x+"2v, "+Z.y+"2v, 6y)");W=0}1k{if(X){1a}if("7S"==13.3k.3C&&1p.3B(ae.x-U)>1p.3B(ae.y-T)||"4U"==13.3k.3C&&1p.3B(ae.x-U)<1p.3B(ae.y-T)){ae.2g();W=ae[O]-Y;ab+=W;Z[O]=ab;13.2Q.3Q("2l","4n("+Z.x+"2v, "+Z.y+"2v, 6y)");if(ab>=0){13.2R.4y.1B(13.3l+"-2q-4S")}1k{13.2R.4y.1T(13.3l+"-2q-4S")}if(ab<=P){13.2R.4B.1B(13.3l+"-2q-4S")}1k{13.2R.4B.1T(13.3l+"-2q-4S")}}1k{X=1r}}Y=ae[O]}}).1E(13);13.2Q.1D("2t",V)},9A:17(){1b P,O,M,N=13.3P.1F();if(N.1g>0&&N.1g>N.1f){13.8H("4U")}1k{13.8H("7S")}P="4U"==13.3k.3C?"1g":"1f";O=13.2Q.1F()[P];M=13.4N.1F()[P];if(O<=M){13.4N.1B("6O-2R");13.2Q.3Q("1Z","").1F();13.2Q.3Q("2l","4n(0,0,0)");13.2R.4y.1B(13.3l+"-2q-4S");13.2R.4B.1T(13.3l+"-2q-4S")}1k{13.4N.1T("6O-2R")}if(13.6k){13.6l(13.6k,0)}},8H:17(M){if("4U"!==M&&"7S"!==M||M==13.3k.3C){1a}13.4N.1T(13.3l+"-"+13.3k.3C);13.3k.3C=M;13.4N.1B(13.3l+"-"+13.3k.3C);13.2Q.3Q("1Z","2Z").1F();13.2Q.3Q("2l","").3Q("8a","")}};1a J})(z);1b i=A.$;if(8v 6Y.ax!=="17"){6Y.ax=17(M){if(M==1h){5N 1t jr("ki jm 2E jA 1h 6z 8l")}M=6Y(M);1U(1b J=1;J<29.1I;J++){1b L=29[J];if(L!=1h){1U(1b K in L){if(6Y.2A.3W.2c(L,K)){M[K]=L[K]}}}}1a M}}if(!A.1e.an){A.1e.an=A.a9("2l").ar()}1b p={4o:{1u:"1N","2C":["2O","7I"],"1Q":"7I"},49:{3f:[{1u:"1N","2C":["1m","2z","4p","3V"],"1Q":"1m"},{1u:"3h","2C":[1l]}],"1Q":"1m"},eg:{3f:[{1u:"1N","2C":["2B"]},{1u:"6b",7i:1}],"1Q":"2B"},en:{3f:[{1u:"1N","2C":["2B"]},{1u:"6b",7i:1}],"1Q":"2B"},aS:{1u:"1N","1Q":"2N"},jl:{1u:"6b",7i:0,"1Q":15},7T:{3f:[{1u:"1N","2C":["2M","1G","3V"],"1Q":"3V"},{1u:"3h","2C":[1l]}],"1Q":"3V"},2m:{3f:[{1u:"1N","2C":["1j","eo","3V"]},{1u:"3h","2C":[1l]}],"1Q":"1j"},4H:{3f:[{1u:"1N","2C":["1m","2z","3V"],"1Q":"1m"},{1u:"3h","2C":[1l]}],"1Q":"1m"},3G:{1u:"1N","2C":["2O","2Y"],"1Q":"2O"},41:{1u:"3h","1Q":1r},eW:{1u:"3h","1Q":1r},3n:{3f:[{1u:"1N","2C":["aQ","2Y","3V"]},{1u:"3h","2C":[1l]}],"1Q":"aQ"},eX:{1u:"3h","1Q":1r},fb:{1u:"3h","1Q":1r},fl:{1u:"3h","1Q":1l},97:{1u:"3h","1Q":1l},bC:{1u:"3h","1Q":1r},eI:{1u:"3h","1Q":1l},fr:{1u:"3h","1Q":1r},bz:{1u:"1N","2C":["2O","7I"],"1Q":"2O"},5I:{1u:"1N"},a7:{1u:"3h","1Q":1l},ci:{1u:"1N","1Q":"j8 6z 1m"},a6:{1u:"1N","1Q":"fz 6z 1m"},9i:{1u:"1N","1Q":"fz 6z 2m"},j2:{1u:"1N","1Q":"jN"},jQ:{1u:"1N","1Q":"jS"},gt:{1u:"1N","1Q":"l1"}};1b m={49:{3f:[{1u:"1N","2C":["1m","2z","3V"],"1Q":"1m"},{1u:"3h","2C":[1l]}],"1Q":"1m"},3G:{1u:"1N","2C":["2O","2Y"],"1Q":"2O"},9i:{1u:"1N","1Q":"kr 6z 2m"},ci:{1u:"1N","1Q":"kk 6z 1m"},a6:{1u:"1N","1Q":"ky 21 6z 1m"}};1b o="9Q";1b E="1q";1b b=20;1b B=["bX","et","fk","f7","fh","eQ"];1b D=9z;1b v;1b q={};1b G=i([]);1b I;1b f=1j.kE||1;1b H;1b y=1r;1b g=A.1e.2J.9b?"4n(":"9E(";1b C=A.1e.2J.9b?",0)":")";1b n=1h;1b r=(17(){1b K,N,M,L,J;1a J})();1b t=17(){1a"kL$kK"+"p".7p()+" l3$"+"fy.2.4".4h("v","")+" jt$"+"c".7p()+((1j.aA$aW&&A.1O(1j.aA$aW)==="1N")?" jg$"+1j.aA$aW.5o():"")};17 x(L){1b K,J;K="";1U(J=0;J<L.1I;J++){K+=5Z.7h(14^L.fq(J))}1a K}17 j(L){1b K=[],J=1h;(L&&(J=i(L)))&&(K=G.33(17(M){1a M.3S===J}));1a K.1I?K[0]:1h}17 a(L){1b K=i(1j).1F();1b J=i(1j).7n();L=L||0;1a{1M:L,2N:K.1f-L,1G:L,2M:K.1g-L,x:J.x,y:J.y}}17 c(J){1a(J.2k&&(J.2k==="3x"||J.2k===J.5i))||(/3x/i).3j(J.1u)}17 h(J){1a J.2k?((J.2k==="3x"||J.5i===J.2k)&&J.9u):J.2I.1I===1&&(J.6d.1I?J.6d[0].3K===J.2I[0].3K:1r)}17 e(J){1a 6Y.ax({},J,{1u:J.1u,4V:J.4V,4O:J.4O,eF:J.eF,eD:J.eD,2H:J.2H,2G:J.2G})}17 u(){1b L=A.$A(29);1b K=L.6I();1b J=q[K];if(J){1U(1b M=0;M<J.1I;M++){J[M].66(1h,L)}}}17 F(){1b N=29[0],J,M,K=[];3i{do{M=N.au;if(/^[A-b0-z]*$/.3j(M)){if(J=N.2s("id")){if(/^[A-b0-z][-A-b0-jW-jV]*/.3j(J)){M+="#"+J}}K.3e(M)}N=N.4M}5z(N&&N!==1n.5a);K=K.4E();A.6P(K.7k(" ")+"> .1q-5E > 2b",{1f:"2K% !2i;",1Z:"2Z",2l:"2Z"},"1q-c5-6C",1r)}3F(L){}}17 w(){1b K=1h,L=1h,J=17(){1j.jP(1n.3A.8z,1n.3A.8t);1j.aZ(1t 1v("73"))};L=eC(17(){1b O=1j.3C===90||1j.3C===-90;1b N=1j.5d;1b M=(O?ez.jG:ez.jM)*0.85;if((K===1h||K===1l)&&((O&&N<M)||(!O&&N<M))){K=1r;J()}1k{if((K===1h||K===1r)&&((O&&N>M)||(!O&&N>M))){K=1l;J()}}},ka);1a L}17 d(){A.6P(".3g-3w-71, .3g-aP-2b",{63:"eB !2i","2f-1g":"0 !2i","2f-1f":"0 !2i","1W-1g":"2Z !2i","1W-1f":"2Z !2i",1f:"eA !2i",1g:"eA !2i",2h:"5y !2i",1G:"-aI !2i",1M:"0 !2i",7a:"3w !2i","-3O-2l":"2Z !2i",2l:"2Z !2i","-3O-1Z":"2Z !2i",1Z:"2Z !2i"},"aq-ao-6C");A.6P(".3g-aP-2b 2b",{63:"bY-eB !2i",3L:"0 !2i",7e:"0 !2i","2f-1g":"0 !2i","2f-1f":"0 !2i","1W-1g":"2Z !2i","1W-1f":"2Z !2i","-3O-2l":"2Z !2i",2l:"2Z !2i","-3O-1Z":"2Z !2i",1Z:"2Z !2i"},"aq-ao-6C");if(A.1e.83){A.6P(".34-3g .1q-2m .1q-2m-bg",{63:"2Z !2i"},"aq-ao-6C")}if(A.1e.83&&(A.1e.4l!=="5O"||A.1e.76===44)){A.6P(".34-3g .1q-1m-1j.1q-2z, .34-3g .1q-1m-1j.1q-2z:kg",{"3L-k8":"0 !2i"},"aq-ao-6C")}}1b l=17(M,N,K,L,J){13.1K={1X:1h,24:1h,69:1,1d:1h,2p:0,1A:{1f:0,1g:0},2j:1l};13.1m={1X:1h,24:1h,69:1,1d:1h,2p:0,1A:{1f:0,1g:0},2j:1l};if(A.1O(M)==="8l"){13.1K=M}1k{if(A.1O(M)==="1N"){13.1K.24=A.64(M)}}if(A.1O(N)==="8l"){13.1m=N}1k{if(A.1O(N)==="1N"){13.1m.24=A.64(N)}}13.3u=K;13.1w=L;13.4k=J;13.7x=1h;13.3M=1h;13.1d=1h};l.2A={9M:17(L,K,J){1b M=L.81("2b")[0];if(J){13.1K.1d=M||A.$1t("2b").2a(L)}if(f>1){13.1K.24=L.2s("3r-1i-2x");if(13.1K.24){13.1K.69=2}13.1m.24=L.2s("3r-1m-1i-2x");if(13.1m.24){13.1m.69=2}}13.1K.1X=L.2s("3r-1i")||L.2s("k5")||(M?M.8w||M.2s("1X"):1h);if(13.1K.1X){13.1K.1X=A.64(13.1K.1X)}13.1K.24=13.1K.24||13.1K.1X;if(13.1K.24){13.1K.24=A.64(13.1K.24)}13.1m.1X=L.2s("3r-1m-1i")||L.2s("6Z");if(13.1m.1X){13.1m.1X=A.64(13.1m.1X)}13.1m.24=13.1m.24||13.1m.1X;if(13.1m.24){13.1m.24=A.64(13.1m.24)}13.3u=L.2s("3r-3u")||L.2s("8f")||K;13.3M=L.2s("3r-3M");13.4k=L;1a 13},aD:17(J){1b K=1h;if(29.1I>1&&A.1O(29[1])==="17"){K=29[1]}if(13[J].2p!==0){if(13[J].2j){13.67(K)}1a}if(13[J].24&&13[J].1d&&!13[J].1d.2s("1X")&&!13[J].1d.2s("jF")){13[J].1d.3E("1X",13[J].24)}13[J].2p=1;1t A.aG(13[J].1d||13[J].24,{7q:i(17(L){13[J].2j=1r;13[J].2p=L.2n?2:-1;if(L.2n){13[J].1A=L.1F();if(!13[J].1d){13[J].1d=i(L.2b);13[J].1d.2s("2o");13[J].1d.5r("2o");13[J].1A.1f/=13[J].69;13[J].1A.1g/=13[J].69}1k{13[J].1d.1y({"1W-1f":13[J].1A.1f,"1W-1g":13[J].1A.1g});if(13[J].1d.8w&&13[J].1d.8w!==13[J].1d.1X){13[J].24=13[J].1d.8w}1k{if(A.64(13[J].1d.2s("1X")||"")!==13[J].24){13[J].1d.3E("1X",13[J].24)}}}}13.67(K)}).1E(13)})},9a:17(){13.aD("1K",29[0])},bR:17(){13.aD("1m",29[0])},5W:17(){13.7x=1h;if(29.1I>0&&A.1O(29[0])==="17"){13.7x=29[0]}13.9a();13.bR()},67:17(J){if(J){J.2c(1h,13)}if(13.7x&&13.1K.2j&&13.1m.2j){13.7x.2c(1h,13);13.7x=1h;1a}},2j:17(){1a(13.1K.2j&&13.1m.2j)},2n:17(){1a(13.1K.2p===2&&13.1m.2p===2)},7A:17(K){1b J=K==="1K"?"1m":"1K";if(!13[K].2j||(13[K].2j&&13[K].2p===2)){1a 13[K].24}1k{if(!13[J].2j||(13[J].2j&&13[J].2p===2)){1a 13[J].24}1k{1a 1h}}},75:17(K){1b J=K==="1K"?"1m":"1K";if(!13[K].2j||(13[K].2j&&13[K].2p===2)){1a 13[K].1d}1k{if(!13[J].2j||(13[J].2j&&13[J].2p===2)){1a 13[J].1d}1k{1a 1h}}},1F:17(K){1b J=K==="1K"?"1m":"1K";if(!13[K].2j||(13[K].2j&&13[K].2p===2)){1a 13[K].1A}1k{if(!13[J].2j||(13[J].2j&&13[J].2p===2)){1a 13[J].1A}1k{1a{1f:0,1g:0}}}},jc:17(K){1b J=K==="1K"?"1m":"1K";if(!13[K].2j||(13[K].2j&&13[K].2p===2)){1a 13[K].69}1k{if(!13[J].2j||(13[J].2j&&13[J].2p===2)){1a 13[J].69}1k{1a 1}}},74:17(J){13.1d=13.75(J)}};1b k=17(K,J){13.1w=1t A.7L(p);13.1o=i(17(){if(29.1I>1){1a 13.7j(29[0],29[1])}1k{1a 13.eG(29[0])}}).1E(13.1w);13.eH=1t A.7L(m);13.3I=[];13.1i=1h;13.79=1h;13.3S=i(K).1D("3N j5 2O",17(L){L.2g()});13.id=1h;13.1d=1h;13.8h=1h;13.6F=1h;13.9c=1h;13.6E=1h;13.7t={1f:0,1g:0};13.1A={1f:0,1g:0};13.1R={1f:0,1g:0};13.3p={1f:0,1g:0};13.1Y={1G:0,1M:0,2M:0,2N:0};13.2n=1l;13.1J=1l;13.5x=1h;13.aH=1h;13.5U=i(17(){if(13.1J){13.1i.1d.1y({"1W-1g":1p.2f(13.1i.1F("1m").1g,13.78())});13.1i.1d.1y({"1W-1f":1p.2f(13.1i.1F("1m").1f,13.7G())})}13.7R(29[0])}).1E(13);13.bp=i(17(L){3R(13.aH);13.aH=i(13.5U).2F(10,L.1u==="6l")}).2L(13);if(t){I.3c(A.$1t("2X",{},{63:"2Z",4w:"3w"}).3c(1n.9h(t)));t=2E}13.1s=1h;13.1c=1h;13.3n=1h;13.b1=1h;13.6n=0;13.8b=1r;13.6B=1h;13.5s=1h;13.6V=1h;13.3m=1h;13.3T=1h;13.41=1h;13.5n=1h;13.7U=1h;13.4T=1h;13.8i=1h;13.5l=1h;13.4i=1h;13.4Q=[];13.2R={};13.aO=0;13.c4=1h;13.4D(J)};k.2A={eO:17(J){13.1w.8j(1j[E+"7L"]||{});13.1w.9s(13.3S.2s("3r-1w")||"");if(!A.1e.aF){13.1o("a7",1l)}if(A.1e.34||13.1o("a7")){13.1w.8j(13.eH.eN());13.1w.8j(1j[E+"j7"]||{});13.1w.9s(13.3S.2s("3r-34-1w")||"")}if(A.1O(J)==="1N"){13.1w.9s(J||"")}1k{13.1w.8j(J||{})}if(13.1o("5I")){13.1o("5I",13.1o("5I").4h(","," "))}if(13.1o("7T")===1l){13.1o("7T","3V")}if(13.1o("3n")===1l){13.1o("3n","3V")}4G(13.1o("3n")){1C"3V":13.6n=0;1H;1C"2Y":13.6n=65;1H;1C"aQ":1Q:13.6n=2;1H}if(13.1o("49")==="3V"){13.1o("49",1l)}if(13.1o("2m")==="3V"){13.1o("2m",1l)}if(13.1o("4H")==="3V"){13.1o("4H",1l)}if(A.1e.34&&13.1o("49")==="1m"&&13.1o("aS")==="2w"){if(13.1o("2m")){13.1o("49",1l)}1k{13.1o("4o","2O")}}},4D:17(M){1b K;1b J=13;1b L;if(13.aO<1){13.eO(M);if(y&&!13.1o("bC")){1a}13.6F=13.3S.eM("2b");13.9c=13.6F?13.6F.2s("1X"):1h;13.6E=i(13.3S).2s("8f");i(13.3S).5r("8f")}L=1t l().9M(13.3S,13.6E,1r);if(!L.1K.24){if(++13.aO<=D){13.c4=4v(17(){J.4D()},2K)}1a}13.79=L;13.1i=13.79;F(13.3S);13.id=13.3S.2s("id")||"1q-"+1p.5P(1p.6p()*A.6m());13.3S.3E("id",13.id);13.1d=A.$1t("5E").1B("1q-5E");13.1d.eL(13.1i.1K.1d).1B(13.1o("5I"));if(13.1o("eI")!==1r){13.1d.1D("jC",17(O){O.2g();1a 1l})}13.1d.1B("1q-"+13.1o("4o")+"-1m");if(!13.1o("2m")){13.1d.1B("1q-6O-2m")}13.1s={1d:A.$1t("2X",{"3X":"1q-1s"},{1G:0}).2a(13.1d),1i:A.$1t("2b",{1X:"3r:1i/eK;ey,ex/ej="},{2h:"5y",1G:0,1M:0}),1f:0,1g:0,36:{x:0,y:0},5G:{x:0,y:0},1A:{1f:0,1g:0},3L:{x:0,y:0},dx:0,dy:0,5X:1l,4m:17(){if(A.1e.2J.2l){13.1d.1y({2l:"9E(-aI, -aI)"})}1k{13.1d.1y({1G:-eJ})}}};13.1s.4m();13.1s.1d.3c(13.1s.1i);13.1c={1d:A.$1t("2X",{"3X":"1q-1m-1j"},{1G:-ek}).1B(13.1o("5I")).2a(I),1i:A.$1t("2b",{1X:"3r:1i/eK;ey,ex/ej="},{2h:"5y"}),bV:0,1f:0,1g:0,5L:0,5d:0,1A:{1f:"2B",6U:"2v",1g:"2B",6T:"2v"},1V:13.1o("49"),2h:13.1o("aS"),7y:13.1o("4o"),4q:1l,2P:1l,3v:1l,4W:1l,6q:i(17(){13.1c.4W=29[0]!==1l;13.1d[13.1c.4W?"1T":"1B"]("1q-6O-1m")}).1E(13),4m:i(17(){1b O=i(13.1d).2e("cr");13.1c.1d.1P("2V");13.1c.1d.1y({1G:-ek}).2a(I);13.1c.1d.1T("1q-a4 1q-p-"+(13.1c.1V==="1m"?13.1c.2h:13.1c.1V));if(!13.1J&&O){O.2U()}13.1c.1i.2s("2o");13.1c.1i.5r("2o")}).1E(13),8U:i(17(O){13.1d[O===1l?"1B":"1T"]("1q-6O-1m");13.1d[O==="2z"?"1B":"1T"]("1q-2z-1m");13.1c.1d[O==="2z"?"1B":"1T"]("1q-2z");13.1c.1d[O==="4p"?"1B":"1T"]("1q-4p");if(O!=="1m"){13.1d.1T("1q-2w-1m");13.1c.1d.1T("1q-2w")}13.1c.1V=O;if(O===1l){13.1c.6q(1l)}}).1E(13)};13.1c.1d.3c(13.1c.1i);13.1c.8U(13.1o("49"));13.1c.1i.5r("1f");13.1c.1i.5r("1g");if(8v(r)!=="2E"){1b N=1p.5P(1p.6p()*A.6m());i(13.1d).3a("cr",A.$1t(((1p.5P(1p.6p()*bi)+1)%2)?"cj":"2X").8p({id:"8D"+N}).1y({63:"bY",7a:"3w",4w:"5J",ee:r[1],kV:r[2],em:r[3],kO:"kQ-l7",2h:"5y",1G:8,1M:8,8a:"2B",1f:"2B",kT:"2N",ei:"ku",eh:ef}).5t(x(r[0])));if(i(i(13.1d).2e("cr")).81("a")[0]){i(i(i(13.1d).2e("cr")).81("a")[0]).1D("21 1S",17(O){O.5g();1j.8I(13.6Z)}).8p({id:"c0"+N})}A.6P("#"+13.id+" > 5E.1q-5E > #"+("8D"+N)+",#"+13.id+" > 5E.1q-5E > #"+("8D"+N)+" > #"+("c0"+N)+",bh 3A .1q-2m > #"+("8D"+N)+",bh 3A .1q-2m > #"+("8D"+N)+" > #"+("c0"+N),{63:"bY !2i;",4w:"5J !2i;",ee:r[1]+" !2i;","kj-1A":r[2]+"2v !2i;","z-8F":"ef !2i;"},"1q-c5-6C",1r)}if((K=(""+13.1o("eg")).3z(/^([0-9]+)?(2v|%)?$/))){13.1c.1A.6U=K[2]||"2v";13.1c.1A.1f=(2u(K[1])||"2B")}if((K=(""+13.1o("en")).3z(/^([0-9]+)?(2v|%)?$/))){13.1c.1A.6T=K[2]||"2v";13.1c.1A.1g=(2u(K[1])||"2B")}if(13.1c.1V==="2z"){13.1d.1B("1q-2z-1m");13.1c.1d.1B("1q-2z");if(13.1c.1A.1f==="2B"){13.1c.1A.6U="%";13.1c.1A.1f=70}if(13.1c.1A.1g==="2B"){13.1c.1A.6T="%"}}1k{if(13.1o("1m-2h").3z(/^#/)){if(13.1c.4q=i(13.1o("1m-2h").4h(/^#/,""))){if(i(13.1c.4q).1F().1g>50){if(13.1c.1A.1f==="2B"){13.1c.1A.6U="%";13.1c.1A.1f=2K}if(13.1c.1A.1g==="2B"){13.1c.1A.6T="%";13.1c.1A.1g=2K}}}1k{13.1o("1m-2h","2N")}}if(13.1c.1V==="4p"){if(13.1c.1A.1f==="2B"){13.1c.1A.6U="2v"}if(13.1c.1A.1g==="2B"){13.1c.1A.6T="2v"}}if(13.1c.1V==="1m"){if(13.1c.1A.1f==="2B"||13.1o("1m-2h")==="2w"){13.1c.1A.6U="%";13.1c.1A.1f=2K}if(13.1c.1A.1g==="2B"||13.1o("1m-2h")==="2w"){13.1c.1A.6T="%";13.1c.1A.1g=2K}}if(13.1o("1m-2h")==="2w"){13.1d.1B("1q-2w-1m")}}13.1c.2h=13.1c.4q?"4q":13.1o("1m-2h");13.1s.3L.x=2u(13.1s.1d.3q("3L-1M-1f")||"0");13.1s.3L.y=2u(13.1s.1d.3q("3L-1G-1f")||"0");13.1i.9a(17(){if(13.1i.1K.2p!==2){1a}13.1i.74("1K");13.1A=13.1i.1d.1F();13.fp();13.2n=1r;if(13.1o("97")===1r){u("bX",13.id);if(A.1e.34){13.7R()}1k{13.6A()}}}.1E(13));if(13.1o("97")!==1r||13.1o("4o")==="2Y"){13.1i.5W(i(17(O){13.7c(O,1r)}).1E(13));13.5s=i(13.8K).1E(13).2F(8G)}13.ep()},2g:17(){3R(13.c4);13.fj();if(13.1c){13.1c.1d.5k()}if(13.4i){13.4i.2g();13.4i=1h}if(13.3m){13.3m.5k()}if(13.1J){i(A.1e.4e()).1y({7a:""})}i(13.3I).3b(17(J){i(J.4k).1T("1q-6V-6W").1T(13.1o("5I")||"1q-$kA-6C-3X-6z-2U$")},13);if(13.6F){13.3S.3c(13.6F);if(13.9c){13.6F.3E("1X",13.9c)}}if(13.6E){13.3S.3E("8f",13.6E)}if(13.1d){13.1d.5k()}},7c:17(K,L){1b J=13.1i;if(K.1m.2p!==2){13.1i=K;13.2n=1r;13.1c.6q(1l);1a}13.1i=K;13.1i.74(13.1J?"1m":"1K");13.1c.1i.1X=13.1i.7A("1m");13.1c.1d.1T("1q-4p");13.1c.1i.2s("2o");13.1c.1i.5r("2o");13.1c.1d.1F();4v(i(17(){1b N=13.1c.1i.1F(),M;13.3p=13.1i.1F("1m");if(N.1f*N.1g>1&&N.1f*N.1g<13.3p.1f*13.3p.1g){13.3p=N}13.1R=A.4b(13.3p);if(13.1c.1V==="4p"){13.1c.1d.1B("1q-4p")}13.fc();13.1s.1i.1X=13.1i.1d.8w||13.1i.1d.1X;13.1c.6q(13.1c.1V&&!(13.1J&&13.1c.1V==="4p"));13.2n=1r;13.5x=1h;13.5U();13.1d.1B("1q-2n");13.c9();if(J!==13.1i){u("et",13.id,J.4k,13.1i.4k);if(13.8Z){M=13.8Z;13.8Z=1h;13.3Z(M.1i,M.eP)}}1k{if(!!L){u("bX",13.id)}}if(13.5Y){13.1d.2W(13.5Y.1u,13.5Y)}1k{if(13.1J&&13.1o("3G")==="2Y"){13.4C()}1k{if(!!L){13.6A()}}}}).1E(13),kD)},ep:17(){1b K=13.id;1b J;1b L;L=1t er("1m\\\\-id(\\\\s+)?:(\\\\s+)?"+K+"($|;)");if(A.1e.2J.bu){J=A.$A(1n.bt(\'[3r-1m-id="\'+13.id+\'"]\'));J=i(J).5F(A.$A(1n.bt(\'[bP*="1m-id"]\')).33(17(M){1a L.3j(M.2s("bP")||"")}))}1k{J=A.$A(1n.9K("A")).33(17(M){1a K===M.2s("3r-1m-id")||L.3j(M.2s("bP")||"")})}i(J).3b(17(N){1b M,O;i(N).1D("2O",17(P){P.40()});M=1t l().9M(N,13.6E);if(13.1i.1m.1X.4I(M.1m.1X)&&13.1i.1K.1X.4I(M.1K.1X)){i(M.4k).1B("1q-6V-6W");M=13.1i;M.4k=N}if(!M.3M&&13.1i.3M){M.3M=13.1i.3M}O=i(17(){13.3Z(M)}).1E(13);i(N).1D("6X",17(P){if("es"in P){P.es()}},5);i(N).1D("21 "+(13.1o("bz")==="7I"?"7H 8J":"1S"),i(17(Q,P){if(13.6i){3R(13.6i)}13.6i=1l;if(Q.1u==="7H"){13.6i=i(O).2F(P)}1k{if(Q.1u==="21"||Q.1u==="1S"){O()}}}).2L(13,60)).1B(13.1o("5I")).1B("1q-6V");M.9a();if(13.1o("97")!==1r){M.bR()}13.3I.3e(M)},13)},3Z:17(J,K){if(!13.2n){13.8Z={1i:J,eP:K};1a}if(!J||J===13.1i){1a 1l}13.4a(1h,1r);13.2n=1l;13.1d.1T("1q-2n");13.5s=i(13.8K).1E(13).2F(8G);J.5W(i(17(R){1b L,S,Q,N,M,P,O=(A.1e.2D<10)?"1F":"7l";13.c9();R.74("1K");if(!R.1d){13.2n=1r;13.1d.1B("1q-2n");1a}13.a3(R);L=13.1i.1d[O]();if(13.1J){R.74("1m");Q=A.$1t("2X").1B("1q-2m-bg");if(A.1e.2J.8n||A.1e.2D<10){Q.3c(A.$1t("2b",{1X:R.7A("1m")}).1y({2r:0}))}1k{Q.3c(1t A.9Z(R.1d).59(b).75().1y({2r:0}))}i(Q).1y({"z-8F":-99}).2a(13.3m)}if(13.1J&&13.1c.1V==="1m"&&13.1o("3G")==="2Y"){i(R.1d).1y({2r:0}).2a(13.1d);S=L;M=[R.1d,13.1i.1d];P=[{2r:[0,1]},{2r:[1,0]}];i(R.1d).1y({"1W-1f":1p.2f(R.1F("1m").1f,13.7G()),"1W-1g":1p.2f(R.1F("1m").1g,13.78())})}1k{13.1d.1y({1g:13.1d[O]().1g});13.1i.1d.1y({2h:"5y",1G:0,1M:0,2M:0,2N:0,1f:"2K%",1g:"2K%","1W-1f":"","1W-1g":""});i(R.1d).1y({"1W-1f":1p.2f(R.1F(13.1J?"1m":"1K").1f,13.1J?13.7G():65),"1W-1g":1p.2f(R.1F(13.1J?"1m":"1K").1g,13.1J?13.78():65),2h:"kM",1G:0,1M:0,2r:0,2l:""}).2a(13.1d);S=i(R.1d)[O]();if(!K){i(R.1d).1y({"2f-1f":L.1f,1g:L.1g,"1W-1f":L.1f,"1W-1g":""})}13.1d.1y({1g:"",7a:""}).1F();i(R.1d).1F();M=[R.1d,13.1i.1d];P=[A.26({2r:[0,1]},K?{48:[0.6,1]}:{"2f-1f":[L.1f,S.1f],"1W-1f":[L.1f,S.1f],1g:[L.1g,S.1g]}),{2r:[1,0]}]}if(13.1J){if(13.3T.4r&&Q.4r){N=i(13.3T.4r).3q("2r");if(A.1e.6D){M=M.5F([Q.4r]);P=P.5F([{2r:[0.bU,N]}])}1k{M=M.5F([Q.4r,13.3T.4r]);P=P.5F([{2r:[0.bU,N]},{2r:[N,0.bU]}])}}}1t A.9f(M,{5p:(K||13.1o("fr"))?K?8G:l4:0,1Z:K?"5S-5M(0.9n, 0.c3, 0.fw, 1)":(L.1f===S.1f)?"9g":"5S-5M(0.25, .1, .1, 1)",7f:i(17(){13.1i.1d.2U().2s("2o");13.1i.1d.5r("2o");i(R.1d).1y(13.1J?{1f:"2B",1g:"2B"}:{1f:"",1g:""}).1y({"2f-1f":"","2f-1g":"",2r:"","1W-1f":1p.2f(R.1F(13.1J?"1m":"1K").1f,13.1J?13.7G():65),"1W-1g":1p.2f(R.1F(13.1J?"1m":"1K").1g,13.1J?13.78():65)});if(13.1J){13.3T.2U();13.3T=2E;13.3T=Q.3Q("z-8F",-2K);i(13.3T.4r).1y({2r:""});if(13.41){if(R.3u){if(R.3M){13.41.5t("").3c(A.$1t("a",{6Z:R.3M}).1D("21 1S",13.9C.1E(13)).5t(R.3u))}1k{13.41.5t(R.3u).1B("1q-5v")}}1k{13.41.1T("1q-5v")}}}13.7c(R)}).1E(13),c6:i(17(T,U){if(2E!==T.48){U.3Q("2l","48("+T.48+")")}})}).4D(P)}).1E(13))},a3:17(K){1b J=1l;i(13.3I).3b(17(L){i(L.4k).1T("1q-6V-6W");if(L===K){J=1r}});if(J&&K.4k){i(K.4k).1B("1q-6V-6W")}if(13.4i){13.4i.fd(K.f0)}},fc:17(J){if(13.1i.3u&&13.1o("7T")!=="3V"&&13.1c.1V!=="2z"){if(!13.1c.3u){13.1c.3u=A.$1t("2X",{"3X":"1q-3u"}).2a(13.1c.1d.1B("3u-"+13.1o("7T")))}13.1c.3u.5t(13.1i.3u)}},6A:17(J,M,K){1b L;if(!13.1J){if(13.6n<=0){1a}if(K!==1r){13.6n--}}if(M===2E||M===1h){if(!13.1c.2P&&!13.1c.3v){if(13.1o("49")&&(13.1c.4W||!13.1i.2j())&&!(A.1e.34&&13.1o("2m")&&13.1c.1V==="1m"&&13.1c.2h==="2w")){if(13.1c.7y==="7I"){M=13.1o("ci")}1k{if(13.1c.7y==="2O"){M=13.1o("a6")}}}1k{M=13.1o("2m")?13.1o("9i"):""}}1k{M=13.1o("2m")?13.1o("9i"):""}}if(!M){13.b7();1a}L=13.1d;if(!13.3n){13.3n=A.$1t("2X",{"3X":"1q-3n"});13.b1=A.$1t("cj",{"3X":"1q-3n-gC"}).3c(1n.9h(M)).2a(13.3n);i(13.3n).2a(13.1d)}1k{i(13.b1).5t(M)}13.3n.1y({"1Z-ca":""}).1T("1q-3n-3w");if(13.1J){L=13.4T}1k{if((13.1c.2P||13.1c.3v)&&13.1c.1V!=="2z"&&13.1c.2h==="2w"){L=13.1c.1d}}if(J===1r){4v(i(17(){13.3n.1B("1q-3n-3w")}).1E(13),16)}13.3n.2a(L)},b7:17(){if(13.3n){13.3n.1y({"1Z-ca":"f9"}).1B("1q-3n-3w")}},8K:17(){if(!13.6B){13.6B=A.$1t("2X",{"3X":"1q-gH"});13.1d.3c(13.6B);13.6B.1F()}13.6B.1B("fa")},c9:17(){3R(13.5s);13.5s=1h;if(13.6B){i(13.6B).1T("fa")}},7s:17(L,P){1b O=A.4b(13.1c.1A),N=(!13.1J&&13.1c.4q)?i(13.1c.4q).1F():{1f:0,1g:0},K,J,M=13.1A,Q={x:0,y:0};P=P||13.1c.2h;13.7t=13.1i.1d.1F();13.1A=13.1i.1d.1F();13.1Y=13.1i.1d.7l();if(!N.1g){N=13.1A}if(13.1o("fb")===1l||13.1c.1V===1l||13.1c.1V==="4p"){L=1l}if(13.1c.1V==="4p"){if(O.1f==="2B"){O.1f=13.3p.1f}if(O.1g==="2B"){O.1g=13.3p.1g}}if(13.1J&&13.1c.1V==="2z"){O.1f=70;O.1g="2B"}if(13.1c.1V==="2z"&&O.1g==="2B"){13.1c.1f=2u(O.1f/2K)*1p.2f(N.1f,N.1g);13.1c.1g=13.1c.1f}1k{if(13.1c.1V==="1m"&&P==="2w"){13.1A=13.1d.1F();N=13.1A;13.1Y=13.1d.7l();13.1c.1f=N.1f;13.1c.1g=N.1g}1k{13.1c.1f=(O.6U==="%")?2u(O.1f/2K)*N.1f:5K(O.1f);13.1c.1g=(O.6T==="%")?2u(O.1g/2K)*N.1g:5K(O.1g)}}if(13.1c.1V==="4p"){J=1p.2f(1p.2f(13.1c.1f/13.3p.1f,13.1c.1g/13.3p.1g),1);13.1c.1f=13.3p.1f*J;13.1c.1g=13.3p.1g*J}13.1c.1f=1p.4t(13.1c.1f);13.1c.1g=1p.4t(13.1c.1g);13.1c.bV=13.1c.1f/13.1c.1g;13.1c.1d.1y({1f:13.1c.1f,1g:13.1c.1g});if(L){N=13.1J?13.3m.1F():13.1c.1d.1F();if(!13.1J&&(13.7t.1f*13.7t.1g)/(13.3p.1f*13.3p.1g)>0.8){13.1R.1f=1.5*13.3p.1f;13.1R.1g=1.5*13.3p.1g}1k{13.1R=A.4b(13.3p)}}if(13.1c.1V!==1l&&!13.1c.2P&&!(13.1J&&13.1o("3G")==="2Y")){if((13.7t.1f*13.7t.1g)/(13.1R.1f*13.1R.1g)>0.8){13.1R=A.4b(13.3p);13.1c.6q(1l)}1k{13.1c.6q(1r)}}13.1c.1i.1y({1f:13.1R.1f,1g:13.1R.1g});13.1R.8N=13.1R.1f;13.1R.9B=13.1R.1g;K=13.1c.1d.8g();13.1c.5L=1p.4t(K.1f);13.1c.5d=1p.4t(K.1g);13.1s.1f=1p.4t(13.1c.5L/(13.1R.1f/13.1A.1f));13.1s.1g=1p.4t(13.1c.5d/(13.1R.1g/13.1A.1g));13.1s.1d.1y({1f:13.1s.1f,1g:13.1s.1g});13.1s.1i.1y(13.1A);A.26(13.1s,13.1s.1d.1F());if(13.1c.2P){3R(13.56);13.56=1h;if(13.1s.5X){13.1s.36.x*=(13.1A.1f/M.1f);13.1s.36.y*=(13.1A.1g/M.1g);Q.x=13.1s.5G.x;Q.y=13.1s.5G.y}1k{Q.x=13.1Y.1M+13.1s.1f/2+(13.1s.36.x*(13.1A.1f/M.1f));Q.y=13.1Y.1G+13.1s.1g/2+(13.1s.36.y*(13.1A.1g/M.1g))}13.7X(1h,Q)}},7R:17(N){1b Q;1b P;1b J;1b O;1b M;1b L;1b K=i(13.1d).2e("cr");J=a(5);M=13.1c.2h;O=13.1J?"2w":13.1c.4q?"4q":13.1o("1m-2h");L=13.1J&&13.1c.1V==="1m"?13.3m:1n.3A;if(13.1J){J.y=0;J.x=0}if(!N){13.7s(1r,O)}Q=13.1Y.1G;if(13.1c.1V!=="2z"){if(N){13.7s(1l);1a}4G(O){1C"2w":1C"4q":Q=0;P=0;1H;1C"1G":Q=13.1Y.1G-13.1c.1g-13.1o("1m-5e");if(J.1G>Q){Q=13.1Y.2M+13.1o("1m-5e");O="2M"}P=13.1Y.1M;1H;1C"2M":Q=13.1Y.2M+13.1o("1m-5e");if(J.2M<Q+13.1c.1g){Q=13.1Y.1G-13.1c.1g-13.1o("1m-5e");O="1G"}P=13.1Y.1M;1H;1C"1M":P=13.1Y.1M-13.1c.1f-13.1o("1m-5e");if(J.1M>P&&J.2N>=13.1Y.2N+13.1o("1m-5e")+13.1c.1f){P=13.1Y.2N+13.1o("1m-5e");O="2N"}1H;1C"2N":1Q:P=13.1Y.2N+13.1o("1m-5e");if(J.2N<P+13.1c.1f&&J.1M<=13.1Y.1M-13.1c.1f-13.1o("1m-5e")){P=13.1Y.1M-13.1c.1f-13.1o("1m-5e");O="1M"}1H}4G(13.1o("1m-2h")){1C"1G":1C"2M":if(J.1G>Q||J.2M<Q+13.1c.1g){O="2w"}1H;1C"1M":1C"2N":if(J.1M>P||J.2N<P+13.1c.1f){O="2w"}1H;1Q:}13.1c.2h=O;if(!13.1c.3v&&!13.1c.2P){if(A.1e.34&&!13.1J&&13.1c.1V==="1m"){if(13.1o("2m")){13.1c.6q(O!=="2w")}1k{if(13.1o("4o")!=="2O"){13.1c.7y=O==="2w"?"2O":13.1o("4o");13.8W();13.8R();13.8e(13.1c.7y==="2O");13.7V(13.1c.7y==="2O"&&!13.1o("2m"))}}13.6A(1l,1h,1r)}1a}13.7s(1l);if(N){1a}if(O==="4q"){L=13.1c.4q;J.y=0;J.x=0}if(O==="2w"){if(13.1c.1V!=="4p"){13.1c.1d.1B("1q-2w");13.1d.1B("1q-2w-1m")}13.1s.4m();Q=13.1Y.1G+J.y;P=13.1Y.1M+J.x;if(!13.1J&&A.1e.2D&&A.1e.2D<11){Q=0;P=0;L=13.1d}}1k{Q+=J.y;P+=J.x;13.1d.1T("1q-2w-1m");13.1c.1d.1T("1q-2w")}13.1c.1d.1y({1G:Q,1M:P})}1k{13.7s(1l);L=13.1d}13.1c.1d[13.1J?"1B":"1T"]("1q-1J");if(!13.1J&&K){K.2a(13.1c.1V==="1m"&&O==="2w"?13.1c.1d:13.1d,((1p.5P(1p.6p()*bi)+1)%2)?"1G":"2M")}13.1c.1d.2a(L)},fi:17(P){1b L;1b J;1b N;1b M;1b O=1l;1b K=P.cd?5:3/54;if(!13.1c.2P){1a}i(P).2g();K=(2K+K*1p.3B(P.8u))/2K;if(P.8u<0){K=1/K}if(13.1c.1V==="2z"){J=1p.1W(2K,1p.5w(13.1c.1f*K));J=1p.2f(J,13.1A.1f*0.9);N=J/13.1c.bV;13.1c.1f=1p.4t(J);13.1c.1g=1p.4t(N);13.1c.1d.1y({1f:13.1c.1f,1g:13.1c.1g});L=13.1c.1d.8g();13.1c.5L=1p.4t(L.1f);13.1c.5d=1p.4t(L.1g);O=1r}1k{if(!13.1J&&13.1c.1V==="1m"){J=1p.1W(13.1A.1f,1p.5w(13.1R.1f*K));J=1p.2f(J,13.1R.8N);N=J/(13.1R.8N/13.1R.9B);13.1R.1f=1p.4t(J);13.1R.1g=1p.4t(N)}1k{1a}}M=i(1j).7n();13.1s.1f=(13.1c.5L/(13.1R.1f/13.1A.1f));13.1s.1g=(13.1c.5d/(13.1R.1g/13.1A.1g));13.1s.1d.1y({1f:13.1s.1f,1g:13.1s.1g});A.26(13.1s,13.1s.1d.1F());if(13.1c.2P){3R(13.56);13.56=1h;if(O){13.56=1r}13.7X(1h,{x:P.x-M.x,y:P.y-M.y});if(O){13.56=1h}}},8e:17(L){1b K;1b J=L?"3D 1S":"5f"+(1j.2y.3d?" 6Q":1j.2y.9t?" 7r":"")+(1j.2y.3d?" 5D":1j.2y.9t?" 6u":" 6S");1b M=13.1d.2e("1q:5h:4C:fn",(!L)?i(17(N){if(c(N)&&!h(N)){1a}if(N&&N.2k==="3x"&&N.1u!=="6Q"){1a}K=(A.1e.2D<9)?A.26({},N):N;if(!13.5x){3R(13.5x);13.5x=4v(i(17(){13.4C(K)}).1E(13),gx)}}).2L(13):i(13.4C).2L(13));13.1d.3a("1q:5h:4C:1z",J).1D(J,M,10)},8W:17(){1b J=13.1d.2e("1q:5h:4C:1z");1b K=13.1d.2e("1q:5h:4C:fn");13.1d.1P(J,K);13.1d.38("1q:5h:4C:fn")},7V:17(K){1b J=K?"3D 1S":"6v"+(1j.2y.3d?" 5Q bf 5D":1j.2y.9t?" 6o fo 6u":" 8J 6S");1b L=13.1d.2e("1q:5h:4a:fn",i(17(N){if(c(N)&&!h(N)){1a}if(N&&N.1u==="5Q"&&N.2k!=="3x"){1a}if(N&&(N.1u==="5D"||N.1u==="6u"||N.1u==="6S")){if(!13.2n||!13.1c.4W||!13.1c.2P){1a}1b M=N.7C();if(M.x<13.1Y.1M||M.x>13.1Y.2N||M.y<13.1Y.1G||M.y>13.1Y.2M){13.4a(N);1a}}1k{if(13.1c.1d!==N.8r()&&!((13.1c.2h==="2w"||13.1c.1V==="2z")&&13.1c.1d.ap(N.8r()))&&!13.1d.ap(N.8r())){13.4a(N);1a}}}).2L(13));13.1d.3a("1q:5h:4a:1z",J).1D(J,L,20)},8R:17(){1b J=13.1d.2e("1q:5h:4a:1z");1b K=13.1d.2e("1q:5h:4a:fn");13.1d.1P(J,K);13.1d.38("1q:5h:4a:fn")},fp:17(){13.eV=13.5T.1E(13);13.1d.1D(["5f",1j.2y.3d?"6Q":"7r"],i(17(J){if((A.1e.83||A.1e.57==="6R"&&A.1e.6D)&&13.1o("49")&&13.1o("4o")!=="2O"&&J.1u==="5f"){J.40();if(A.1e.6D){J.5g()}}if(!13.1c.2P){1a}if(13.1c.2h==="2w"){13.1s.5G=J.7C()}}).2L(13),10);13.1d.1D(["6v",1j.2y.3d?"5Q":"6o"],i(17(J){if(c(J)&&h(J)){13.1s.7d=1l}}).2L(13),10);13.1d.1D("8P "+(A.1e.57==="6R"?"":1j.2y.3d?"5D":1j.2y.9t?"6u":"6S"),i(13.7X).2L(13));if(13.1o("49")){13.8e(13.1o("4o")==="2O");13.7V(13.1o("4o")==="2O"&&!13.1o("2m"))}13.1d.1D("6X",17(J){J.5g()},10).1D("1S",i(17(J){13.1d.c8("fm","2O");if(13.1J){13.3m.2W("1S",J)}}).1E(13),15);if(13.1o("2m")){13.1d.1D("21 1S",i(13.2m).2L(13),15)}1k{13.1d.1D("21 1S",i(13.9C).2L(13),15)}if(13.3I.1I>1){13.bj()}if(!A.1e.34&&13.1o("fl")){13.1d.1D("4x",13.fi.2L(13))}i(1j).1D(A.1e.34?"73":"73 6l",13.bp)},fj:17(){if(13.1d){13.1d.1P("4x")}i(1j).1P("73 6l",13.bp);i(13.3I).3b(17(J){i(J.4k).bo()})},4C:17(P){1b Q;1b O;1b M;1b N;1b J;1b K=0;1b L=0;if(!13.1i.2j()||!13.2n||!13.1c.4W||13.1c.2P||13.1c.3v){if(!13.1i.2j()&&!13.5Y){if(P){13.5Y=e(P);P.4j()}13.1i.5W(13.7c.1E(13));if(!13.5s){13.5s=i(13.8K).1E(13).2F(8G)}}1a}if(P&&P.1u==="5D"&&P.2k==="3x"){1a}if(!13.1o("49")&&13.1o("2m")&&!13.1J){13.1c.2P=1r;1a}13.1c.3v=1r;if(13.1J&&13.1c.1V==="1m"){N=13.1i.1d.7o();13.5n.1B("1q-1m-in");J=13.4T.7o();L=((N.1M+N.2N)/2-(J.1M+J.2N)/2);K=((N.1G+N.2M)/2-(J.1G+J.2M)/2)}13.1c.1i.1P("2V");13.1c.1d.1T("1q-a4").1P("2V");13.1c.1d.1B("1q-3v");13.1d.1B("1q-3v");13.7R();O=(13.1c.1V==="1m")?13.1c.2h:13.1c.1V;if(A.1e.2J.1Z&&!(13.1J&&13.1o("3G")==="2Y")){if(O==="2w"){M=13.1i.1d.1F();13.1c.1i.1y({2l:"4n(0,"+K+"2v, 0) 48("+M.1f/13.1R.1f+", "+M.1g/13.1R.1g+")"}).1F();13.1c.1i.1D("2V",i(17(){13.1c.1i.1P("2V");13.1c.1d.1T("1q-3v 1q-p-"+O);13.1c.3v=1l;13.1c.2P=1r}).1E(13));13.1c.1d.1B("1q-p-"+O).1F();if(!A.1e.34&&A.1e.5O&&(A.1e.4l==="5O"||A.1e.4l==="72")){13.1c.3v=1l;13.1c.2P=1r}}1k{13.1c.1d.1D("2V",i(17(){13.1c.1d.1P("2V");13.1c.1d.1T("1q-3v 1q-p-"+O)}).1E(13));13.1c.1d.1y({1Z:"2Z"});13.1c.1d.1B("1q-p-"+O).1F();13.1c.1d.1y({1Z:""}).1F();13.1c.1d.1T("1q-p-"+O);13.1c.3v=1l;13.1c.2P=1r}}1k{13.1c.1d.1T("1q-3v");13.1c.3v=1l;13.1c.2P=1r}if(!13.1J){13.6A(1r)}if(P){P.2g().4j();Q=P.7C();if(13.1c.1V==="2z"&&(/21/i).3j(P.1u)){Q.y-=13.1c.1g/2+10}if(O==="2w"&&((/21/i).3j(P.1u)||c(P))){13.1s.36={x:0,y:0};Q.x=-(Q.x-13.1Y.1M-13.1A.1f/2)*(13.1R.1f/13.1A.1f);Q.y=-(Q.y-13.1Y.1G-13.1A.1g/2)*(13.1R.1g/13.1A.1g)}}1k{Q={x:13.1Y.1M+(13.1Y.2N-13.1Y.1M)/2,y:13.1Y.1G+(13.1Y.2M-13.1Y.1G)/2};if(A.1e.34&&13.1J&&13.1o("3G")==="2Y"){13.1s.5X=1r;13.1s.36={x:0,y:0};Q.x=-(Q.x-13.1Y.1M-13.1A.1f/2)*(13.1R.1f/13.1A.1f);Q.y=-(Q.y-13.1Y.1G-13.1A.1g/2)*(13.1R.1g/13.1A.1g)}}13.1d.1T("1q-3v").1B("1q-2P");Q.x+=-L;Q.y+=-K;13.1s.5G={x:0,y:0};13.1s.dx=0;13.1s.dy=0;13.7X(P,Q,1r);u("fk",13.id)},4a:17(L,Q){1b O;1b M;1b J;1b K;1b N=0;1b P=0;1b R=13.1c.2P;13.5Y=1h;if(!13.2n){1a}if(L&&L.1u==="bf"&&L.2k==="3x"){1a}3R(13.56);13.56=1h;3R(13.5x);13.5x=1h;13.1c.3v=1l;13.1c.2P=1l;if(Q!==1r&&!13.1J){if(R){if(A.1e.34&&!13.1J&&13.1c.1V==="1m"){13.7R()}1k{13.6A()}}}if(!13.1c.4W){1a}if(L){L.2g()}13.1c.1i.1P("2V");13.1c.1d.1T("1q-3v").1P("2V");if(13.1J){K=13.4T.7o();if(13.1o("3G")!=="2Y"){13.5n.1T("1q-1m-in")}13.1i.1d.1y({"1W-1g":13.78()});J=13.1i.1d.7o();P=((J.1M+J.2N)/2-(K.1M+K.2N)/2);N=((J.1G+J.2M)/2-(K.1G+K.2M)/2)}O=(13.1c.1V==="1m")?13.1c.2h:13.1c.1V;if(A.1e.2J.1Z&&L&&!(13.1J&&13.1o("3G")==="2Y")){if(O==="2w"){13.1c.1i.1D("2V",i(17(){13.1c.1i.1P("2V");13.1d.1T("1q-2P");4v(i(17(){13.1c.4m()}).1E(13),32)}).1E(13));M=13.1i.1d.1F();13.1c.1d.1B("1q-a4 1q-p-"+O).1F();13.1c.1i.1y({2l:"4n(0,"+N+"2v,0) 48("+M.1f/13.1R.8N+", "+M.1g/13.1R.9B+")"})}1k{13.1c.1d.1D("2V",i(17(){13.1c.4m();13.1d.1T("1q-2P")}).1E(13));13.1c.1d.3q("2r");13.1c.1d.1B("1q-a4 1q-p-"+O);13.1d.1T("1q-2P")}}1k{13.1c.4m();13.1d.1T("1q-2P")}13.1s.dx=0;13.1s.dy=0;13.1s.5G={x:0,y:0};13.1s.4m();if(R){u("f7",13.id)}},7X:17(T,S,R){1b L=S;1b N;1b M;1b P=0;1b K;1b O=0;1b J;1b U;1b Q=1l;if(!13.1c.2P&&!R){1a}if(T){i(T).40().5g();if(c(T)&&!h(T)){1a}Q=(/21/i).3j(T.1u)||c(T);if(Q&&!13.1s.7d){13.1s.7d=Q}if(!L){L=T.7C()}}if(13.1c.1V==="4p"){1a}if(13.1c.1V==="1m"&&13.1c.2h==="2w"&&(T&&Q||!T&&13.1s.5X)){13.1s.5X=1r;N=13.1s.36.x+(L.x-13.1s.5G.x);M=13.1s.36.y+(L.y-13.1s.5G.y);13.1s.5G=L;P=1p.2f(0,13.1c.5L-13.1R.1f)/2;K=-P;O=1p.2f(0,13.1c.5d-13.1R.1g)/2;J=-O}1k{13.1s.5X=1l;if(13.1c.1V==="2z"){L.y=1p.1W(13.1Y.1G,1p.2f(L.y,13.1Y.2M));L.x=1p.1W(13.1Y.1M,1p.2f(L.x,13.1Y.2N))}N=L.x-13.1Y.1M;M=L.y-13.1Y.1G;K=13.1A.1f-13.1s.1f;J=13.1A.1g-13.1s.1g;N-=13.1s.1f/2;M-=13.1s.1g/2}if(13.1c.1V!=="2z"){N=1p.1W(P,1p.2f(N,K));M=1p.1W(O,1p.2f(M,J))}13.1s.36.x=N;13.1s.36.y=M;if(13.1c.1V==="1m"&&13.1c.2h!=="2w"){if(A.1e.2J.2l){13.1s.1d.1y({2l:"9E("+13.1s.36.x+"2v,"+13.1s.36.y+"2v)"});13.1s.1i.1y({2l:"9E("+-(13.1s.36.x+13.1s.3L.x)+"2v, "+-(13.1s.36.y+13.1s.3L.y)+"2v)"})}1k{13.1s.1d.1y({1G:13.1s.36.y,1M:13.1s.36.x});13.1s.1i.1y({1G:-(13.1s.36.y+13.1s.3L.y),1M:-(13.1s.36.x+13.1s.3L.x)})}}if(13.1c.1V==="2z"){if(13.1s.7d&&!(T&&T.1u==="3D")){L.y-=13.1c.1g/2+10}13.1c.1d.1y({1G:L.y-13.1Y.1G-13.1c.1g/2,1M:L.x-13.1Y.1M-13.1c.1f/2})}if(!13.56){13.1s.dx=0;13.1s.dy=0;13.5T(1)}},5T:17(O){1b M;1b K;1b J;1b P;1b N;1b L;if(!fK(O)){if(13.1s.5X){O=13.1s.7d?0.4:0.16}1k{O=13.1o("eX")?0.2:13.1s.7d?0.4:0.8}}M=((13.1s.36.x-13.1s.dx)*O);K=((13.1s.36.y-13.1s.dy)*O);13.1s.dx+=M;13.1s.dy+=K;if(!13.56||1p.3B(M)>0.bd||1p.3B(K)>0.bd){if(13.1s.5X){J=13.1s.dx;P=13.1s.dy}1k{J=(13.1s.dx*(13.1R.1f/13.1A.1f)-1p.1W(0,13.1R.1f-13.1c.5L)/2);P=(13.1s.dy*(13.1R.1g/13.1A.1g)-1p.1W(0,13.1R.1g-13.1c.5d)/2);if(13.1c.1V==="2z"){J=1p.5w(J);P=1p.5w(P)}J=-J;P=-P}N=13.1R.1f/13.1R.8N;L=13.1R.1g/13.1R.9B;13.1c.1i.1y(A.1e.2J.2l?{2l:g+J+"2v,"+P+"2v"+C+" 48("+N+","+L+")"}:{1f:13.1R.1f,1g:13.1R.1g,1M:-(13.1s.dx*(13.1R.1f/13.1A.1f)+1p.2f(0,13.1R.1f-13.1c.5L)/2),1G:-(13.1s.dy*(13.1R.1g/13.1A.1g)+1p.2f(0,13.1R.1g-13.1c.5d)/2)})}if(13.1c.1V==="2z"){1a}13.56=4v(13.eV,16)},bj:17(){1b V;1b L;1b Q=30;1b N=ga;1b S;1b T="";1b K={};1b J;1b P;1b U=0;1b W={1Z:A.1e.an+5Z.7h(32)+"f5 5S-5M(.18,.35,.58,1)"};1b M;1b R;1b O=i(17(X){if(!13.2n||13.1c.2P){1a}if(X.2p==="3N"){3R(13.5x);13.5x=1h;U=0;K={x:X.x,y:X.y,eT:X.2S};V=13.1A.1f;L=V/2;13.1i.1d.1P("2V");13.1i.1d.3Q("1Z","");13.1i.1d.3Q("2l","4n(0, 0, 0)");R=1h}1k{J=(X.x-K.x);P={x:0,y:0,z:0};if(R===1h){R=(1p.3B(X.x-K.x)<1p.3B(X.y-K.y))}if(R){1a}X.2g();if(X.2p==="9y"){U=0;M=1h;S=X.2S-K.eT;if(1p.3B(J)>L||(S<N&&1p.3B(J)>Q)){if((T=(J>0)?"eY":(J<=0)?"i8":"")){if(T==="eY"){M=13.8s();U+=V*10}1k{M=13.8o();U-=V*10}}}P.x=U;P.f6=-90*(P.x/V);13.1i.1d.1D("2V",i(17(Y){13.1i.1d.1P("2V");13.1i.1d.3Q("1Z","");if(M){13.1i.1d.1y({2l:"4n("+P.x+"2v, 6y, 6y)"});13.3Z(M,1r)}}).1E(13));13.1i.1d.1y(W);13.1i.1d.1y({"1Z-5p":P.x?"hl":"f5",2r:1-0.7*1p.3B(P.x/V),2l:"4n("+P.x+"2v, 6y, 6y)"});J=0;1a}P.x=J;P.z=-50*1p.3B(P.x/L);P.f6=-60*(P.x/L);13.1i.1d.1y({2r:1-0.7*1p.3B(P.x/L),2l:"4n("+P.x+"2v, 6y, "+P.z+"2v)"})}}).1E(13);13.1d.1D("2t",O)},ew:17(){1b K,J;if(13.3I.1I){13.4Q=13.3I}1k{K=13.3S.2s("3r-9L");if(K){if(A.1e.2J.bu){J=A.$A(1n.bt(\'.9Q[3r-9L="\'+K+\'"], .9S[3r-9L="\'+K+\'"]\'))}1k{J=A.$A(1n.9K("A")).33(17(L){1a K===L.2s("3r-9L")})}i(J).3b(17(M){1b L,N;L=j(M);if(L&&L.3I.1I>0){1a}if(L){N=1t l(L.1i.1K.24,L.1i.1m.24,L.1i.3u,1h,L.1i.4k);N.3M=L.1i.3M}1k{N=1t l().9M(M,L?L.6E:1h)}if(13.1i.1m.1X.4I(N.1m.24)&&13.1i.1K.1X.4I(N.1K.24)){N=13.1i}13.4Q.3e(N)},13);13.79=13.1i}}if(13.4Q.1I>1){13.5n.1B("f2-bO");13.5l=A.$1t("2X",{"3X":"1q-2m-hH"}).2a(13.5n);13.4i=1t s(13.5l);i(13.4Q).3b(17(L){1b M=i(17(N){13.a3(L);13.3Z(L)}).1E(13);L.f0=13.4i.f1(A.$1t("2b",{1X:L.7A("1K")}).1D("21 1S",17(N){N.2g()}).1D("21 "+(13.1o("bz")==="7I"?"7H 8J":"1S"),i(17(O,N){if(13.6i){3R(13.6i)}13.6i=1l;if(O.1u==="7H"){13.6i=i(M).2F(N)}1k{if(O.1u==="21"||O.1u==="1S"){M()}}}).2L(13,60)))},13);13.2R.4B.5v();13.2R.4y.5v()}1k{13.5n.1T("f2-bO");13.2R.4B.4m();13.2R.4y.4m()}},fg:17(){1b J;if(13.4i){13.4i.2g();13.4i=1h}if(13.5l){13.5l.2U();13.5l=1h}if(13.4Q.1I>1&&!13.3I.1I){13.1d.1P("2t");13.1i.1d.2U().2s("2o");13.1i.1d.5r("2o");13.79.1d.2a(13.1d);13.7c(13.79);5z(J=13.4Q.hK()){if(J!==13.79){if(J.1K.1d){J.1K.1d.5k();J.1K.1d=1h}if(J.1m.1d){J.1m.1d.5k();J.1m.1d=1h}J=1h}}}13.4Q=[]},62:17(){if(!13.2n||!13.1J){1a}if(A.1e.57==="9Y"&&A.1e.4l==="a1"&&5K(A.1e.76)===7){f3(n);n=1h}i(1n).1P("cf",13.8T);13.4a(1h,1r);13.2n=1l;if(A.1e.4X.9J&&A.1e.4X.4W()){A.1e.4X.f4()}1k{if(A.1e.2J.1Z){13.1d.1P("2V").1y({1Z:""});13.1d.1D("2V",13.8c);if(A.1e.3O){4v(i(17(){13.8c()}).1E(13),hS)}13.3T.1P("2V").1y({1Z:""});13.3T.1y({1Z:"eR 0.6s 5S-5M(0.eZ, 0.ho, 0.eS, 0.g5) 0.as"}).1F();13.1d.1y({1Z:"eR .3s 5S-5M(0.9z, 0, 0.eU, 0.b9) as"}).1F();if(13.1c.1V!==1l&&13.1o("3G")==="2Y"&&13.1o("4H")!=="2z"){13.1i.1d.1y({"1W-1g":13.1i.1F("1m").1g});13.1i.1d.1y({"1W-1f":13.1i.1F("1m").1f})}13.3T.1y({2r:0.4});13.1d.1y({2r:0.gi,2l:"48(0.4)"})}1k{13.8c()}}},2m:17(L){if(!13.1i.2j()||!13.2n||13.1J){if(!13.1i.2j()){if(L){13.5Y=e(L);L.4j();if(L.1u==="21"){L.5j[1].4j()}}13.1i.5W(13.7c.1E(13));if(!13.5s){13.5s=i(13.8K).1E(13).2F(8G)}}1a}if(L){L.4j()}1b J=i(13.1d).2e("cr");1b K=1n.fX();13.b7();13.6n--;13.4a(1h,1r);13.8W();13.8R();13.2n=1l;if(!13.3m){13.3m=A.$1t("2X").1B("1q-2m").1B(13.1o("5I")).1y({2r:0});13.5n=A.$1t("2X").1B("1q-2m-eu").2a(13.3m);13.8i=A.$1t("2X").1B("1q-2m-fT").2a(13.5n);i(["4y","4B","62"]).3b(17(N){1b M="1q-2q";13.2R[N]=A.$1t("2q",{8f:13.1o("9D-fW-"+N)}).1B(M).1B(M+"-"+N);K.b3(13.2R[N]);4G(N){1C"4y":13.2R[N].1D("21 1S",17(O){O.2g();13.3Z(13.8s())}.2L(13));1H;1C"4B":13.2R[N].1D("21 1S",17(O){O.2g();13.3Z(13.8o())}.2L(13));1H;1C"62":13.2R[N].1D("21 1S",17(O){O.2g();13.62()}.2L(13));1H;1Q:}},13);13.8i.3c(K);13.3m.1D("4x 5f 3D",i(17(M){i(M).2g()}));if(13.1o("eW")){13.3m.1D("21 1S",17(O){1b N=O.5u();1b M=i(13.1o("4H")==="2z"?13.1c.1d:13.1c.1i).7o();if(13.1o("3G")!=="2Y"&&M.1G<=N.y&&N.y<=M.2M&&M.1M<=N.x&&N.x<=M.2N){O.4j();13.4a(O);1a}if(13.1o("3G")!=="2Y"&&13.1d.ap(O.f8())){1a}O.2g();13.62()}.2L(13))}13.8T=i(17(N){1b M=1h;if(N.8k!==27&&N.8k!==37&&N.8k!==39){1a}i(N).2g();if(N.8k===27){13.62()}1k{M=(N.8k===37)?13.8s():13.8o();if(M){13.3Z(M)}}}).2L(13);13.80=i(17(){1b M;13.1d.1P("2V").1y({1Z:"",2l:"4n(0, 0, 0)"});if(13.1J){1a}13.1J=1r;13.3m.1T("1q-2m-h9").1y({2r:1});13.1c.8U(13.1o("4H"));13.1R=A.4b(13.3p);13.5U();if(13.41&&13.1i.3u){if(13.1i.3M){13.41.3c(A.$1t("a",{6Z:13.1i.3M}).1D("21 1S",13.9C.1E(13)).5t(13.1i.3u))}1k{13.41.5t(13.1i.3u)}13.41.1B("1q-5v")}if(13.1o("3G")!=="2Y"){13.8e(1r);13.7V(1r)}13.2n=1r;if(13.1o("3G")==="2Y"){if(13.1c.1V!==1l){13.1c.6q(1r)}if(A.1e.34&&13.8b){13.8b=1l}13.4C()}if((A.1e.34||13.1o("a7"))&&13.1c.4W){if(13.8b||13.6n>0){13.6A(1r,13.1o("a6"))}13.8b=1l}13.8i.1T("1q-3w").1B("1q-9P 1q-5J");if(13.5l){13.5l.1T("1q-3w").1B("1q-9P 1q-5J")}if(13.4i){13.4i.bN();13.a3(13.1i)}if(J){J.2a(13.3m,((1p.5P(1p.6p()*bi)+1)%2)?"1G":"2M")}if(13.4Q.1I&&!13.3I.1I){13.bj()}i(1n).1D("cf",13.8T);if(A.1e.57==="9Y"&&A.1e.4l==="a1"&&5K(A.1e.76)===7){n=w()}u("fh",13.id)}).1E(13);13.8c=i(17(){13.1d.1P("2V");if(!13.1J){1a}if(13.1J){i(1n).1P("cf",13.8T);13.4a(1h,1r)}13.fg();13.1J=1l;13.1c.8U(13.1o("49"));13.1d.8m(13.1i.75("1K"),13.1i.1d);13.1i.74("1K");i(13.1i.1d).1y({1f:"",1g:"","1W-1f":1p.2f(13.1i.1F("1K").1f),"1W-1g":1p.2f(13.1i.1F("1K").1g)});13.1s.1i.1X=13.1i.7A("1K");13.1d.1y({2r:"",1Z:""});13.1d.1y({2l:"4n(0, 0, 0)"});i(13.3S).8m(13.1d,13.8h);13.7s(1r);if(13.41){13.41.2U();13.41=1h}13.8W();13.8R();if(13.1o("4o")==="2Y"){13.4C()}1k{if(13.1o("49")!==1l){13.8e(13.1o("4o")==="2O");13.7V(13.1o("4o")==="2O"&&!13.1o("2m"))}}13.6A();13.3T.1P("2V");13.3m.2U();13.3T.2U();13.3T=1h;i(A.1e.4e()).1T("1q-1J-ev-8I");13.2n=1r;if(A.1e.2D<10){13.5U()}1k{i(1j).c8("ff","73")}u("eQ",13.id)}).1E(13);13.7U=A.$1t("2X",{"3X":"1q-1i-eu"}).2a(13.5n);13.4T=A.$1t("5E").2a(13.7U);13.8h=13.1d.kz(1l)}13.ew();i(A.1e.4e()).1B("1q-1J-ev-8I");i(1n.3A).1F();if(13.1o("2m")==="eo"){13.aT();A.1e.4X.c2(13.3m,{c1:i(17(){13.80()}).1E(13),bZ:13.8c,8M:i(17(){13.aR()}).1E(13)})}1k{4v(i(17(){13.aT();13.aR()}).1E(13),96)}},aT:17(){1b K;1b J;K=A.$1t("2b",{1X:13.1i.7A("1m")});13.3T=A.$1t("2X").1B("1q-2m-bg").3c((A.1e.2J.8n||A.1e.2D<10)?K:1t A.9Z(K).59(b).75()).2a(13.3m);if(13.1o("3G")==="2Y"&&13.1o("4H")!==1l){13.5n.1B("1q-2Y-1m"+(13.1o("4H")==="1m"?" 1q-1m-in":"")).1F()}J=i(13.1d)[(A.1e.2D<10)?"1F":"7l"]();i(13.8h).1y({1f:J.1f,1g:J.1g});13.1d.8m(13.1i.75("1m"),13.1i.1d);13.1i.74("1m");13.3m.2a(1n.3A);13.7G=17(){1b L=13.7U;if(i(13.4T).1F().1f>50){L=13.4T}1a 17(){1a 13.1o("3G")==="2Y"&&13.1o("4H")!==1l&&13.1o("4H")!=="2z"?65:1p.5w(i(L).8g().1f)}}.2c(13);13.78=17(){1b L=13.7U;if(i(13.4T).1F().1g>50){L=13.4T}1a 17(){1a 13.1o("3G")==="2Y"&&13.1o("4H")!==1l&&13.1o("4H")!=="2z"?65:1p.5w(i(L).8g().1g)}}.2c(13);13.8i.1T("1q-9P 1q-5J").1B("1q-3w");if(13.5l){13.5l.1T("1q-9P 1q-5J").1B("1q-3w")}13.1i.1d.1y({"1W-1g":1p.2f(13.1i.1F("1m").1g,13.78())});13.1i.1d.1y({"1W-1f":1p.2f(13.1i.1F("1m").1f,13.7G())});13.4T.3c(i(13.3S).8m(13.8h,13.1d));if(13.1o("41")){13.41=A.$1t("eE",{"3X":"1q-3u"}).2a(13.4T)}},aR:17(){13.1d.1y({1Z:""});13.1d.1y({2l:"48(0.6)"}).1F();13.1d.1y({1Z:A.1e.an+" 0.4s 5S-5M(0.9n, 0.c3, 0.fw, 1) as"});if(A.1e.2J.1Z){13.1d.1D("2V",13.80);if(A.1e.5O&&(A.1e.4l==="5O"||A.1e.4l==="72")){4v(i(17(){13.80()}).1E(13),be)}}1k{13.80.2F(16,13)}13.3m.1y({2r:1});13.1d.1y({2l:"48(1)"})},9C:17(){if(13.1i.3M){1j.8I(13.1i.3M,"kU")}},8o:17(){1b J=(13.1J?13.4Q:13.3I).33(17(M){1a(M.1K.2p!==-1||M.1m.2p!==-1)});1b K=J.1I;1b L=i(J).4K(13.1i)+1;1a(K<=1)?1h:J[(L>=K)?0:L]},8s:17(){1b J=(13.1J?13.4Q:13.3I).33(17(M){1a(M.1K.2p!==-1||M.1m.2p!==-1)});1b K=J.1I;1b L=i(J).4K(13.1i)-1;1a(K<=1)?1h:J[(L<0)?K-1:L]},cx:17(K,L){1b J=13.3I.33(17(M){1a((M.1m.1X.4I(K)||M.1m.24.4I(K))&&(M.1K.1X.4I(L)||M.1K.24.4I(L)))})||[];1a J[0]||((L&&K&&A.1O(L)==="1N"&&A.1O(K)==="1N")?1t l(L,K):1h)},bm:17(K){1b J=13.3I.33(17(L){1a(L.4k===K)})||[];1a J[0]},cl:17(J){1a 13.3I[J]}};v={4J:"fy.2.4 (i3)",4D:17(M,K){1b L=1h;1b J=[];A.$A((M?[i(M)]:A.$A(1n.9V("9Q")).5F(A.$A(1n.9V("9S"))))).3b(i(17(N){if(i(N)){if(!j(N)){L=1t k(N,K);if(y&&!L.1o("bC")){L.2g();L=1h}1k{G.3e(L);J.3e(L)}}}}).1E(13));1a M?J[0]:J},2g:17(M){1b K,L,J;if(M){(L=j(M))&&(L=G.9R(G.4K(L),1))&&L[0].2g()&&(52 L[0]);1a}5z(K=G.1I){L=G.9R(K-1,1);L[0].2g();52 L[0]}},gw:17(J){13.2g(J);1a 13.4D(J)},3Z:17(O,N,M,K){1b L=j(O);1b J;if(L){J=A.1O(N)==="6c"?L.bm(N):L.cx(N,M);if(J){L.3Z(J)}}},kw:17(M,L){1b K=j(M);1b J;if(K){4G(A.1O(L)){1C"6c":J=K.bm(L);1H;1C"6b":J=K.cl(L);1H;1Q:}if(J){K.3Z(J)}}},4y:17(K){1b J;(J=j(K))&&J.3Z(J.8s())},4B:17(K){1b J;(J=j(K))&&J.3Z(J.8o())},kd:17(K){1b J;(J=j(K))&&J.4C()},kB:17(K){1b J;(J=j(K))&&J.4a()},2m:17(K){1b J;(J=j(K))&&J.2m()},62:17(K){1b J;(J=j(K))&&J.62()},e3:17(J,K){if(!q[J]){q[J]=[]}if(A.1O(K)==="17"){q[J].3e(K)}},k3:17(J){1a!!j(J)}};i(1n).1D("9e",17(){1b K=1j[E+"7L"]||{};t=t();d();I=A.$1t("2X",{"3X":"3g-3w-71"}).2a(1n.3A);H=(A.1e.34&&1j.dQ&&1j.dQ("(1W-cI-1f: dR), (1W-cI-1g: dR)").kG);if(A.1e.34){A.26(p,m)}1U(1b J=0;J<B.1I;J++){if(K[B[J]]&&A.$F!==K[B[J]]){v.e3(B[J],K[B[J]])}}v.4D();y=1l});1j.9S=1j.9S||{};1a v})();', 62, 1316, "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||||function|||return|var|zoomBox|node|browser|width|height|null|image|window|else|false|zoom|document|option|Math|mz|true|lens|new|type|Event|options|Custom|jSetCss|event|size|jAddClass|case|jAddEvent|jBind|jGetSize|top|break|length|expanded|small|handler|left|string|jTypeOf|jRemoveEvent|default|zoomSize|btnclick|jRemoveClass|for|mode|max|src|boundaries|transition||tap|||url||extend|||arguments|jAppendTo|img|call||jFetch|min|stop|position|important|loaded|pointerType|transform|expand|ready|style|state|button|opacity|getAttribute|touchdrag|parseFloat|px|inner||navigator|magnifier|prototype|auto|enum|ieMode|undefined|jDelay|clientY|clientX|changedTouches|features|100|jBindAsEvent|bottom|right|click|active|context|buttons|timeStamp|mousedrag|jRemove|transitionend|jCallEvent|div|always|none||||filter|mobile||pos||jDel||jStore|jEach|append|pointerEnabled|push|oneOf|magic|boolean|try|test|settings|rootCSS|expandBox|hint|handle|zoomSizeOrigin|jGetCss|data||defined|caption|activating|hidden|touch|Doc|match|body|abs|orientation|dbltap|setAttribute|catch|expandZoomOn|init|additionalImages|Class|identifier|border|link|dragstart|webkit|parent|jSetCssProp|clearTimeout|placeholder|expandBg|touchpinch|off|hasOwnProperty|class|Element|update|stopDefaults|expandCaption||array|||||scale|zoomMode|deactivate|detach|target|dblbtnclick|getDoc|pushToEvents|touches|replace|expandThumbs|stopQueue|origin|uaName|hide|translate3d|zoomOn|preview|custom|firstChild||ceil|styles|setTimeout|visibility|mousescroll|prev|J_TYPE|pow|next|activate|start|reverse|listeners|switch|expandZoomMode|has|version|indexOf|schema|parentNode|root|pageY|direction|expandGallery|domPrefix|disabled|expandFigure|vertical|pageX|enabled|fullScreen|jTrim|trident||requestAnimationFrame|delete||||moveTimer|platform||blur|documentElement|messageBox|instanceof|innerHeight|distance|touchstart|stopDistribution|handlers|MSPOINTER_TYPE_TOUCH|events|kill|expandNav|constructor|expandStage|toLowerCase|duration|canvas|removeAttribute|loadTimer|changeContent|jGetPageXY|show|round|activateTimer|absolute|while|cubicBezier|timer|jCamelize|pointermove|figure|concat|spos|FX|cssClass|visible|parseInt|innerWidth|bezier|throw|chrome|floor|pointerup|contains|cubic|move|resizeCallback|add|load|innertouch|initEvent|String|||close|display|getAbsoluteURL|Infinity|apply|onload||dppx|Array|number|element|targetTouches|ms|ease|onerror|dragged|updateTimer|isQueueStopped|selectedItem|scroll|now|hintRuns|MSPointerUp|random|enable|className||J_UUID|MSPointerMove|touchend|nodeType|mouseup|0px|to|showHint|loadingBox|css|gecko|originalTitle|originalImg|render|getButton|shift|onTouchEnd|filters|MagicJS|not|found|no|addCSS|pointerdown|android|mousemove|hunits|wunits|thumb|selected|mousedown|Object|href||wrapper|opera|resize|setCurNode|getNode|uaVersion||expandMaxHeight|primaryImage|overflow|200|setupZoom|touchmovement|padding|onComplete|cssTransformProp|fromCharCode|minimum|set|join|getBoundingClientRect|tooltip|jGetScroll|jGetRect|toUpperCase|oncomplete|MSPointerDown|setSize|normalSize|engine|alternate|continuous|callback|trigger|_handlers|getURL|cycles|getClientXY|onready|originalImage|timedout|expandMaxWidth|mouseover|hover|easeFn|tm|Options|onTouchStart|threshold|end|svg|_cleanup|reflowZoom|horizontal|zoomCaption|expandImageStage|registerDeactivateEvent|_timer|animate|_EVENTS_|_unbind|onExpand|byTag||androidBrowser||||sqrt|on|createElement|margin|mobileZoomHint|onClose|storage|registerActivateEvent|title|getInnerSize|stubNode|expandControls|fromJSON|keyCode|object|replaceChild|cssFilters|getNext|setProps|toString|getRelated|getPrev|scrollTop|deltaY|typeof|currentSrc|jGetPosition|Transition|scrollLeft|itemCSS|continue|parseCubicBezier|crMz|cssPrefix|index|400|setOrientation|open|mouseout|showLoading|readyState|fallback|maxWidth|split|touchmove|complete|unregisterDeactivateEvent|XMLHttpRequest|keyboardCallback|setMode|relatedTarget|unregisterActivateEvent|createEvent|handleMouseUp|nextImage||win|dblclick|pointerId||||lazyZoom|||loadSmall|perspective|originalImgSrc|btnclickEvent|domready|PFX|linear|createTextNode|textExpandHint|onTouchMove|eventType|J_EUID|_event_prefix_|175|status|naturalWidth|callee|onprogress|fromString|msPointerEnabled|isPrimary|hideTimer|cancelAnimationFrame|Message|dragend|600|reflow|maxHeight|openLink|text|translate|exitFullscreen|pStyles|compatMode|isNaN|capable|getElementsByTagName|gallery|parseNode|createElementNS|loopBind|fade|MagicZoom|splice|MagicZoomPlus|exists|forceAnimation|byClass|charAt|pStyles_arr|ios|SVGImage|implement|safari|_bind|setActiveThumb|deactivating|xhr|textClickZoomHint|forceTouch|Opacity|normalizeCSS||||||||||||||cssTransform|reset|hasChild|magiczoom|dashize|0s|getStorage|tagName|handleTouchEnd|calc|assign|cycle|handleTouchMove|mgctlbx|handleTouchStart|previousScale|loadImg|abort|touchScreen|ImageLoader|resizeTimer|10000px|05|1000|cubicBezierAtTime|loadedBytes|onabort|startAttempts|temporary|once|expandToWindow|zoomPosition|prepareExpandedView|stopAnimation|deltaX|Pltm|deltaMode|startTime|dispatchEvent|Za|hintMessage|styles_arr|appendChild|cssDomPrefix||slice|hideHint|errorEventName|045|Tooltip||changeEventName|000001|500|pointerout||html|101|swipe|HTMLElement|Alpha|imageByOrigin|el_arr|jClearEvents|onResize|presto|ifndef|www|querySelectorAll|query|http|uuid|w3|org|selectorTrigger|Date|J_EXT|autostart|https|removeChild|opr|hideFX|300|selectorsMoveFX|Function|maximum|scrollFX|getElementsByClassName|run|thumbs|rel|onClick|loadZoom|handleMouseDown|caller|0001|aspectRatio|ignore|onZoomReady|inline|onExit|mzCrA|onEnter|request|885|startTimer|runtime|onBeforeRender|onclick|jRaiseEvent|hideLoading|delay|_event_add_|getTarget|isMouse||keydown|_event_del_|priority|textHoverZoomHint|span|easeOutQuad|imageByIndex|easeInExpo|out|easeInQuad|elasticIn|bounceIn||03|easeOutCubic|easeOutExpo|easeOutSine|355|imageByURL|onAfterRender|easeInBack|setMessage|165|jToBool|easeOutBack|easeInSine|999|Number|parseSchema|device|getContext|crios|Moz|moz|cssText|background|backcompat|mozCancelAnimationFrame|scrollbarsWidth|multibackground|Webkit|documentMode|Top|Bottom|Left|Right|msExitFullscreen|cancelFullScreen|backCompat|ua|onchange|hone|od|textnode|date|stylesId|insertRule|nativize|getTime|UUID|toArray|item|sheet|styleSheet|animation|DocumentTouch|firefox|phone|forEach|mjs|deleteRule||removeRule|magicJS|styleFloat|getComputedStyle|wheelDeltaX|doc|progressiveLoad|jDefer|||wheelDeltaY|wheelDelta|dragmove|_initialDistance|curScale|detail|error|onxhrerror|onStart|interval|fps|loop|isReady|onreadystatechange|304|xhr2|loadBlob|matchMedia|767px|offsetWidth|getElementById|compareDocumentPosition|webkit419|Microsoft|DXImageTransform|jHasClass|jSetOpacity|progid|clientWidth|requestFullScreen|registerCallback|euid|wrap|handleMouseMove|addEventListener|which|stopPropagation|cancelBubble|preventDefault|finishTime|easeInCubic|color|2147483647|zoomWidth|zIndex|lineHeight|ACwAAAAAAQABAAACADs|100000||fontWeight|zoomHeight|fullscreen|setupSelectors||RegExp|stopImmediatePropagation|onUpdate|stage|view|setupExpandGallery|R0lGODlhAQABAAD|base64|screen|10px|block|setInterval|screenY|figcaption|screenX|get|touchOptions|rightClick|10000|gif|enclose|querySelector|getJSON|loadOptions|onswipe|onExpandClose|all|685|ts|735|moveBind|closeOnClickOutside|smoothing|backward|895|selector|addItem|with|clearInterval|cancel|300ms|deg|onZoomOut|getOriginalTarget|0ms|shown|upscale|setCaption|selectItem|naturalHeight|UIEvent|destroyExpandGallery|onExpandOpen|changeZoomLevel|unregisterEvents|onZoomIn|variableZoom|MouseEvent||MSPointerOut|registerEvents|charCodeAt|transitionEffect|setupContent|cos|items|PI|320|stdDeviation|v5|Click|initDrag|filterBlur|prefix|activeElement|fullscreenerror|fullscreenchange|CancelFullScreen|MSFullscreenChange|Width|MSFullscreenError|isFinite|cssFloat|jToggleClass|isset|parameter|jGetStyles|the|currentStyle|getPropertyValue|controls|float|ExitFullscreen|btn|createDocumentFragment|RequestFullscreen|cssfilters|2px|TransitionEvent|WebKitTransitionEvent|webkitTransitionEnd|units|220|msCancelAnimationFrame|webkitCancelRequestAnimationFrame|9999|red|201|sides|webkitIsFullScreen|FullScreen|of|RequestFullScreen|FullscreenElement|fullscreenElement|01|lt|536|ver|requestFullscreen|offsetHeight|MSPointerOver|pointerover|fromElement|toElement|isTouchEvent|textBtnPrev|returnValue|scrollHeight|refresh|120|parse|isPrimaryTouch|removeEventListener|createEventObject|message|fireEvent|NEGATIVE_INFINITY|420|POSITIVE_INFINITY|loading|attachEvent|detachEvent|JSON|sort|scrollWidth|jGetFullSize|offsetTop|offsetLeft|offsetParent|innerHTML|innerText|clientLeft|clientTop|Incorrect|jGetTransitionDuration|oCancelAnimationFrame|jGetFullScroll|childNodes|insertBefore|presto925|DOMElement|clientHeight|pageXOffset|pageYOffset|li|iframe|ul|opening|jGetStyle|jSetStyle|definition|oRequestAnimationFrame|xpath|edge|evaluate|air|fullscreenEnabled|userAgent|toFloat|100ms|4294967296|map|030|jToInt|msFullscreenEnabled|webkitexitFullscreen|implementation|withCredentials|hasFeature|TR|SVG11|FormData|ProgressEvent|webkitCancelFullScreen|mozCancelFullScreen|oCancelFullScreen|msCancelFullScreen|getHashCode|xy|setAttributeNS|1999|thumbnails|feGaussianBlur|SourceGraphic|pop|regexp|xlink|v3|collection|KeyboardEvent|KeyEvent|head|260|xxxx|xxxxxxxx|4xxx|yxxx|xxxxxxxxxxxx|generateUUID|2000|cssRules|addRule|removeCSS|Plus|feature|Image|windows|wap|forward|xda|xiino|vodafone|up||||psp|pocket|series|symbian|treo|ActiveXObject|getBoxObjectFor||other||linux|mozRequestAnimationFrame|webkitRequestAnimationFrame|doScroll|mac|webos|mozInnerScreenY|WebKitPoint|taintEnabled|unknown|plucker|re|blazer|blackberry|compal|elaine|fennec|bada|avantgo|ontouchstart|maxTouchPoints|msMaxTouchPoints|meego|hiptop|iemobile|ob|netfront|palm|os|ixi|mmp|midp|iris|kindle|lge|maemo|msRequestAnimationFrame|srcElement|textBtnClose|response|537|selectstart|progress|MobileOptions|Hover|easeInOutQuart|createObjectURL|GET|getRatio|easeInQuart|645|send|mgctlbxP|responseType|easeOutQuart|blob|static|zoomDistance|convert|URL|easeInOutQuint|backIn|07|TypeError|795|mgctlbxL|webkitURL|easeOutQuint|855|755|easeInQuint|06|or|lengthComputable|contextmenu|total|easeInOutCubic|srcset|availWidth|easeInOutSine|elasticOut|445|085|curFrame|availHeight|Close|565|scrollTo|textBtnNext|backOut|Next|745|715|9_|z0|575|setTransition|roundCss|955|515|455|running|055|rev|215|675|radius|destroy|250|infinite|normal|zoomIn|bounceOut|easeInOutQuad|before|035|Cannot|font|Touch|expoOut|pinchupdate|275|pinchstart|quadIn|MagicToolboxTooltip|Tap|easeInOutCirc|sineOut|2em|135|switchTo|easeInOutBack|Double|cloneNode|dummy|zoomOut|sineIn|256|devicePixelRatio|5000|matches|MessageBox|265|expoIn|MZ|mgctlbxN|relative|785|fontFamily|335|sans|easeOutCirc|wheel|textAlign|_self|fontSize|easeInOutExpo|DOMContentLoaded|easeInCirc|04|cubicOut|Previous|mousewheel|mgctlbxV|350|delta|quadOut|serif|deltaFactor|deltaZ|075|cubicIn|000244140625|onwheel".split("|"), 0, {}));
! function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (n) {
    var t, it, f, p, o, pt, s = "Close",
        wt = "BeforeClose",
        ti = "AfterClose",
        ii = "BeforeAppend",
        rt = "MarkupParse",
        ut = "Open",
        bt = "Change",
        ft = "mfp",
        u = "." + ft,
        w = "mfp-ready",
        kt = "mfp-removing",
        et = "mfp-prevent-close",
        b = function () {},
        ot = !!window.jQuery,
        c = n(window),
        r = function (n, i) {
            t.ev.on(ft + n + u, i)
        },
        l = function (t, i, r, u) {
            var f = document.createElement("div");
            return f.className = "mfp-" + t, r && (f.innerHTML = r), u ? i && i.appendChild(f) : (f = n(f), i && f.appendTo(i)), f
        },
        i = function (i, r) {
            t.ev.triggerHandler(ft + i, r);
            t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, n.isArray(r) ? r : [r]))
        },
        st = function (i) {
            return i === pt && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = n(t.st.closeMarkup.replace("%title%", t.st.tClose)), pt = i), t.currTemplate.closeBtn
        },
        ht = function () {
            n.magnificPopup.instance || (t = new b, t.init(), n.magnificPopup.instance = t)
        },
        ri = function () {
            var n = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== n.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in n) return !0;
            return !1
        },
        a, k, d, g, ct, e, gt, at, ni, nt, yt, tt;
    b.prototype = {
        constructor: b,
        init: function () {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener;
            t.isAndroid = /android/gi.test(i);
            t.isIOS = /iphone|ipad|ipod/gi.test(i);
            t.supportsTransition = ri();
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            f = n(document);
            t.popupsCache = {}
        },
        open: function (e) {
            var s, h, p, b, a, k, v, d, y;
            if ($(".page-loaded").addClass("scrollhidden"), e.isObj === !1) {
                for (t.items = e.items.toArray(), t.index = 0, p = e.items, s = 0; s < p.length; s++)
                    if (h = p[s], h.parsed && (h = h.el[0]), h === e.el[0]) {
                        t.index = s;
                        break
                    }
            } else t.items = n.isArray(e.items) ? e.items : [e.items], t.index = e.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            for (t.types = [], o = "", t.ev = e.mainEl && e.mainEl.length ? e.mainEl.eq(0) : f, e.key ? (t.popupsCache[e.key] || (t.popupsCache[e.key] = {}), t.currTemplate = t.popupsCache[e.key]) : t.currTemplate = {}, t.st = n.extend(!0, {}, n.magnificPopup.defaults, e), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = l("bg").on("click" + u, function () {
                    t.close()
                }), t.wrap = l("wrap").attr("tabindex", -1).on("click" + u, function (n) {
                    t._checkIfClose(n.target) && t.close()
                }), t.container = l("container", t.wrap)), t.contentContainer = l("content"), t.st.preloader && (t.preloader = l("preloader", t.container, t.st.tLoading)), b = n.magnificPopup.modules, s = 0; s < b.length; s++) a = b[s], a = a.charAt(0).toUpperCase() + a.slice(1), t["init" + a].call(t);
            return i("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (r(rt, function (n, t, i, r) {
                i.close_replaceWith = st(r.type)
            }), o += " mfp-close-btn-in") : t.wrap.append(st())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflowX: "hidden",
                overflowY: "hidden"
            }) : t.wrap.css({
                top: 0,
                position: "fixed"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: f.height(),
                position: "fixed"
            }), t.st.enableEscapeKey && f.on("keyup" + u, function (n) {
                27 === n.keyCode && t.close()
            }), c.on("resize" + u, function () {
                t.updateSize()
            }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o), k = t.wH = c.height(), v = {}, t.fixedContentPos && t._hasScrollBar(k) && (d = t._getScrollbarSize(), d && (v.marginRight = d)), t.fixedContentPos && (t.isIE7 ? n("body, html").css("overflow-y", "hidden") : v.overflow = "visible"), y = t.st.mainClass, t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), i("BuildControls"), n("html").css(v), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || n(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                t.content ? (t._addClassToMFP(w), t._setFocus()) : t.bgOverlay.addClass(w);
                f.on("focusin" + u, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(k), i(ut), e
        },
        close: function () {
            t.isOpen && (i(wt), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(kt), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function () {
            var o, h, r, e;
            $("#Expandzoom").addClass("hide");
            $("body").removeClass("scrollhidden");
            $("#BathroomVisualizer").addClass("bth_visualizerwidth");
            $("#Expand-row").addClass("hide");
            $("#ExpandParagraph").addClass("hide");
            $("figcaption").removeClass("Expand-img-title").addClass("img-title");
            $("#tabsalign").addClass("tabs").removeClass("tab-Expand");
            document.getElementById("ExpandText").style.display = "none";
            $(".nav-tabs").removeClass("nav-tabs-left");
            $(".tab-content").hasClass("col-lg-6") ? ($(".nav-tabs").removeClass("col-sm-12 col-md-12 col-lg-6"), $(".tab-content").removeClass("col-sm-12 col-md-12 col-lg-6")) : ($(".nav-tabs").removeClass("col-sm-12 col-md-12 col-lg-5"), $(".tab-content").removeClass("col-sm-12 col-md-12 col-lg-5"));
            $(".subcategory-tab").addClass("row tab-scroll").removeClass("col-sm-12 col-md-12 tab-height");
            $(".subcategory-img").removeClass("col-xs-4 col-sm-2 col-md-2 col-lg-2").addClass("text-left");
            $(".nav-tabs").removeClass("col-sm-12 col-md-12 col-lg-6");
            $("#sharepopup").removeClass("sharepopupExpand").addClass("sharepopupbutton");
            $("#Sharebutton").removeClass("hidden");
            $("#Expand").removeClass("hidden");
            $(".tab-content").removeClass("space-top");
            o = parent !== window;
            h = null;
            o && $(".sharepopupbutton").css("left", "170px");
            $(".subcategory-img").find("img").hasClass("thumbimgmd") && $(".subcategory-img").find("img").removeClass("thumbimgmd").addClass("thumbimg");
            $(window).width() < 768 ? $("#dropdownarrow").css("left", "50%") : $("#dropdownarrow").css("left", "10%");
            i(s);
            r = kt + " " + w + " ";
            (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (r += t.st.mainClass + " "), t._removeClassFromMFP(r), t.fixedContentPos) && (e = {
                marginRight: ""
            }, t.isIE7 ? n("body, html").css("overflow-y", "hidden") : e.overflow = "", n("html").css(e));
            f.off("keyup" + u + " focusin" + u);
            t.ev.off(u);
            t.wrap.attr("class", "mfp-wrap").removeAttr("style");
            t.bgOverlay.attr("class", "mfp-bg");
            t.container.attr("class", "mfp-container");
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach();
            t.st.autoFocusLast && t._lastFocusedEl && n(t._lastFocusedEl).focus();
            t.currItem = null;
            t.content = null;
            t.currTemplate = null;
            t.prevHeight = 0;
            i(ti)
        },
        updateSize: function (n) {
            if (t.isIOS) {
                var u = document.documentElement.clientWidth / window.innerWidth,
                    r = window.innerHeight * u;
                t.wrap.css("height", r);
                t.wH = r
            } else t.wH = n || c.height();
            t.fixedContentPos || t.wrap.css("height", t.wH);
            i("Resize")
        },
        updateItemHTML: function () {
            var u = t.items[t.index],
                r, f, e;
            t.contentContainer.detach();
            t.content && t.content.detach();
            u.parsed || (u = t.parseEl(t.index));
            r = u.type;
            (i("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = u, t.currTemplate[r]) || (f = t.st[r] ? t.st[r].markup : !1, i("FirstMarkupParse", f), t.currTemplate[r] = f ? n(f) : !0);
            p && p !== u.type && t.container.removeClass("mfp-" + p + "-holder");
            e = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](u, t.currTemplate[r]);
            t.appendContent(e, r);
            u.preloaded = !0;
            i(bt, u);
            p = u.type;
            t.container.prepend(t.contentContainer);
            i("AfterChange")
        },
        appendContent: function (n, r) {
            t.content = n;
            n ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[r] === !0 ? t.content.find(".mfp-close").length || t.content.append(st()) : t.content = n : t.content = "";
            i(ii);
            t.container.addClass("mfp-" + r + "-holder");
            t.contentContainer.append(t.content)
        },
        parseEl: function (r) {
            var o, u = t.items[r],
                e, f;
            if (u.tagName ? u = {
                    el: n(u)
                } : (o = u.type, u = {
                    data: u,
                    src: u.src
                }), u.el) {
                for (e = t.types, f = 0; f < e.length; f++)
                    if (u.el.hasClass("mfp-" + e[f])) {
                        o = e[f];
                        break
                    }
                u.src = u.el.attr("data-mfp-src");
                u.src || (u.src = u.el.attr("href"))
            }
            return u.type = o || t.st.type || "inline", u.index = r, u.parsed = !0, t.items[r] = u, i("ElementParse", u), t.items[r]
        },
        addGroup: function (n, i) {
            var u = function (r) {
                    r.mfpEl = this;
                    t._openClick(r, n, i)
                },
                r;
            i || (i = {});
            r = "click.magnificPopup";
            i.mainEl = n;
            i.items ? (i.isObj = !0, n.off(r).on(r, u)) : (i.isObj = !1, i.delegate ? n.off(r).on(r, i.delegate, u) : (i.items = n, n.off(r).on(r, u)))
        },
        _openClick: function (i, r, u) {
            var e, s, o, f;
            if ($("body").addClass("scrollhidden"), $("#Expand-row").removeClass("hide"), $("#BathroomVisualizer").removeClass("bth_visualizerwidth"), $("figcaption").removeClass("img-title").addClass("Expand-img-title"), $("#Expandzoom").removeClass("hide"), $("#tabsalign").removeClass("tabs").addClass("tab-Expand"), document.getElementById("ExpandText").style.display = "block", $("#Expand").addClass("hidden"), $(".tab-content").addClass("col-sm-12 col-md-12 col-lg-6"), $(".subcategory-tab").removeClass("row tab-scroll").addClass("col-sm-12 col-md-12 tab-height"), $(".subcategory-img").addClass("col-xs-4 col-sm-2 col-md-2 col-lg-2").removeClass("text-left"), $(".nav-tabs").addClass("col-sm-12 col-md-12  col-lg-6 nav-tabs-left"), $("#sharepopup").addClass("sharepopupExpand").removeClass("sharepopupbutton"), $("#sharepopup").addClass("sharepopupExpand").removeClass("sharepopupbutton"), $(".tab-content").addClass("space-top"), e = parent !== window, s = null, e && $(".sharepopupExpand").css("left", "70px"), document.getElementById("ExpandText").style.display == "block" ? $(window).width() < 768 ? ($("#ExpandParagraph").removeClass("hide"), $("#Sharebutton").addClass("hidden"), $("#Expand").addClass("hidden"), $("#dropdownarrow").css("left", "90%"), document.getElementById("sharepopup").style.display == "block" && (document.getElementById("sharepopup").style.display = "none")) : ($("#ExpandParagraph").addClass("hide"), $("#Sharebutton").removeClass("hidden"), $("#Expand").addClass("hidden"), $("#dropdownarrow").css("left", "10%")) : $("#dropdownarrow").css("left", "50%"), $(window).width() >= 1600 ? ($(".nav-tabs").removeClass("col-lg-6").addClass("col-lg-5"), $(".tab-content").removeClass("col-lg-6").addClass("col-lg-5")) : ($(".nav-tabs").removeClass("col-lg-5").addClass("col-lg-6"), $(".tab-content").removeClass("col-lg-5").addClass("col-lg-6")), $(window).width() >= 500 && $(window).width() <= 767 ? $(".subcategory-img").removeClass("col-xs-4 col-sm-2 col-md-2 col-lg-2").addClass("col-xs-3 col-sm-2 col-md-2 col-lg-2") : $(".subcategory-img").removeClass("col-xs-3 col-sm-2 col-md-2 col-lg-2").addClass("col-xs-4 col-sm-2 col-md-2 col-lg-2"), $(window).width() >= 880 && $(window).width() <= 1199 && $(".subcategory-img").find("img").removeClass("thumbimg").addClass("thumbimgmd"), o = void 0 !== u.midClick ? u.midClick : n.magnificPopup.defaults.midClick, o || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                if (f = void 0 !== u.disableOn ? u.disableOn : n.magnificPopup.defaults.disableOn, f)
                    if (n.isFunction(f)) {
                        if (!f.call(t)) return !0
                    } else if (c.width() < f) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation());
                u.el = n(i.mfpEl);
                u.delegate && (u.items = r.find(u.delegate));
                t.open(u)
            }
        },
        updateStatus: function (n, r) {
            if (t.preloader) {
                it !== n && t.container.removeClass("mfp-s-" + it);
                r || "loading" !== n || (r = t.st.tLoading);
                var u = {
                    status: n,
                    text: r
                };
                i("UpdateStatus", u);
                n = u.status;
                r = u.text;
                t.preloader.html(r);
                t.preloader.find("a").on("click", function (n) {
                    n.stopImmediatePropagation()
                });
                t.container.addClass("mfp-s-" + n);
                it = n
            }
        },
        _checkIfClose: function (i) {
            if (!n(i).hasClass(et)) {
                var r = t.st.closeOnContentClick,
                    u = t.st.closeOnBgClick;
                if (r && u || !t.content || n(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || n.contains(t.content[0], i)) {
                    if (r) return !0
                } else if (u && n.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (n) {
            t.bgOverlay.addClass(n);
            t.wrap.addClass(n)
        },
        _removeClassFromMFP: function (n) {
            this.bgOverlay.removeClass(n);
            t.wrap.removeClass(n)
        },
        _hasScrollBar: function (n) {
            return (t.isIE7 ? f.height() : document.body.scrollHeight) > (n || c.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (i) {
            if (i.target !== t.wrap[0] && !n.contains(t.wrap[0], i.target)) return (t._setFocus(), !1)
        },
        _parseMarkup: function (t, r, f) {
            var e;
            f.data && (r = n.extend(f.data, r));
            i(rt, [t, r, f]);
            n.each(r, function (i, r) {
                var f, o;
                if (void 0 === r || r === !1) return !0;
                (e = i.split("_"), e.length > 1) ? (f = t.find(u + "-" + e[0]), f.length > 0 && (o = e[1], "replaceWith" === o ? f[0] !== r[0] && f.replaceWith(r) : "img" === o ? f.is("img") ? f.attr("src", r) : f.replaceWith(n("<img>").attr("src", r).attr("class", f.attr("class"))) : f.attr(e[1], r))) : t.find(u + "-" + i).html(r)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var n = document.createElement("div");
                n.style.cssText = "width: 99px; height: 99px; overflow-y:hidden; position: absolute;";
                document.body.appendChild(n);
                t.scrollbarSize = 0;
                document.body.removeChild(n)
            }
            return t.scrollbarSize
        }
    };
    n.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function (t, i) {
            return ht(), t = t ? n.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function () {
            return n.magnificPopup.instance && n.magnificPopup.instance.close()
        },
        registerModule: function (t, i) {
            i.options && (n.magnificPopup.defaults[t] = i.options);
            n.extend(this.proto, i.proto);
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">??<\/button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    };
    n.fn.magnificPopup = function (i) {
        var r, u, f, e;
        return ht(), r = n(this), "string" == typeof i ? "open" === i ? (f = ot ? r.data("magnificPopup") : r[0].magnificPopup, e = parseInt(arguments[1], 10) || 0, f.items ? u = f.items[e] : (u = r, f.delegate && (u = u.find(f.delegate)), u = u.eq(e)), t._openClick({
            mfpEl: u
        }, r, f)) : t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1)) : (i = n.extend(!0, {}, i), ot ? r.data("magnificPopup", i) : r[0].magnificPopup = i, t.addGroup(r, i)), r
    };
    g = "inline";
    ct = function () {
        d && (k.after(d.addClass(a)).detach(), d = null)
    };
    n.magnificPopup.registerModule(g, {
        options: {
            hiddenClass: "show",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push(g);
                r(s + "." + g, function () {
                    ct()
                })
            },
            getInline: function (i, r) {
                var f, u, e;
                return (ct(), i.src) ? (f = t.st.inline, u = n(i.src), u.length ? (e = u[0].parentNode, e && e.tagName && (k || (a = f.hiddenClass, k = l(a), a = "mfp-" + a), d = u.after(k).detach().removeClass(a)), t.updateStatus("ready")) : (t.updateStatus("error", f.tNotFound), u = n("<div>")), i.inlineElement = u, u) : (t.updateStatus("ready"), t._parseMarkup(r, {}, i), r)
            }
        }
    });
    var v, y = "ajax",
        lt = function () {
            v && n(document.body).removeClass(v)
        },
        dt = function () {
            lt();
            t.req && t.req.abort()
        };
    n.magnificPopup.registerModule(y, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content<\/a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                t.types.push(y);
                v = t.st.ajax.cursor;
                r(s + "." + y, dt);
                r("BeforeChange." + y, dt)
            },
            getAjax: function (r) {
                v && n(document.body).addClass(v);
                t.updateStatus("loading");
                var u = n.extend({
                    url: r.src,
                    success: function (u, f, e) {
                        var o = {
                            data: u,
                            xhr: e
                        };
                        i("ParseAjax", o);
                        t.appendContent(n(o.data), y);
                        r.finished = !0;
                        lt();
                        t._setFocus();
                        setTimeout(function () {
                            t.wrap.addClass(w)
                        }, 16);
                        t.updateStatus("ready");
                        i("AjaxContentAdded")
                    },
                    error: function () {
                        lt();
                        r.finished = r.loadError = !0;
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", r.src))
                    }
                }, t.st.ajax.settings);
                return t.req = n.ajax(u), ""
            }
        }
    });
    gt = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (n.isFunction(r)) return r.call(t, i);
            if (i.el) return i.el.attr(r) || ""
        }
        return ""
    };
    n.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"><\/div><figure><div class="mfp-img"><\/div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"><\/div><div class="mfp-counter"><\/div><\/div><\/figcaption><\/figure><\/div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image<\/a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var i = t.st.image,
                    f = ".image";
                t.types.push("image");
                r(ut + f, function () {
                    "image" === t.currItem.type && i.cursor && n(document.body).addClass(i.cursor)
                });
                r(s + f, function () {
                    i.cursor && n(document.body).removeClass(i.cursor);
                    c.off("resize" + u)
                });
                r("Resize" + f, t.resizeImage);
                t.isLowIE && r("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var n = t.currItem,
                    i;
                n && n.img && t.st.image.verticalFit && (i = 0, t.isLowIE && (i = parseInt(n.img.css("padding-top"), 10) + parseInt(n.img.css("padding-bottom"), 10)), n.img.css("max-height", t.wH - i))
            },
            _onImageHasSize: function (n) {
                n.img && (n.hasSize = !0, e && clearInterval(e), n.isCheckingImgSize = !1, i("ImageHasSize", n), n.imgHidden && (t.content && t.content.removeClass("mfp-loading"), n.imgHidden = !1))
            },
            findImageSize: function (n) {
                var i = 0,
                    u = n.img[0],
                    r = function (f) {
                        e && clearInterval(e);
                        e = setInterval(function () {
                            return u.naturalWidth > 0 ? void t._onImageHasSize(n) : (i > 200 && clearInterval(e), i++, void(3 === i ? r(10) : 40 === i ? r(50) : 100 === i && r(500)))
                        }, f)
                    };
                r(1)
            },
            getImage: function (r, u) {
                var o = 0,
                    s = function () {
                        r && (r.img[0].complete ? (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("ready")), r.hasSize = !0, r.loaded = !0, i("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(s, 100) : h()))
                    },
                    h = function () {
                        r && (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("error", c.tError.replace("%url%", r.src))), r.hasSize = !0, r.loaded = !0, r.loadError = !0)
                    },
                    c = t.st.image,
                    l = u.find(".mfp-img"),
                    f;
                return l.length && (f = document.createElement("img"), f.className = "mfp-img", r.el && r.el.find("img").length && (f.alt = r.el.find("img").attr("alt")), r.img = n(f).on("load.mfploader", s).on("error.mfploader", h), f.src = r.src, l.is("img") && (r.img = r.img.clone()), f = r.img[0], f.naturalWidth > 0 ? r.hasSize = !0 : f.width || (r.hasSize = !1)), t._parseMarkup(u, {
                    title: gt(r),
                    img_replaceWith: r.img
                }, r), t.resizeImage(), r.hasSize ? (e && clearInterval(e), r.loadError ? (u.addClass("mfp-loading"), t.updateStatus("error", c.tError.replace("%url%", r.src))) : (u.removeClass("mfp-loading"), t.updateStatus("ready")), u) : (t.updateStatus("loading"), r.loading = !0, r.hasSize || (r.imgHidden = !0, u.addClass("mfp-loading"), t.findImageSize(r)), u)
            }
        }
    });
    ni = function () {
        return void 0 === at && (at = void 0 !== document.createElement("p").style.MozTransform), at
    };
    n.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (n) {
                return n.is("img") ? n : n.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var u, f = t.st.zoom,
                    o = ".zoom";
                if (f.enabled && t.supportsTransition) {
                    var e, n, c = f.duration,
                        l = function (n) {
                            var r = n.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                u = "all " + f.duration / 1e3 + "s " + f.easing,
                                t = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "show"
                                },
                                i = "transition";
                            return t["-webkit-" + i] = t["-moz-" + i] = t["-o-" + i] = t[i] = u, r.css(t), r
                        },
                        h = function () {
                            t.content.css("visibility", "visible")
                        };
                    r("BuildControls" + o, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(e), t.content.css("visibility", "show"), u = t._getItemToZoom(), !u) return void h();
                            n = l(u);
                            n.css(t._getOffset());
                            t.wrap.append(n);
                            e = setTimeout(function () {
                                n.css(t._getOffset(!0));
                                e = setTimeout(function () {
                                    h();
                                    setTimeout(function () {
                                        n.remove();
                                        u = n = null;
                                        i("ZoomAnimationEnded")
                                    }, 16)
                                }, c)
                            }, 16)
                        }
                    });
                    r(wt + o, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(e), t.st.removalDelay = c, !u) {
                                if (u = t._getItemToZoom(), !u) return;
                                n = l(u)
                            }
                            n.css(t._getOffset(!0));
                            t.wrap.append(n);
                            t.content.css("visibility", "show");
                            setTimeout(function () {
                                n.css(t._getOffset())
                            }, 16)
                        }
                    });
                    r(s + o, function () {
                        t._allowZoom() && (h(), n && n.remove(), u = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function (i) {
                var r, u;
                r = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var f = r.offset(),
                    e = parseInt(r.css("padding-top"), 10),
                    o = parseInt(r.css("padding-bottom"), 10);
                return f.top -= n(window).scrollTop() - e, u = {
                    width: r.width(),
                    height: (ot ? r.innerHeight() : r[0].offsetHeight) - o - e
                }, ni() ? u["-moz-transform"] = u.transform = "translate(" + f.left + "px,0px)" : (u.left = f.left, u.top = f.top), u
            }
        }
    });
    var h = "iframe",
        ui = "//about:blank",
        vt = function (n) {
            if (t.currTemplate[h]) {
                var i = t.currTemplate[h].find("iframe");
                i.length && (n || (i[0].src = ui), t.isIE8 && i.css("display", n ? "block" : "none"))
            }
        };
    n.magnificPopup.registerModule(h, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"><\/div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen><\/iframe><\/div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                t.types.push(h);
                r("BeforeChange", function (n, t, i) {
                    t !== i && (t === h ? vt() : i === h && vt(!0))
                });
                r(s + "." + h, function () {
                    vt()
                })
            },
            getIframe: function (i, r) {
                var u = i.src,
                    f = t.st.iframe,
                    e;
                return n.each(f.patterns, function () {
                    if (u.indexOf(this.index) > -1) return (this.id && (u = "string" == typeof this.id ? u.substr(u.lastIndexOf(this.id) + this.id.length, u.length) : this.id.call(this, u)), u = this.src.replace("%id%", u), !1)
                }), e = {}, f.srcAction && (e[f.srcAction] = u), t._parseMarkup(r, e, i), t.updateStatus("ready"), r
            }
        }
    });
    nt = function (n) {
        var i = t.items.length;
        return n > i - 1 ? n - i : 0 > n ? i + n : n
    };
    yt = function (n, t, i) {
        return n.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    n.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><\/button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var u = t.st.gallery,
                    i = ".mfp-gallery";
                return t.direction = !0, u && u.enabled ? (o += " mfp-gallery", r(ut + i, function () {
                    u.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
                        if (t.items.length > 1) return (t.next(), !1)
                    });
                    f.on("keydown" + i, function (n) {
                        37 === n.keyCode ? t.prev() : 39 === n.keyCode && t.next()
                    })
                }), r("UpdateStatus" + i, function (n, i) {
                    i.text && (i.text = yt(i.text, t.currItem.index, t.items.length))
                }), r(rt + i, function (n, i, r, f) {
                    var e = t.items.length;
                    r.counter = e > 1 ? yt(u.tCounter, f.index, e) : ""
                }), r("BuildControls" + i, function () {
                    if (t.items.length > 1 && u.arrows && !t.arrowLeft) {
                        var i = u.arrowMarkup,
                            r = t.arrowLeft = n(i.replace(/%title%/gi, u.tPrev).replace(/%dir%/gi, "left")).addClass(et),
                            f = t.arrowRight = n(i.replace(/%title%/gi, u.tNext).replace(/%dir%/gi, "right")).addClass(et);
                        r.click(function () {
                            t.prev()
                        });
                        f.click(function () {
                            t.next()
                        });
                        t.container.append(r.add(f))
                    }
                }), r(bt + i, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout);
                    t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages();
                        t._preloadTimeout = null
                    }, 16)
                }), void r(s + i, function () {
                    f.off(i);
                    t.wrap.off("click" + i);
                    t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function () {
                t.direction = !0;
                t.index = nt(t.index + 1);
                t.updateItemHTML()
            },
            prev: function () {
                t.direction = !1;
                t.index = nt(t.index - 1);
                t.updateItemHTML()
            },
            goTo: function (n) {
                t.direction = n >= t.index;
                t.index = n;
                t.updateItemHTML()
            },
            preloadNearbyImages: function () {
                for (var i = t.st.gallery.preload, r = Math.min(i[0], t.items.length), u = Math.min(i[1], t.items.length), n = 1; n <= (t.direction ? u : r); n++) t._preloadItem(t.index + n);
                for (n = 1; n <= (t.direction ? r : u); n++) t._preloadItem(t.index - n)
            },
            _preloadItem: function (r) {
                if (r = nt(r), !t.items[r].preloaded) {
                    var u = t.items[r];
                    u.parsed || (u = t.parseEl(r));
                    i("LazyLoad", u);
                    "image" === u.type && (u.img = n('<img class="mfp-img" />').on("load.mfploader", function () {
                        u.hasSize = !0
                    }).on("error.mfploader", function () {
                        u.hasSize = !0;
                        u.loadError = !0;
                        i("LazyLoadError", u)
                    }).attr("src", u.src));
                    u.preloaded = !0
                }
            }
        }
    });
    tt = "retina";
    n.magnificPopup.registerModule(tt, {
        options: {
            replaceSrc: function (n) {
                return n.src.replace(/\.\w+$/, function (n) {
                    return "@2x" + n
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var i = t.st.retina,
                        n = i.ratio;
                    n = isNaN(n) ? n() : n;
                    n > 1 && (r("ImageHasSize." + tt, function (t, i) {
                        i.img.css({
                            "max-width": i.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), r("ElementParse." + tt, function (t, r) {
                        r.src = i.replaceSrc(r, n)
                    }))
                }
            }
        }
    });
    ht()
});
var TabCurrentStatus = "backsplash",
    EmaildescArr = "",
    wallfloortileproductname = null,
    wallfloortileimagepath = null,
    wallfloortilethumbimagepath = null,
    wallfloortilehref = null,
    windowwidth = null,
    canvas = document.getElementById("bhCanvas"),
    context = canvas.getContext("2d"),
    canvas1 = document.getElementById("bhCanvas"),
    context1 = canvas.getContext("2d");
$(document).ready(function () {
    var n = parent !== window;
    n && ($("#visualizercountsection").addClass("hide"), $("#ancFacebook").addClass("hide"), $("#ancTwitter").addClass("hide"), $("#ancpinit").addClass("hide"), $("#ancgplus").addClass("hide"), $(window).width() >= 790 ? ($(".sharepopupbutton").css("max-width", "115px"), $(".sharepopupbutton").css("left", "170px")) : $(window).width() < 790 && ($(".popover-content").css("width", "140px"), $(".popover-content").css("margin-left", "0%"), $(".sharepopupbutton").css("left", "5px")));
    initCanvas();
    tabChange(TabCurrentStatus);
    $("#email").hide();
    $(".style-filter").hide()
});
$(".nav-tabs input").on("ifChecked ifUnchecked", function () {
    var n = null;
    $("input:checkbox:checked").length ? ($("#backsplashfilter").removeClass("hidden"), $("#walltilefilter").removeClass("hidden"), $("#floortilefilter").removeClass("hidden"), $('div[data-subcategory ="backsplash"]').hide(), $('div[data-subcategory ="walltile"]').hide(), $('div[data-subcategory ="floortile"]').hide(), $("input:checkbox:checked").each(function () {
        var t = $(this).val();
        $.each(JSON.parse(OptionsList), function (i, r) {
            r.OptionID == t ? r.OptionGroupName.toString().toLowerCase() != "style" ? (n = !0, $('div[data-filter *="' + r.ProductID + '"]').attr("data-subcategory") == "backsplash" ? $("#backsplashfilter").addClass("hidden") : $('div[data-filter *="' + r.ProductID + '"]').attr("data-subcategory") == "walltile" ? $("#walltilefilter").addClass("hidden") : $('div[data-filter *="' + r.ProductID + '"]').attr("data-subcategory") == "floortile" && $("#floortilefilter").addClass("hidden"), $('div[data-filter *="' + r.ProductID + '"]').show()) : r.OptionGroupName.toString().toLowerCase() == "style" && ($("#floortilefilter").addClass("hidden"), n == null && ($("#backsplashfilter").addClass("hidden"), $("#walltilefilter").addClass("hidden"), $('div[data-subcategory ="backsplash"]').show(), $('div[data-subcategory ="walltile"]').show()), $('div[data-filter *="' + r.ProductID + '"]').show()) : $("input:checkbox:checked").length == 1 && $("#wallfloor").children().hasClass("checked") && ($('div[data-subcategory ="backsplash"]').show(), $('div[data-subcategory ="walltile"]').show(), $('div[data-subcategory ="floortile"]').show(), $("#backsplashfilter").addClass("hidden"), $("#walltilefilter").addClass("hidden"), $("#floortilefilter").addClass("hidden"))
        })
    })) : ($('div[data-subcategory ="backsplash"]').show(), $('div[data-subcategory ="walltile"]').show(), $('div[data-subcategory ="floortile"]').show(), $("#backsplashfilter").addClass("hidden"), $("#walltilefilter").addClass("hidden"), $("#floortilefilter").addClass("hidden"))
});
var imagepath = "https://cdn.msisurfaces.com/images/visualizers/bathroom/",
    imgHeight = 0,
    imgWidth = 0,
    BacksplashId = 3228,
    WallTileId = 2955,
    FloorTileId = 3057,
    locationpath = window.location.href;
locationpath.has("productid") && qproductid != 0 && (CategoryID = qsubcategoryname.toString().replace(/\s/g, "").concat("Id"), CategoryID == "BacksplashId" ? BacksplashId = qproductid : CategoryID == "WallTileId" ? WallTileId = qproductid : CategoryID == "FloorTileId" && (FloorTileId = qproductid));
$("#" + BacksplashId).addClass("selected-prod");
$("#" + WallTileId).addClass("selected-prod");
$("#" + FloorTileId).addClass("selected-prod");
sources = {
    base: imagepath + "bathroom-base.png",
    backsplash: $("#" + BacksplashId).attr("data-src").replace("thumb", "base").replace("jpg", "png"),
    walltile: $("#" + WallTileId).attr("data-src").replace("thumb", "base").replace("jpg", "png"),
    floortile: $("#" + FloorTileId).attr("data-src").replace("thumb", "base").replace("jpg", "png")
};
$(".backsplashprodname,.backsplashprodid").text($("#" + BacksplashId).attr("alt"));
$(".backsplashprodname,.backsplashprodid").attr({
    href: "" + $("#" + BacksplashId).parent().attr("data-href")
});
$("#backsplashthumbimg").attr({
    src: $("#" + BacksplashId).attr("data-src"),
    alt: $("#" + BacksplashId).attr("alt")
});
$(".walltileprodname,.walltileprodid").text($("#" + WallTileId).attr("alt"));
$(".walltileprodname,.walltileprodid").attr({
    href: "" + $("#" + WallTileId).parent().attr("data-href")
});
$("#walltilethumbimg").attr({
    src: $("#" + WallTileId).attr("data-src"),
    alt: $("#" + WallTileId).attr("alt")
});
wallfloortilethumbimagepath = $("#" + WallTileId).attr("data-src");
wallfloortileimagepath = $("#" + WallTileId).attr("data-src").replace("thumb", "base").replace("jpg", "png");
wallfloortileproductname = $("#" + WallTileId).attr("alt");
wallfloortilehref = "" + $("#" + WallTileId).parent().attr("data-href");
$(".floortileprodname,.floortileprodid").text($("#" + FloorTileId).attr("alt"));
$(".floortileprodname,.floortileprodid").attr({
    href: "" + $("#" + FloorTileId).parent().attr("data-href")
});
$("#floortilethumbimg").attr({
    src: $("#" + FloorTileId).attr("data-src"),
    alt: $("#" + FloorTileId).attr("alt")
});
images = {};
cnt = 0;
$("#ToIds").on("change focus input", function () {
    $("#ToIds").val() != null && $("#ToIds").val() != "" && (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#ToIds").val().toLowerCase()) ? $("#email").hide() : $("#email").show())
});
var product_name = "My Bathroom Design",
    share_url = "/bathroom-visualizer/",
    share_image = null,
    share_capt = "MSI | Bathroom Visualizer",
    description = "Backsplash : " + $(".backsplashprodname").text() + ", Floor : " + $(".walltileprodname").text() + ", Cabinet : " + $(".floortileprodname").text() + "";
window.fbAsyncInit = function () {
        FB.init({
            appId: "748504341861557",
            status: !0,
            xfbml: !0,
            cookie: !0,
            version: "2.2v"
        })
    },
    function (n, t, i) {
        var r, u = n.getElementsByTagName(t)[0];
        n.getElementById(i) || (r = n.createElement(t), r.id = i, r.src = "bundles/all.js", u.parentNode.insertBefore(r, u))
    }(document, "script", "facebook-jssdk");
! function (n, t, i) {
    var r, u = n.getElementsByTagName(t)[0];
    n.getElementById(i) || (r = n.createElement(t), r.id = i, r.src = "https://platform.twitter.com/widgets.js", u.parentNode.insertBefore(r, u))
}(document, "script", "twitter-wjs"),
function () {
    var n, t;
    window._pa = window._pa || {};
    n = document.createElement("script");
    n.type = "text/javascript";
    n.async = !0;
    n.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//tag.perfectaudience.com/serve/545808daef2cd47da8000061.js";
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(n, t)
}();
window.pAsyncInit = function () {
        PDK.init({
            appId: "<your app-id>",
            cookie: !0
        })
    },
    function (n, t, i) {
        var r, u = n.getElementsByTagName(t)[0];
        n.getElementById(i) || (r = n.createElement(t), r.id = i, r.src = "bundles/sdk.js", u.parentNode.insertBefore(r, u))
    }(document, "script", "pinterest-jssdk");
editor = CKEDITOR.replace("editor", {
    height: "200",
    scroll: "auto"
});
document.addEventListener("DOMContentLoaded", function () {
    function i(n, t, i) {
        for (var r = 0; r < n.length; r++) n[r].classList[i](t)
    }
    for (var n = document.getElementsByClassName("accordion"), r = document.getElementsByClassName("panel"), t = 0; t < n.length; t++) n[t].onclick = function () {
        var t = !this.classList.contains("active");
        i(n, "active", "remove");
        i(r, "show", "remove");
        t && (this.classList.toggle("active"), this.nextElementSibling.classList.toggle("show"))
    }
});
$(window).resize(function () {
    var n = $("html").height();
    window.parent.postMessage(["setHeight", n], "*");
    windowwidth = $(window).width();
    tabbuttons(windowwidth)
});
window.onload = function () {
    var n = $("html").height();
    window.parent.postMessage(["setHeight", n], "*");
    windowwidth = $(window).width();
    tabbuttons(windowwidth)
};
$("#wall-floor").on("ifChecked ifUnchecked", function () {
    this.checked ? (sources.walltile = sources.floortile.replace("floor-tile", "floor-wall-tile"), $("#walltilethumbimg").attr("src", $("#floortilethumbimg").attr("src")), $(".walltileprodname,.walltileprodid").text($(".floortileprodname").text()), $(".walltileprodname,.walltileprodid").attr({
        href: "" + $("#" + FloorTileId).parent().attr("data-href")
    })) : (sources.walltile = wallfloortileimagepath, $("#walltilethumbimg").attr("src", wallfloortilethumbimagepath), $(".walltileprodname").text(wallfloortileproductname), $(".walltileprodid").text(wallfloortileproductname), $(".walltileprodname").attr({
        href: wallfloortilehref
    }), $(".walltileprodid").attr({
        href: wallfloortilehref
    }));
    initCanvas();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#zoom").offset().top
    }, 2e3)
});
$(".mp-popup").magnificPopup({
    type: "inline",
    mainClass: "animated slideInUp"
})