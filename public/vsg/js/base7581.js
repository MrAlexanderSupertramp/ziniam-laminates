if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (n) {
	"use strict";
	var t = n.fn.jquery.split(" ")[0].split(".");
	if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery); + function (n) {
	"use strict";

	function t() {
		var i = document.createElement("bootstrap"),
			n = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var t in n)
			if (void 0 !== i.style[t]) return {
				end: n[t]
			};
		return !1
	}
	n.fn.emulateTransitionEnd = function (t) {
		var i = !1,
			u = this,
			r;
		n(this).one("bsTransitionEnd", function () {
			i = !0
		});
		return r = function () {
			i || n(u).trigger(n.support.transition.end)
		}, setTimeout(r, t), this
	};
	n(function () {
		n.support.transition = t();
		n.support.transition && (n.event.special.bsTransitionEnd = {
			bindType: n.support.transition.end,
			delegateType: n.support.transition.end,
			handle: function (t) {
				if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery); + function (n) {
	"use strict";

	function u(i) {
		return this.each(function () {
			var r = n(this),
				u = r.data("bs.alert");
			u || r.data("bs.alert", u = new t(this));
			"string" == typeof i && u[i].call(r)
		})
	}
	var i = '[data-dismiss="alert"]',
		t = function (t) {
			n(t).on("click", i, this.close)
		},
		r;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 150;
	t.prototype.close = function (i) {
		function e() {
			r.detach().trigger("closed.bs.alert").remove()
		}
		var f = n(this),
			u = f.attr("data-target"),
			r;
		u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
		r = n("#" === u ? [] : u);
		i && i.preventDefault();
		r.length || (r = f.closest(".alert"));
		r.trigger(i = n.Event("close.bs.alert"));
		i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
	};
	r = n.fn.alert;
	n.fn.alert = u;
	n.fn.alert.Constructor = t;
	n.fn.alert.noConflict = function () {
		return n.fn.alert = r, this
	};
	n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function (n) {
	"use strict";

	function i(i) {
		return this.each(function () {
			var u = n(this),
				r = u.data("bs.button"),
				f = "object" == typeof i && i;
			r || u.data("bs.button", r = new t(this, f));
			"toggle" == i ? r.toggle() : i && r.setState(i)
		})
	}
	var t = function (i, r) {
			this.$element = n(i);
			this.options = n.extend({}, t.DEFAULTS, r);
			this.isLoading = !1
		},
		r;
	t.VERSION = "3.3.7";
	t.DEFAULTS = {
		loadingText: "loading..."
	};
	t.prototype.setState = function (t) {
		var i = "disabled",
			r = this.$element,
			f = r.is("input") ? "val" : "html",
			u = r.data();
		t += "Text";
		null == u.resetText && r.data("resetText", r[f]());
		setTimeout(n.proxy(function () {
			r[f](null == u[t] ? this.options[t] : u[t]);
			"loadingText" == t ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
		}, this), 0)
	};
	t.prototype.toggle = function () {
		var t = !0,
			i = this.$element.closest('[data-toggle="buttons"]'),
			n;
		i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
	};
	r = n.fn.button;
	n.fn.button = i;
	n.fn.button.Constructor = t;
	n.fn.button.noConflict = function () {
		return n.fn.button = r, this
	};
	n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
		var r = n(t.target).closest(".btn");
		i.call(r, "toggle");
		n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
		n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
	})
}(jQuery); + function (n) {
	"use strict";

	function i(i) {
		return this.each(function () {
			var u = n(this),
				r = u.data("bs.carousel"),
				f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
				e = "string" == typeof i ? i : f.slide;
			r || u.data("bs.carousel", r = new t(this, f));
			"number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
		})
	}
	var t = function (t, i) {
			this.$element = n(t);
			this.$indicators = this.$element.find(".carousel-indicators");
			this.options = i;
			this.paused = null;
			this.sliding = null;
			this.interval = null;
			this.$active = null;
			this.$items = null;
			this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
			"hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
		},
		u, r;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 600;
	t.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	};
	t.prototype.keydown = function (n) {
		if (!/input|textarea/i.test(n.target.tagName)) {
			switch (n.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			n.preventDefault()
		}
	};
	t.prototype.cycle = function (t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
	};
	t.prototype.getItemIndex = function (n) {
		return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
	};
	t.prototype.getItemForDirection = function (n, t) {
		var i = this.getItemIndex(t),
			f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1,
			r, u;
		return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
	};
	t.prototype.to = function (n) {
		var i = this,
			t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if (!(n > this.$items.length - 1 || n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
			i.to(n)
		}) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
	};
	t.prototype.pause = function (t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	};
	t.prototype.next = function () {
		if (!this.sliding) return this.slide("next")
	};
	t.prototype.prev = function () {
		if (!this.sliding) return this.slide("prev")
	};
	t.prototype.slide = function (i, r) {
		var e = this.$element.find(".item.active"),
			u = r || this.getItemForDirection(i, e),
			l = this.interval,
			f = "next" == i ? "left" : "right",
			a = this,
			o, s, h, c;
		return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
			relatedTarget: o,
			direction: f
		}), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
			relatedTarget: o,
			direction: f
		}), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function () {
			u.removeClass([i, f].join(" ")).addClass("active");
			e.removeClass(["active", f].join(" "));
			a.sliding = !1;
			setTimeout(function () {
				a.$element.trigger(c)
			}, 0)
		}).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
	};
	u = n.fn.carousel;
	n.fn.carousel = i;
	n.fn.carousel.Constructor = t;
	n.fn.carousel.noConflict = function () {
		return n.fn.carousel = u, this
	};
	r = function (t) {
		var o, r = n(this),
			u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
			e, f;
		u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
	};
	n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
	n(window).on("load", function () {
		n('[data-ride="carousel"]').each(function () {
			var t = n(this);
			i.call(t, t.data())
		})
	})
}(jQuery); + function (n) {
	"use strict";

	function r(t) {
		var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return n(r)
	}

	function i(i) {
		return this.each(function () {
			var u = n(this),
				r = u.data("bs.collapse"),
				f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
			!r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
			r || u.data("bs.collapse", r = new t(this, f));
			"string" == typeof i && r[i]()
		})
	}
	var t = function (i, r) {
			this.$element = n(i);
			this.options = n.extend({}, t.DEFAULTS, r);
			this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
			this.transitioning = null;
			this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
			this.options.toggle && this.toggle()
		},
		u;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 350;
	t.DEFAULTS = {
		toggle: !0
	};
	t.prototype.dimension = function () {
		var n = this.$element.hasClass("width");
		return n ? "width" : "height"
	};
	t.prototype.show = function () {
		var f, r, e, u, o, s;
		if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
			if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function () {
					this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
					this.transitioning = 0;
					this.$element.trigger("shown.bs.collapse")
				}, !n.support.transition) return o.call(this);
			s = n.camelCase(["scroll", u].join("-"));
			this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
		}
	};
	t.prototype.hide = function () {
		var r, i, u;
		if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function () {
			this.transitioning = 0;
			this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
		}, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
	};
	t.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	t.prototype.getParent = function () {
		return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function (t, i) {
			var u = n(i);
			this.addAriaAndCollapsedClass(r(u), u)
		}, this)).end()
	};
	t.prototype.addAriaAndCollapsedClass = function (n, t) {
		var i = n.hasClass("in");
		n.attr("aria-expanded", i);
		t.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	u = n.fn.collapse;
	n.fn.collapse = i;
	n.fn.collapse.Constructor = t;
	n.fn.collapse.noConflict = function () {
		return n.fn.collapse = u, this
	};
	n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
		var u = n(this);
		u.attr("data-target") || t.preventDefault();
		var f = r(u),
			e = f.data("bs.collapse"),
			o = e ? "toggle" : u.data();
		i.call(f, o)
	})
}(jQuery); + function (n) {
	"use strict";

	function r(t) {
		var i = t.attr("data-target"),
			r;
		return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
	}

	function u(t) {
		t && 3 === t.which || (n(o).remove(), n(i).each(function () {
			var u = n(this),
				i = r(u),
				f = {
					relatedTarget: this
				};
			i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
		}))
	}

	function e(i) {
		return this.each(function () {
			var r = n(this),
				u = r.data("bs.dropdown");
			u || r.data("bs.dropdown", u = new t(this));
			"string" == typeof i && u[i].call(r)
		})
	}
	var o = ".dropdown-backdrop",
		i = '[data-toggle="dropdown"]',
		t = function (t) {
			n(t).on("click.bs.dropdown", this.toggle)
		},
		f;
	t.VERSION = "3.3.7";
	t.prototype.toggle = function (t) {
		var f = n(this),
			i, o, e;
		if (!f.is(".disabled, :disabled")) {
			if (i = r(f), o = i.hasClass("open"), u(), !o) {
				if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {
						relatedTarget: this
					}, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
				f.trigger("focus").attr("aria-expanded", "true");
				i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
			}
			return !1
		}
	};
	t.prototype.keydown = function (t) {
		var e, o, s, h, f, u;
		if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
			if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
			h = " li:not(.disabled):visible a";
			f = o.find(".dropdown-menu" + h);
			f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
		}
	};
	f = n.fn.dropdown;
	n.fn.dropdown = e;
	n.fn.dropdown.Constructor = t;
	n.fn.dropdown.noConflict = function () {
		return n.fn.dropdown = f, this
	};
	n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function (n) {
		n.stopPropagation()
	}).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function (n) {
	"use strict";

	function i(i, r) {
		return this.each(function () {
			var f = n(this),
				u = f.data("bs.modal"),
				e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
			u || f.data("bs.modal", u = new t(this, e));
			"string" == typeof i ? u[i](r) : e.show && u.show(r)
		})
	}
	var t = function (t, i) {
			this.options = i;
			this.$body = n(document.body);
			this.$element = n(t);
			this.$dialog = this.$element.find(".modal-dialog");
			this.$backdrop = null;
			this.isShown = null;
			this.originalBodyPad = null;
			this.scrollbarWidth = 0;
			this.ignoreBackdropClick = !1;
			this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function () {
				this.$element.trigger("loaded.bs.modal")
			}, this))
		},
		r;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 300;
	t.BACKDROP_TRANSITION_DURATION = 150;
	t.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	};
	t.prototype.toggle = function (n) {
		return this.isShown ? this.hide() : this.show(n)
	};
	t.prototype.show = function (i) {
		var r = this,
			u = n.Event("show.bs.modal", {
				relatedTarget: i
			});
		this.$element.trigger(u);
		this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			r.$element.one("mouseup.dismiss.bs.modal", function (t) {
				n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var f = n.support.transition && r.$element.hasClass("fade"),
				u;
			r.$element.parent().length || r.$element.appendTo(r.$body);
			r.$element.show().scrollTop(0);
			r.adjustDialog();
			f && r.$element[0].offsetWidth;
			r.$element.addClass("in");
			r.enforceFocus();
			u = n.Event("shown.bs.modal", {
				relatedTarget: i
			});
			f ? r.$dialog.one("bsTransitionEnd", function () {
				r.$element.trigger("focus").trigger(u)
			}).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
		}))
	};
	t.prototype.hide = function (i) {
		i && i.preventDefault();
		i = n.Event("hide.bs.modal");
		this.$element.trigger(i);
		this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
	};
	t.prototype.enforceFocus = function () {
		n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function (n) {
			document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
		}, this))
	};
	t.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function (n) {
			27 == n.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	};
	t.prototype.resize = function () {
		this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
	};
	t.prototype.hideModal = function () {
		var n = this;
		this.$element.hide();
		this.backdrop(function () {
			n.$body.removeClass("modal-open");
			n.resetAdjustments();
			n.resetScrollbar();
			n.$element.trigger("hidden.bs.modal")
		})
	};
	t.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove();
		this.$backdrop = null
	};
	t.prototype.backdrop = function (i) {
		var e = this,
			f = this.$element.hasClass("fade") ? "fade" : "",
			r, u;
		if (this.isShown && this.options.backdrop) {
			if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function (n) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
			r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
		} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function () {
			e.removeBackdrop();
			i && i()
		}, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
	};
	t.prototype.handleUpdate = function () {
		this.adjustDialog()
	};
	t.prototype.adjustDialog = function () {
		var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
		})
	};
	t.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	};
	t.prototype.checkScrollbar = function () {
		var n = window.innerWidth,
			t;
		n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
		this.bodyIsOverflowing = document.body.clientWidth < n;
		this.scrollbarWidth = this.measureScrollbar()
	};
	t.prototype.setScrollbar = function () {
		var n = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "";
		this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
	};
	t.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	};
	t.prototype.measureScrollbar = function () {
		var n = document.createElement("div"),
			t;
		return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
	};
	r = n.fn.modal;
	n.fn.modal = i;
	n.fn.modal.Constructor = t;
	n.fn.modal.noConflict = function () {
		return n.fn.modal = r, this
	};
	n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
		var r = n(this),
			f = r.attr("href"),
			u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
			e = u.data("bs.modal") ? "toggle" : n.extend({
				remote: !/#/.test(f) && f
			}, u.data(), r.data());
		r.is("a") && t.preventDefault();
		u.one("show.bs.modal", function (n) {
			n.isDefaultPrevented() || u.one("hidden.bs.modal", function () {
				r.is(":visible") && r.trigger("focus")
			})
		});
		i.call(u, e, this)
	})
}(jQuery); + function (n) {
	"use strict";

	function r(i) {
		return this.each(function () {
			var u = n(this),
				r = u.data("bs.tooltip"),
				f = "object" == typeof i && i;
			!r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
		})
	}
	var t = function (n, t) {
			this.type = null;
			this.options = null;
			this.enabled = null;
			this.timeout = null;
			this.hoverState = null;
			this.$element = null;
			this.inState = null;
			this.init("tooltip", n, t)
		},
		i;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 150;
	t.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	};
	t.prototype.init = function (t, i, r) {
		var f, e, u, o, s;
		if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (f = this.options.trigger.split(" "), e = f.length; e--;)
			if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
			else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
		this.options.selector ? this._options = n.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	};
	t.prototype.getDefaults = function () {
		return t.DEFAULTS
	};
	t.prototype.getOptions = function (t) {
		return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
			show: t.delay,
			hide: t.delay
		}), t
	};
	t.prototype.getDelegateOptions = function () {
		var t = {},
			i = this.getDefaults();
		return this._options && n.each(this._options, function (n, r) {
			i[n] != r && (t[n] = r)
		}), t
	};
	t.prototype.enter = function (t) {
		var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
			"in" == i.hoverState && i.show()
		}, i.options.delay.show)) : i.show())
	};
	t.prototype.isInStateTrue = function () {
		for (var n in this.inState)
			if (this.inState[n]) return !0;
		return !1
	};
	t.prototype.leave = function (t) {
		var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
		if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
			"out" == i.hoverState && i.hide()
		}, i.options.delay.hide)) : i.hide()
	};
	t.prototype.show = function () {
		var c = n.Event("show.bs." + this.type),
			l, p, e, w, h;
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
			var u = this,
				r = this.tip(),
				a = this.getUID(this.type);
			this.setContent();
			r.attr("id", a);
			this.$element.attr("aria-describedby", a);
			this.options.animation && r.addClass("fade");
			var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
				v = /\s?auto?\s?/i,
				y = v.test(i);
			y && (i = i.replace(v, "") || "top");
			r.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(i).data("bs." + this.type, this);
			this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
			this.$element.trigger("inserted.bs." + this.type);
			var f = this.getPosition(),
				o = r[0].offsetWidth,
				s = r[0].offsetHeight;
			y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
			w = this.getCalculatedOffset(i, f, o, s);
			this.applyPlacement(w, i);
			h = function () {
				var n = u.hoverState;
				u.$element.trigger("shown.bs." + u.type);
				u.hoverState = null;
				"out" == n && u.leave(u)
			};
			n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
		}
	};
	t.prototype.applyPlacement = function (t, i) {
		var r = this.tip(),
			l = r[0].offsetWidth,
			e = r[0].offsetHeight,
			o = parseInt(r.css("margin-top"), 10),
			s = parseInt(r.css("margin-left"), 10),
			h, f, u;
		isNaN(o) && (o = 0);
		isNaN(s) && (s = 0);
		t.top += o;
		t.left += s;
		n.offset.setOffset(r[0], n.extend({
			using: function (n) {
				r.css({
					top: Math.round(n.top),
					left: Math.round(n.left)
				})
			}
		}, t), 0);
		r.addClass("in");
		h = r[0].offsetWidth;
		f = r[0].offsetHeight;
		"top" == i && f != e && (t.top = t.top + e - f);
		u = this.getViewportAdjustedDelta(i, t, h, f);
		u.left ? t.left += u.left : t.top += u.top;
		var c = /top|bottom/.test(i),
			a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
			v = c ? "offsetWidth" : "offsetHeight";
		r.offset(t);
		this.replaceArrow(a, r[0][v], c)
	};
	t.prototype.replaceArrow = function (n, t, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
	};
	t.prototype.setContent = function () {
		var n = this.tip(),
			t = this.getTitle();
		n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
		n.removeClass("fade in top bottom left right")
	};
	t.prototype.hide = function (i) {
		function f() {
			"in" != r.hoverState && u.detach();
			r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
			i && i()
		}
		var r = this,
			u = n(this.$tip),
			e = n.Event("hide.bs." + this.type);
		if (this.$element.trigger(e), !e.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this
	};
	t.prototype.fixTitle = function () {
		var n = this.$element;
		(n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
	};
	t.prototype.hasContent = function () {
		return this.getTitle()
	};
	t.prototype.getPosition = function (t) {
		t = t || this.$element;
		var r = t[0],
			u = "BODY" == r.tagName,
			i = r.getBoundingClientRect();
		null == i.width && (i = n.extend({}, i, {
			width: i.right - i.left,
			height: i.bottom - i.top
		}));
		var f = window.SVGElement && r instanceof window.SVGElement,
			e = u ? {
				top: 0,
				left: 0
			} : f ? null : t.offset(),
			o = {
				scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
			},
			s = u ? {
				width: n(window).width(),
				height: n(window).height()
			} : null;
		return n.extend({}, i, o, s, e)
	};
	t.prototype.getCalculatedOffset = function (n, t, i, r) {
		return "bottom" == n ? {
			top: t.top + t.height,
			left: t.left + t.width / 2 - i / 2
		} : "top" == n ? {
			top: t.top - r,
			left: t.left + t.width / 2 - i / 2
		} : "left" == n ? {
			top: t.top + t.height / 2 - r / 2,
			left: t.left - i
		} : {
			top: t.top + t.height / 2 - r / 2,
			left: t.left + t.width
		}
	};
	t.prototype.getViewportAdjustedDelta = function (n, t, i, r) {
		var f = {
				top: 0,
				left: 0
			},
			e, u, o, s, h, c;
		return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
	};
	t.prototype.getTitle = function () {
		var t = this.$element,
			n = this.options;
		return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
	};
	t.prototype.getUID = function (n) {
		do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
		return n
	};
	t.prototype.tip = function () {
		if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	};
	t.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	};
	t.prototype.enable = function () {
		this.enabled = !0
	};
	t.prototype.disable = function () {
		this.enabled = !1
	};
	t.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	};
	t.prototype.toggle = function (t) {
		var i = this;
		t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
		t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	};
	t.prototype.destroy = function () {
		var n = this;
		clearTimeout(this.timeout);
		this.hide(function () {
			n.$element.off("." + n.type).removeData("bs." + n.type);
			n.$tip && n.$tip.detach();
			n.$tip = null;
			n.$arrow = null;
			n.$viewport = null;
			n.$element = null
		})
	};
	i = n.fn.tooltip;
	n.fn.tooltip = r;
	n.fn.tooltip.Constructor = t;
	n.fn.tooltip.noConflict = function () {
		return n.fn.tooltip = i, this
	}
}(jQuery); + function (n) {
	"use strict";

	function r(i) {
		return this.each(function () {
			var u = n(this),
				r = u.data("bs.popover"),
				f = "object" == typeof i && i;
			!r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
		})
	}
	var t = function (n, t) {
			this.init("popover", n, t)
		},
		i;
	if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
	t.VERSION = "3.3.7";
	t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
	});
	t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
	t.prototype.constructor = t;
	t.prototype.getDefaults = function () {
		return t.DEFAULTS
	};
	t.prototype.setContent = function () {
		var n = this.tip(),
			i = this.getTitle(),
			t = this.getContent();
		n.find(".popover-title")[this.options.html ? "html" : "text"](i);
		n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
		n.removeClass("fade top bottom left right in");
		n.find(".popover-title").html() || n.find(".popover-title").hide()
	};
	t.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	};
	t.prototype.getContent = function () {
		var t = this.$element,
			n = this.options;
		return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
	};
	t.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	i = n.fn.popover;
	n.fn.popover = r;
	n.fn.popover.Constructor = t;
	n.fn.popover.noConflict = function () {
		return n.fn.popover = i, this
	}
}(jQuery); + function (n) {
	"use strict";

	function t(i, r) {
		this.$body = n(document.body);
		this.$scrollElement = n(n(i).is(document.body) ? window : i);
		this.options = n.extend({}, t.DEFAULTS, r);
		this.selector = (this.options.target || "") + " .nav li > a";
		this.offsets = [];
		this.targets = [];
		this.activeTarget = null;
		this.scrollHeight = 0;
		this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
		this.refresh();
		this.process()
	}

	function i(i) {
		return this.each(function () {
			var u = n(this),
				r = u.data("bs.scrollspy"),
				f = "object" == typeof i && i;
			r || u.data("bs.scrollspy", r = new t(this, f));
			"string" == typeof i && r[i]()
		})
	}
	t.VERSION = "3.3.7";
	t.DEFAULTS = {
		offset: 10
	};
	t.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	};
	t.prototype.refresh = function () {
		var t = this,
			i = "offset",
			r = 0;
		this.offsets = [];
		this.targets = [];
		this.scrollHeight = this.getScrollHeight();
		n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
		this.$body.find(this.selector).map(function () {
			var f = n(this),
				u = f.data("target") || f.attr("href"),
				t = /^#./.test(u) && n(u);
			return t && t.length && t.is(":visible") && [
				[t[i]().top + r, u]
			] || null
		}).sort(function (n, t) {
			return n[0] - t[0]
		}).each(function () {
			t.offsets.push(this[0]);
			t.targets.push(this[1])
		})
	};
	t.prototype.process = function () {
		var n, i = this.$scrollElement.scrollTop() + this.options.offset,
			f = this.getScrollHeight(),
			e = this.options.offset + f - this.$scrollElement.height(),
			t = this.offsets,
			r = this.targets,
			u = this.activeTarget;
		if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
		if (u && i < t[0]) return this.activeTarget = null, this.clear();
		for (n = t.length; n--;) u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
	};
	t.prototype.activate = function (t) {
		this.activeTarget = t;
		this.clear();
		var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
			i = n(r).parents("li").addClass("active");
		i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
		i.trigger("activate.bs.scrollspy")
	};
	t.prototype.clear = function () {
		n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var r = n.fn.scrollspy;
	n.fn.scrollspy = i;
	n.fn.scrollspy.Constructor = t;
	n.fn.scrollspy.noConflict = function () {
		return n.fn.scrollspy = r, this
	};
	n(window).on("load.bs.scrollspy.data-api", function () {
		n('[data-spy="scroll"]').each(function () {
			var t = n(this);
			i.call(t, t.data())
		})
	})
}(jQuery); + function (n) {
	"use strict";

	function r(i) {
		return this.each(function () {
			var u = n(this),
				r = u.data("bs.tab");
			r || u.data("bs.tab", r = new t(this));
			"string" == typeof i && r[i]()
		})
	}
	var t = function (t) {
			this.element = n(t)
		},
		u, i;
	t.VERSION = "3.3.7";
	t.TRANSITION_DURATION = 150;
	t.prototype.show = function () {
		var t = this.element,
			f = t.closest("ul:not(.dropdown-menu)"),
			i = t.data("target"),
			u;
		if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var r = f.find(".active:last a"),
				e = n.Event("hide.bs.tab", {
					relatedTarget: t[0]
				}),
				o = n.Event("show.bs.tab", {
					relatedTarget: r[0]
				});
			(r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function () {
				r.trigger({
					type: "hidden.bs.tab",
					relatedTarget: t[0]
				});
				t.trigger({
					type: "shown.bs.tab",
					relatedTarget: r[0]
				})
			}))
		}
	};
	t.prototype.activate = function (i, r, u) {
		function e() {
			f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
			i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
			o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
			i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
			u && u()
		}
		var f = r.find("> .active"),
			o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
		f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
		f.removeClass("in")
	};
	u = n.fn.tab;
	n.fn.tab = r;
	n.fn.tab.Constructor = t;
	n.fn.tab.noConflict = function () {
		return n.fn.tab = u, this
	};
	i = function (t) {
		t.preventDefault();
		r.call(n(this), "show")
	};
	n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function (n) {
	"use strict";

	function i(i) {
		return this.each(function () {
			var u = n(this),
				r = u.data("bs.affix"),
				f = "object" == typeof i && i;
			r || u.data("bs.affix", r = new t(this, f));
			"string" == typeof i && r[i]()
		})
	}
	var t = function (i, r) {
			this.options = n.extend({}, t.DEFAULTS, r);
			this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
			this.$element = n(i);
			this.affixed = null;
			this.unpin = null;
			this.pinnedOffset = null;
			this.checkPosition()
		},
		r;
	t.VERSION = "3.3.7";
	t.RESET = "affix affix-top affix-bottom";
	t.DEFAULTS = {
		offset: 0,
		target: window
	};
	t.prototype.getState = function (n, t, i, r) {
		var u = this.$target.scrollTop(),
			f = this.$element.offset(),
			e = this.$target.height();
		if (null != i && "top" == this.affixed) return u < i && "top";
		if ("bottom" == this.affixed) return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
		var o = null == this.affixed,
			s = o ? u : f.top,
			h = o ? e : t;
		return null != i && u <= i ? "top" : null != r && s + h >= n - r && "bottom"
	};
	t.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(t.RESET).addClass("affix");
		var n = this.$target.scrollTop(),
			i = this.$element.offset();
		return this.pinnedOffset = i.top - n
	};
	t.prototype.checkPositionWithEventLoop = function () {
		setTimeout(n.proxy(this.checkPosition, this), 1)
	};
	t.prototype.checkPosition = function () {
		var i, e, o;
		if (this.$element.is(":visible")) {
			var s = this.$element.height(),
				r = this.options.offset,
				f = r.top,
				u = r.bottom,
				h = Math.max(n(document).height(), n(document.body).height());
			if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
				if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
				this.affixed = i;
				this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
				this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == i && this.$element.offset({
				top: h - s - u
			})
		}
	};
	r = n.fn.affix;
	n.fn.affix = i;
	n.fn.affix.Constructor = t;
	n.fn.affix.noConflict = function () {
		return n.fn.affix = r, this
	};
	n(window).on("load", function () {
		n('[data-spy="affix"]').each(function () {
			var r = n(this),
				t = r.data();
			t.offset = t.offset || {};
			null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
			null != t.offsetTop && (t.offset.top = t.offsetTop);
			i.call(r, t)
		})
	})
}(jQuery);
$(document).ready(function () {
	"use strict";
	$(window).load(function () {
		setTimeout(function () {
			$("body").addClass("page-loaded")
		}, 3e3)
	});
	$(".image-color").each(function () {
		var n = $(this),
			i = n.find("img")[0],
			t = new Image;
		t.src = i.src;
		t.onload = function () {
			n.addClass("loaded")
		}
	})
});
$(document).ready(function () {
		"use strict";
		$(".navbar-toggle").click(function () {
			$(this).toggleClass("active")
		});
		// $("input, textarea").placeholder();
		// $("input").iCheck();
		// $(".form-select").selectpicker({
		// 	width: "100%"
		// });
		$('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle="popover"]').popover();
		$(".panel-collapse").on("show.bs.collapse", function () {
			$(this).prev(".panel-heading").find(".panel-title").addClass("active")
		});
		$(".panel-collapse").on("hide.bs.collapse", function () {
			$(this).prev(".panel-heading").find(".panel-title").removeClass("active")
		});
		$(".switch").on("click", function () {
			if (!$(this).hasClass("disabled")) {
				var n = $(this).data("clicks"),
					t = $(this).find("input").attr("value");
				n && t == "off" ? ($(this).find("input").attr("value", "on"), $(this).addClass("on")) : n && t == "on" ? ($(this).find("input").attr("value", "off"), $(this).removeClass("on")) : n || t != "off" ? n || t != "on" || ($(this).find("input").attr("value", "off"), $(this).removeClass("on")) : ($(this).find("input").attr("value", "on"), $(this).addClass("on"));
				$(this).data("clicks", !n)
			}
		})
	}),
	function (n) {
		function h(n, r, u) {
			var c = n[0],
				s = /er/.test(u) ? _indeterminate : /bl/.test(u) ? i : t,
				h = u == _update ? {
					checked: c[t],
					disabled: c[i],
					indeterminate: "true" == n.attr(_indeterminate) || "false" == n.attr(_determinate)
				} : c[s],
				l;
			if (/^(ch|di|in)/.test(u) && !h) o(n, s);
			else if (/^(un|en|de)/.test(u) && h) f(n, s);
			else if (u == _update)
				for (l in h) h[l] ? o(n, l, !0) : f(n, l, !0);
			else r && "toggle" != u || (r || n[_callback]("ifClicked"), h ? c[_type] !== e && f(n, s) : o(n, s))
		}

		function o(o, h, l) {
			var y = o[0],
				p = o.parent(),
				w = h == t,
				b = h == _indeterminate,
				nt = h == i,
				d = b ? _determinate : w ? v : "enabled",
				tt = r(o, d + s(y[_type])),
				it = r(o, h + s(y[_type]));
			if (!0 !== y[h]) {
				if (!l && h == t && y[_type] == e && y.name) {
					var g = o.closest("form"),
						k = 'input[name="' + y.name + '"]',
						k = g.length ? g.find(k) : n(k);
					k.each(function () {
						this !== y && n(this).data(u) && f(n(this), h)
					})
				}
				b ? (y[h] = !0, y[t] && f(o, t, "force")) : (l || (y[h] = !0), w && y[_indeterminate] && f(o, _indeterminate, !1));
				a(o, w, h, l)
			}
			y[i] && r(o, _cursor, !0) && p.find("." + c).css(_cursor, "default");
			p[_add](it || r(o, h) || "");
			p.attr("role") && !b && p.attr("aria-" + (nt ? i : t), "true");
			p[_remove](tt || r(o, d) || "")
		}

		function f(n, u, f) {
			var e = n[0],
				o = n.parent(),
				y = u == t,
				h = u == _indeterminate,
				p = u == i,
				l = h ? _determinate : y ? v : "enabled",
				w = r(n, l + s(e[_type])),
				b = r(n, u + s(e[_type]));
			!1 !== e[u] && ((h || !f || "force" == f) && (e[u] = !1), a(n, y, l, f));
			!e[i] && r(n, _cursor, !0) && o.find("." + c).css(_cursor, "pointer");
			o[_remove](b || r(n, u) || "");
			o.attr("role") && !h && o.attr("aria-" + (p ? i : t), "false");
			o[_add](w || r(n, l) || "")
		}

		function l(t, i) {
			t.data(u) && (t.parent().html(t.attr("style", t.data(u).s || "")), i && t[_callback](i), t.off(".i").unwrap(), n(_label + '[for="' + t[0].id + '"]').add(t.closest(_label)).off(".i"))
		}

		function r(n, t, i) {
			if (n.data(u)) return n.data(u).o[t + (i ? "" : "Class")]
		}

		function s(n) {
			return n.charAt(0).toUpperCase() + n.slice(1)
		}

		function a(n, t, i, r) {
			r || (t && n[_callback]("ifToggled"), n[_callback]("ifChanged")[_callback]("if" + s(i)))
		}
		var u = "iCheck",
			c = u + "-helper",
			e = "radio",
			t = "checked",
			v = "un" + t,
			i = "disabled";
		_determinate = "determinate";
		_indeterminate = "in" + _determinate;
		_update = "update";
		_type = "type";
		_click = "click";
		_touch = "touchbegin.i touchend.i";
		_add = "addClass";
		_remove = "removeClass";
		_callback = "trigger";
		_label = "label";
		_cursor = "cursor";
		_mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
		n.fn[u] = function (r, s) {
			var w = 'input[type="checkbox"], input[type="' + e + '"]',
				v = n(),
				d = function (t) {
					t.each(function () {
						var t = n(this);
						v = t.is(w) ? v.add(t) : v.add(t.find(w))
					})
				};
			if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(r)) return r = r.toLowerCase(), d(this), v.each(function () {
				var t = n(this);
				"destroy" == r ? l(t, "ifDestroyed") : h(t, !0, r);
				n.isFunction(s) && s()
			});
			if ("object" != typeof r && r) return this;
			var a = n.extend({
					checkedClass: t,
					disabledClass: i,
					indeterminateClass: _indeterminate,
					labelHover: !0
				}, r),
				b = a.handle,
				p = a.hoverClass || "hover",
				tt = a.focusClass || "focus",
				g = a.activeClass || "active",
				nt = !!a.labelHover,
				k = a.labelHoverClass || "hover",
				y = ("" + a.increaseArea).replace("%", "") | 0;
			return ("checkbox" == b || b == e) && (w = 'input[type="' + b + '"]'), -50 > y && (y = -50), d(this), v.each(function () {
				var s = n(this);
				l(s);
				var v = this,
					d = v.id,
					it = -y + "%",
					w = 100 + 2 * y + "%",
					w = {
						position: "absolute",
						top: it,
						left: it,
						display: "block",
						width: w,
						height: w,
						margin: 0,
						padding: 0,
						background: "#fff",
						border: 0,
						opacity: 0
					},
					it = _mobile ? {
						position: "absolute",
						visibility: "hidden"
					} : y ? w : {
						position: "absolute",
						opacity: 0
					},
					ft = "checkbox" == v[_type] ? a.checkboxClass || "icheckbox" : a.radioClass || "i" + e,
					b = n(_label + '[for="' + d + '"]').add(s.closest(_label)),
					rt = !!a.aria,
					ut = u + "-" + Math.random().toString(36).substr(2, 6),
					r = '<div class="' + ft + '" ' + (rt ? 'role="' + v[_type] + '" ' : "");
				if (rt && b.each(function () {
						r += 'aria-labelledby="';
						this.id ? r += this.id : (this.id = ut, r += ut);
						r += '"'
					}), r = s.wrap(r + "/>")[_callback]("ifCreated").parent().append(a.insert), w = n('<ins class="' + c + '"/>').css(w).appendTo(r), s.data(u, {
						o: a,
						s: s.attr("style")
					}).css(it), a.inheritClass && r[_add](v.className || ""), a.inheritID && d && r.attr("id", u + "-" + d), "static" == r.css("position") && r.css("position", "relative"), h(s, !0, _update), b.length) b.on(_click + ".i mouseover.i mouseout.i " + _touch, function (t) {
					var u = t[_type],
						f = n(this);
					if (!v[i]) {
						if (u == _click) {
							if (n(t.target).is("a")) return;
							h(s, !1, !0)
						} else nt && (/ut|nd/.test(u) ? (r[_remove](p), f[_remove](k)) : (r[_add](p), f[_add](k)));
						if (_mobile) t.stopPropagation();
						else return !1
					}
				});
				s.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (n) {
					var i = n[_type];
					if (n = n.keyCode, i == _click) return !1;
					if ("keydown" == i && 32 == n) return v[_type] == e && v[t] || (v[t] ? f(s, t) : o(s, t)), !1;
					"keyup" == i && v[_type] == e ? v[t] || o(s, t) : /us|ur/.test(i) && r["blur" == i ? _remove : _add](tt)
				});
				w.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (n) {
					var t = n[_type],
						u = /wn|up/.test(t) ? g : p;
					if (!v[i])
						if (t == _click ? h(s, !1, !0) : (/wn|er|in/.test(t) ? r[_add](u) : r[_remove](u + " " + g), b.length && nt && u == p && b[/ut|nd/.test(t) ? _remove : _add](k)), _mobile) n.stopPropagation();
						else return !1
				})
			})
		}
	}(window.jQuery || window.Zepto);
! function (n, t) {
	"function" == typeof define && define.amd ? define(["jquery"], function (n) {
		return t(n)
	}) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(n.jQuery)
}(this, function (n) {
	! function (n) {
		"use strict";

		function f(t) {
			return n.each([{
				re: /[\xC0-\xC6]/g,
				ch: "A"
			}, {
				re: /[\xE0-\xE6]/g,
				ch: "a"
			}, {
				re: /[\xC8-\xCB]/g,
				ch: "E"
			}, {
				re: /[\xE8-\xEB]/g,
				ch: "e"
			}, {
				re: /[\xCC-\xCF]/g,
				ch: "I"
			}, {
				re: /[\xEC-\xEF]/g,
				ch: "i"
			}, {
				re: /[\xD2-\xD6]/g,
				ch: "O"
			}, {
				re: /[\xF2-\xF6]/g,
				ch: "o"
			}, {
				re: /[\xD9-\xDC]/g,
				ch: "U"
			}, {
				re: /[\xF9-\xFC]/g,
				ch: "u"
			}, {
				re: /[\xC7-\xE7]/g,
				ch: "c"
			}, {
				re: /[\xD1]/g,
				ch: "N"
			}, {
				re: /[\xF1]/g,
				ch: "n"
			}], function () {
				t = t ? t.replace(this.re, this.ch) : ""
			}), t
		}

		function e(i) {
			var f = arguments,
				r = i,
				u, e;
			return [].shift.apply(f), e = this.each(function () {
				var o = n(this),
					i, e, s, h;
				if (o.is("select")) {
					if (i = o.data("selectpicker"), e = "object" == typeof r && r, i) {
						if (e)
							for (s in e) e.hasOwnProperty(s) && (i.options[s] = e[s])
					} else h = n.extend({}, t.DEFAULTS, n.fn.selectpicker.defaults || {}, o.data(), e), h.template = n.extend({}, t.DEFAULTS.template, n.fn.selectpicker.defaults ? n.fn.selectpicker.defaults.template : {}, o.data().template, e.template), o.data("selectpicker", i = new t(this, h));
					"string" == typeof r && (u = i[r] instanceof Function ? i[r].apply(i, f) : i.options[r])
				}
			}), "undefined" != typeof u ? u : e
		}
		var i, u, o, h;
		String.prototype.includes || ! function () {
			var i = {}.toString,
				n = function () {
					try {
						var n = {},
							t = Object.defineProperty,
							i = t(n, n, n) && t
					} catch (n) {}
					return i
				}(),
				r = "".indexOf,
				t = function (n) {
					var u, s;
					if (null == this) throw new TypeError;
					if (u = String(this), n && "[object RegExp]" == i.call(n)) throw new TypeError;
					var f = u.length,
						e = String(n),
						h = e.length,
						o = arguments.length > 1 ? arguments[1] : void 0,
						t = o ? Number(o) : 0;
					return t != t && (t = 0), s = Math.min(Math.max(t, 0), f), !(h + s > f) && r.call(u, e, t) != -1
				};
			n ? n(String.prototype, "includes", {
				value: t,
				configurable: !0,
				writable: !0
			}) : String.prototype.includes = t
		}();
		String.prototype.startsWith || ! function () {
			var n = function () {
					try {
						var n = {},
							t = Object.defineProperty,
							i = t(n, n, n) && t
					} catch (n) {}
					return i
				}(),
				i = {}.toString,
				t = function (n) {
					var u, f, r;
					if (null == this) throw new TypeError;
					if (u = String(this), n && "[object RegExp]" == i.call(n)) throw new TypeError;
					var e = u.length,
						o = String(n),
						s = o.length,
						h = arguments.length > 1 ? arguments[1] : void 0,
						t = h ? Number(h) : 0;
					if (t != t && (t = 0), f = Math.min(Math.max(t, 0), e), s + f > e) return !1;
					for (r = -1; ++r < s;)
						if (u.charCodeAt(f + r) != o.charCodeAt(r)) return !1;
					return !0
				};
			n ? n(String.prototype, "startsWith", {
				value: t,
				configurable: !0,
				writable: !0
			}) : String.prototype.startsWith = t
		}();
		Object.keys || (Object.keys = function (n, t, i) {
			i = [];
			for (t in n) i.hasOwnProperty.call(n, t) && i.push(t);
			return i
		});
		i = {
			useDefault: !1,
			_set: n.valHooks.select.set
		};
		n.valHooks.select.set = function (t, r) {
			return r && !i.useDefault && n(t).data("selected", !0), i._set.apply(this, arguments)
		};
		u = null;
		o = function () {
			try {
				return new Event("change"), !0
			} catch (n) {
				return !1
			}
		}();
		n.fn.triggerNative = function (n) {
			var t, i = this[0];
			i.dispatchEvent ? (o ? t = new Event(n, {
				bubbles: !0
			}) : (t = document.createEvent("Event"), t.initEvent(n, !0, !1)), i.dispatchEvent(t)) : i.fireEvent ? (t = document.createEventObject(), t.eventType = n, i.fireEvent("on" + n, t)) : this.trigger(n)
		};
		n.expr.pseudos.icontains = function (t, i, r) {
			var u = n(t).find("a"),
				f = (u.data("tokens") || u.text()).toString().toUpperCase();
			return f.includes(r[3].toUpperCase())
		};
		n.expr.pseudos.ibegins = function (t, i, r) {
			var u = n(t).find("a"),
				f = (u.data("tokens") || u.text()).toString().toUpperCase();
			return f.startsWith(r[3].toUpperCase())
		};
		n.expr.pseudos.aicontains = function (t, i, r) {
			var u = n(t).find("a"),
				f = (u.data("tokens") || u.data("normalizedText") || u.text()).toString().toUpperCase();
			return f.includes(r[3].toUpperCase())
		};
		n.expr.pseudos.aibegins = function (t, i, r) {
			var u = n(t).find("a"),
				f = (u.data("tokens") || u.data("normalizedText") || u.text()).toString().toUpperCase();
			return f.startsWith(r[3].toUpperCase())
		};
		var s = function (n) {
				var i = function (t) {
						return n[t]
					},
					t = "(?:" + Object.keys(n).join("|") + ")",
					r = RegExp(t),
					u = RegExp(t, "g");
				return function (n) {
					return n = null == n ? "" : "" + n, r.test(n) ? n.replace(u, i) : n
				}
			},
			// r = s({
			// 	"&": "&",
			// 	"<": "<",
			// 	">": ">",
			// 	'"': """,
			// 	"'": "'",
			// 	"`": "`"
			// }),
			// c = s({
			// 	"&": "&",
			// 	"<": "<",
			// 	">": ">",
			// 	""": '"',
			// 	"'": "'",
			// 	"`": "`"
			// }),
			t = function (r, u) {
				i.useDefault || (n.valHooks.select.set = i._set, i.useDefault = !0);
				this.$element = n(r);
				this.$newElement = null;
				this.$button = null;
				this.$menu = null;
				this.$lis = null;
				this.options = u;
				null === this.options.title && (this.options.title = this.$element.attr("title"));
				var f = this.options.windowPadding;
				"number" == typeof f && (this.options.windowPadding = [f, f, f, f]);
				this.val = t.prototype.val;
				this.render = t.prototype.render;
				this.refresh = t.prototype.refresh;
				this.setStyle = t.prototype.setStyle;
				this.selectAll = t.prototype.selectAll;
				this.deselectAll = t.prototype.deselectAll;
				this.destroy = t.prototype.destroy;
				this.remove = t.prototype.remove;
				this.show = t.prototype.show;
				this.hide = t.prototype.hide;
				this.init()
			};
		t.VERSION = "1.12.4";
		t.DEFAULTS = {
			noneSelectedText: "Nothing selected",
			noneResultsText: "No results matched {0}",
			countSelectedText: function (n) {
				return 1 == n ? "{0} item selected" : "{0} options selected"
			},
			maxOptionsText: function (n, t) {
				return [1 == n ? "Limit reached ({n} item max)" : "Limit reached ({n} options max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} options max)"]
			},
			selectAllText: "Select All",
			deselectAllText: "Deselect All",
			doneButton: !1,
			doneButtonText: "Close",
			multipleSeparator: ", ",
			styleBase: "btn",
			style: "btn-default",
			size: "auto",
			title: null,
			selectedTextFormat: "values",
			width: !1,
			container: !1,
			hideDisabled: !1,
			showSubtext: !1,
			showIcon: !0,
			showContent: !0,
			dropupAuto: !0,
			header: !1,
			liveSearch: !1,
			liveSearchPlaceholder: null,
			liveSearchNormalize: !1,
			liveSearchStyle: "contains",
			actionsBox: !1,
			iconBase: "glyphicon",
			tickIcon: "glyphicon-ok",
			showTick: !1,
			template: {
				caret: '<span class="caret"><\/span>'
			},
			maxOptions: !1,
			mobile: !1,
			selectOnTab: !1,
			dropdownAlignRight: !1,
			windowPadding: 0
		};
		t.prototype = {
			constructor: t,
			init: function () {
				var t = this,
					i = this.$element.attr("id");
				this.$element.addClass("bs-select-hidden");
				this.liObj = {};
				this.multiple = this.$element.prop("multiple");
				this.autofocus = this.$element.prop("autofocus");
				this.$newElement = this.createView();
				this.$element.after(this.$newElement).appendTo(this.$newElement);
				this.$button = this.$newElement.children("button");
				this.$menu = this.$newElement.children(".dropdown-menu");
				this.$menuInner = this.$menu.children(".inner");
				this.$searchbox = this.$menu.find("input");
				this.$element.removeClass("bs-select-hidden");
				this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right");
				"undefined" != typeof i && (this.$button.attr("data-id", i), n('label[for="' + i + '"]').click(function (n) {
					n.preventDefault();
					t.$button.focus()
				}));
				this.checkDisabled();
				this.clickListener();
				this.options.liveSearch && this.liveSearchListener();
				this.render();
				this.setStyle();
				this.setWidth();
				this.options.container && this.selectPosition();
				this.$menu.data("this", this);
				this.$newElement.data("this", this);
				this.options.mobile && this.mobile();
				this.$newElement.on({
					"hide.bs.dropdown": function (n) {
						t.$menuInner.attr("aria-expanded", !1);
						t.$element.trigger("hide.bs.select", n)
					},
					"hidden.bs.dropdown": function (n) {
						t.$element.trigger("hidden.bs.select", n)
					},
					"show.bs.dropdown": function (n) {
						t.$menuInner.attr("aria-expanded", !0);
						t.$element.trigger("show.bs.select", n)
					},
					"shown.bs.dropdown": function (n) {
						t.$element.trigger("shown.bs.select", n)
					}
				});
				t.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
					t.$button.addClass("bs-invalid");
					t.$element.on({
						"focus.bs.select": function () {
							t.$button.focus();
							t.$element.off("focus.bs.select")
						},
						"shown.bs.select": function () {
							t.$element.val(t.$element.val()).off("shown.bs.select")
						},
						"rendered.bs.select": function () {
							this.validity.valid && t.$button.removeClass("bs-invalid");
							t.$element.off("rendered.bs.select")
						}
					});
					t.$button.on("blur.bs.select", function () {
						t.$element.focus().blur();
						t.$button.off("blur.bs.select")
					})
				});
				setTimeout(function () {
					t.$element.trigger("loaded.bs.select")
				})
			},
			createDropdown: function () {
				var t = this.multiple || this.options.showTick ? " show-tick" : "",
					i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
					u = this.autofocus ? " autofocus" : "",
					f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">??<\/button>' + this.options.header + "<\/div>" : "",
					e = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + r(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"><\/div>' : "",
					o = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '<\/button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "<\/button><\/div><\/div>" : "",
					s = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "<\/button><\/div><\/div>" : "",
					h = '<div class="btn-group bootstrap-select' + t + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + u + ' role="button"><span class="filter-option pull-left"><\/span> <span class="bs-caret">' + this.options.template.caret + '<\/span><\/button><div class="dropdown-menu open" role="combobox">' + f + e + o + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><\/ul>' + s + "<\/div><\/div>";
				return n(h)
			},
			createView: function () {
				var n = this.createDropdown(),
					t = this.createLi();
				return n.find("ul")[0].innerHTML = t, n
			},
			reloadLi: function () {
				var n = this.createLi();
				this.$menuInner[0].innerHTML = n
			},
			createLi: function () {
				var t = this,
					i = [],
					o = 0,
					s = document.createElement("option"),
					u = -1,
					e = function (n, t, i, r) {
						return "<li" + ("undefined" != typeof i && "" !== i ? ' class="' + i + '"' : "") + ("undefined" != typeof t && null !== t ? ' data-original-index="' + t + '"' : "") + ("undefined" != typeof r && null !== r ? 'data-optgroup="' + r + '"' : "") + ">" + n + "<\/li>"
					},
					c = function (i, u, e, o) {
						return '<a tabindex="0"' + ("undefined" != typeof u ? ' class="' + u + '"' : "") + (e ? ' style="' + e + '"' : "") + (t.options.liveSearchNormalize ? ' data-normalized-text="' + f(r(n(i).html())) + '"' : "") + ("undefined" != typeof o || null !== o ? ' data-tokens="' + o + '"' : "") + ' role="option">' + i + '<span class="' + t.options.iconBase + " " + t.options.tickIcon + ' check-mark"><\/span><\/a>'
					},
					h, a, l;
				return !this.options.title || this.multiple || (u--, this.$element.find(".bs-title-option").length) || (h = this.$element[0], s.className = "bs-title-option", s.innerHTML = this.options.title, s.value = "", h.insertBefore(s, h.firstChild), a = n(h.options[h.selectedIndex]), void 0 === a.attr("selected") && void 0 === this.$element.data("selected") && (s.selected = !0)), l = this.$element.find("option"), l.each(function (f) {
					var s = n(this),
						tt, it, w, b;
					if (u++, !s.hasClass("bs-title-option")) {
						var a, k = this.className || "",
							d = r(this.style.cssText),
							v = s.data("content") ? s.data("content") : s.html(),
							g = s.data("tokens") ? s.data("tokens") : null,
							ft = "undefined" != typeof s.data("subtext") ? '<small class="text-muted">' + s.data("subtext") + "<\/small>" : "",
							y = "undefined" != typeof s.data("icon") ? '<span class="' + t.options.iconBase + " " + s.data("icon") + '"><\/span> ' : "",
							h = s.parent(),
							nt = "OPTGROUP" === h[0].tagName,
							ut = nt && h[0].disabled,
							p = this.disabled || ut;
						if ("" !== y && p && (y = "<span>" + y + "<\/span>"), t.options.hideDisabled && (p && !nt || ut)) return a = s.data("prevHiddenIndex"), s.next().data("prevHiddenIndex", void 0 !== a ? a : f), void u--;
						if (s.data("content") || (v = y + '<span class="text">' + v + ft + "<\/span>"), nt && s.data("divider") !== !0) {
							if (t.options.hideDisabled && p && (void 0 === h.data("allOptionsDisabled") && (tt = h.children(), h.data("allOptionsDisabled", tt.filter(":disabled").length === tt.length)), h.data("allOptionsDisabled"))) return void u--;
							if (it = " " + h[0].className || "", 0 === s.index()) {
								o += 1;
								var rt = h[0].label,
									et = "undefined" != typeof h.data("subtext") ? '<small class="text-muted">' + h.data("subtext") + "<\/small>" : "",
									ot = h.data("icon") ? '<span class="' + t.options.iconBase + " " + h.data("icon") + '"><\/span> ' : "";
								rt = ot + '<span class="text">' + r(rt) + et + "<\/span>";
								0 !== f && i.length > 0 && (u++, i.push(e("", null, "divider", o + "div")));
								u++;
								i.push(e(rt, null, "dropdown-header" + it, o))
							}
							if (t.options.hideDisabled && p) return void u--;
							i.push(e(c(v, "opt " + k + it, d, g), f, "", o))
						} else s.data("divider") === !0 ? i.push(e("", f, "divider")) : s.data("hidden") === !0 ? (a = s.data("prevHiddenIndex"), s.next().data("prevHiddenIndex", void 0 !== a ? a : f), i.push(e(c(v, k, d, g), f, "hidden is-hidden"))) : (w = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName, !w && t.options.hideDisabled && (a = s.data("prevHiddenIndex"), void 0 !== a) && (b = l.eq(a)[0].previousElementSibling, b && "OPTGROUP" === b.tagName && !b.disabled && (w = !0)), w && (u++, i.push(e("", null, "divider", o + "div"))), i.push(e(c(v, k, d, g), f)));
						t.liObj[f] = u
					}
				}), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), i.join("")
			},
			findLis: function () {
				return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
			},
			render: function (t) {
				var s, i = this,
					e = this.$element.find("option"),
					r, u, f, o, h;
				t !== !1 && e.each(function (n) {
					var t = i.findLis().eq(i.liObj[n]);
					i.setDisabled(n, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t);
					i.setSelected(n, this.selected, t)
				});
				this.togglePlaceholder();
				this.tabIndex();
				r = e.map(function () {
					if (this.selected) {
						if (i.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
						var r, t = n(this),
							u = t.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + t.data("icon") + '"><\/i> ' : "";
						return r = i.options.showSubtext && t.data("subtext") && !i.multiple ? ' <small class="text-muted">' + t.data("subtext") + "<\/small>" : "", "undefined" != typeof t.attr("title") ? t.attr("title") : t.data("content") && i.options.showContent ? t.data("content").toString() : u + t.html() + r
					}
				}).toArray();
				u = this.multiple ? r.join(this.options.multipleSeparator) : r[0];
				this.multiple && this.options.selectedTextFormat.indexOf("count") > -1 && (f = this.options.selectedTextFormat.split(">"), (f.length > 1 && r.length > f[1] || 1 == f.length && r.length >= 2) && (s = this.options.hideDisabled ? ", [disabled]" : "", o = e.not('[data-divider="true"], [data-hidden="true"]' + s).length, h = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(r.length, o) : this.options.countSelectedText, u = h.replace("{0}", r.length.toString()).replace("{1}", o.toString())));
				void 0 == this.options.title && (this.options.title = this.$element.attr("title"));
				"static" == this.options.selectedTextFormat && (u = this.options.title);
				u || (u = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText);
				this.$button.attr("title", c(n.trim(u.replace(/<[^>]*>?/g, ""))));
				this.$button.children(".filter-option").html(u);
				this.$element.trigger("rendered.bs.select")
			},
			setStyle: function (n, t) {
				this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
				var i = n ? n : this.options.style;
				"add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
			},
			liHeight: function (t) {
				var y;
				if (t || this.options.size !== !1 && !this.sizeInfo) {
					var e = document.createElement("div"),
						u = document.createElement("div"),
						o = document.createElement("ul"),
						l = document.createElement("li"),
						w = document.createElement("li"),
						a = document.createElement("a"),
						v = document.createElement("span"),
						s = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
						f = this.options.liveSearch ? document.createElement("div") : null,
						h = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
						c = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
					(v.className = "text", e.className = this.$menu[0].parentNode.className + " open", u.className = "dropdown-menu open", o.className = "dropdown-menu inner", l.className = "divider", v.appendChild(document.createTextNode("Inner text")), a.appendChild(v), w.appendChild(a), o.appendChild(w), o.appendChild(l), s && u.appendChild(s), f) && (y = document.createElement("input"), f.className = "bs-searchbox", y.className = "form-control", f.appendChild(y), u.appendChild(f));
					h && u.appendChild(h);
					u.appendChild(o);
					c && u.appendChild(c);
					e.appendChild(u);
					document.body.appendChild(e);
					var b = a.offsetHeight,
						k = s ? s.offsetHeight : 0,
						d = f ? f.offsetHeight : 0,
						g = h ? h.offsetHeight : 0,
						nt = c ? c.offsetHeight : 0,
						tt = n(l).outerHeight(!0),
						i = "function" == typeof getComputedStyle && getComputedStyle(u),
						r = i ? null : n(u),
						p = {
							vert: parseInt(i ? i.paddingTop : r.css("paddingTop")) + parseInt(i ? i.paddingBottom : r.css("paddingBottom")) + parseInt(i ? i.borderTopWidth : r.css("borderTopWidth")) + parseInt(i ? i.borderBottomWidth : r.css("borderBottomWidth")),
							horiz: parseInt(i ? i.paddingLeft : r.css("paddingLeft")) + parseInt(i ? i.paddingRight : r.css("paddingRight")) + parseInt(i ? i.borderLeftWidth : r.css("borderLeftWidth")) + parseInt(i ? i.borderRightWidth : r.css("borderRightWidth"))
						},
						it = {
							vert: p.vert + parseInt(i ? i.marginTop : r.css("marginTop")) + parseInt(i ? i.marginBottom : r.css("marginBottom")) + 2,
							horiz: p.horiz + parseInt(i ? i.marginLeft : r.css("marginLeft")) + parseInt(i ? i.marginRight : r.css("marginRight")) + 2
						};
					document.body.removeChild(e);
					this.sizeInfo = {
						liHeight: b,
						headerHeight: k,
						searchHeight: d,
						actionsHeight: g,
						doneButtonHeight: nt,
						dividerHeight: tt,
						menuPadding: p,
						menuExtras: it
					}
				}
			},
			setSize: function () {
				var l, rt, ut;
				if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
					var r, k, f, a, e, s, h, v, i = this,
						t = this.$menu,
						d = this.$menuInner,
						o = n(window),
						ft = this.$newElement[0].offsetHeight,
						g = this.$newElement[0].offsetWidth,
						nt = this.sizeInfo.liHeight,
						y = this.sizeInfo.headerHeight,
						p = this.sizeInfo.searchHeight,
						w = this.sizeInfo.actionsHeight,
						b = this.sizeInfo.doneButtonHeight,
						et = this.sizeInfo.dividerHeight,
						c = this.sizeInfo.menuPadding,
						u = this.sizeInfo.menuExtras,
						tt = this.options.hideDisabled ? ".disabled" : "",
						it = function () {
							var t, f = i.$newElement.offset(),
								u = n(i.options.container),
								r;
							i.options.container && !u.is("body") ? (t = u.offset(), t.top += parseInt(u.css("borderTopWidth")), t.left += parseInt(u.css("borderLeftWidth"))) : t = {
								top: 0,
								left: 0
							};
							r = i.options.windowPadding;
							e = f.top - t.top - o.scrollTop();
							s = o.height() - e - ft - t.top - r[2];
							h = f.left - t.left - o.scrollLeft();
							v = o.width() - h - g - t.left - r[1];
							e -= r[0];
							h -= r[3]
						};
					(it(), "auto" === this.options.size) ? (l = function () {
						var o, tt = function (t, i) {
								return function (r) {
									return i ? r.classList ? r.classList.contains(t) : n(r).hasClass(t) : !(r.classList ? r.classList.contains(t) : n(r).hasClass(t))
								}
							},
							rt = i.$menuInner[0].getElementsByTagName("li"),
							l = Array.prototype.filter ? Array.prototype.filter.call(rt, tt("hidden", !1)) : i.$lis.not(".hidden"),
							ut = Array.prototype.filter ? Array.prototype.filter.call(l, tt("dropdown-header", !0)) : l.filter(".dropdown-header");
						it();
						r = s - u.vert;
						k = v - u.horiz;
						i.options.container ? (t.data("height") || t.data("height", t.height()), f = t.data("height"), t.data("width") || t.data("width", t.width()), a = t.data("width")) : (f = t.height(), a = t.width());
						i.options.dropupAuto && i.$newElement.toggleClass("dropup", e > s && r - u.vert < f);
						i.$newElement.hasClass("dropup") && (r = e - u.vert);
						"auto" === i.options.dropdownAlignRight && t.toggleClass("dropdown-menu-right", h > v && k - u.horiz < a - g);
						o = l.length + ut.length > 3 ? 3 * nt + u.vert - 2 : 0;
						t.css({
							"max-height": r + "px",
							overflow: "hidden",
							"min-height": o + y + p + w + b + "px"
						});
						d.css({
							"max-height": r - y - p - w - b - c.vert + "px",
							"overflow-y": "auto",
							"min-height": Math.max(o - c.vert, 0) + "px"
						})
					}, l(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", l), o.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", l)) : this.options.size && "auto" != this.options.size && this.$lis.not(tt).length > this.options.size && (rt = this.$lis.not(".divider").not(tt).children().slice(0, this.options.size).last().parent().index(), ut = this.$lis.slice(0, rt + 1).filter(".divider").length, r = nt * this.options.size + ut * et + c.vert, i.options.container ? (t.data("height") || t.data("height", t.height()), f = t.data("height")) : f = t.height(), i.options.dropupAuto && this.$newElement.toggleClass("dropup", e > s && r - u.vert < f), t.css({
						"max-height": r + y + p + w + b + "px",
						overflow: "hidden",
						"min-height": ""
					}), d.css({
						"max-height": r - c.vert + "px",
						"overflow-y": "auto",
						"min-height": ""
					}))
				}
			},
			setWidth: function () {
				if ("auto" === this.options.width) {
					this.$menu.css("min-width", "0");
					var n = this.$menu.parent().clone().appendTo("body"),
						t = this.options.container ? this.$newElement.clone().appendTo("body") : n,
						i = n.children(".dropdown-menu").outerWidth(),
						r = t.css("width", "auto").children("button").outerWidth();
					n.remove();
					t.remove();
					this.$newElement.css("width", Math.max(i, r) + "px")
				} else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
				this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
			},
			selectPosition: function () {
				this.$bsContainer = n('<div class="bs-container" />');
				var u, i, f, t = this,
					r = n(this.options.container),
					e = function (n) {
						t.$bsContainer.addClass(n.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", n.hasClass("dropup"));
						u = n.offset();
						r.is("body") ? i = {
							top: 0,
							left: 0
						} : (i = r.offset(), i.top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), i.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft());
						f = n.hasClass("dropup") ? 0 : n[0].offsetHeight;
						t.$bsContainer.css({
							top: u.top - i.top + f,
							left: u.left - i.left,
							width: n[0].offsetWidth
						})
					};
				this.$button.on("click", function () {
					var i = n(this);
					t.isDisabled() || (e(t.$newElement), t.$bsContainer.appendTo(t.options.container).toggleClass("open", !i.hasClass("open")).append(t.$menu))
				});
				n(window).on("resize scroll", function () {
					e(t.$newElement)
				});
				this.$element.on("hide.bs.select", function () {
					t.$menu.data("height", t.$menu.height());
					t.$bsContainer.detach()
				})
			},
			setSelected: function (n, t, i) {
				i || (this.togglePlaceholder(), i = this.findLis().eq(this.liObj[n]));
				i.toggleClass("selected", t).find("a").attr("aria-selected", t)
			},
			setDisabled: function (n, t, i) {
				i || (i = this.findLis().eq(this.liObj[n]));
				t ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
			},
			isDisabled: function () {
				return this.$element[0].disabled
			},
			checkDisabled: function () {
				var n = this;
				this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex"));
				this.$button.click(function () {
					return !n.isDisabled()
				})
			},
			togglePlaceholder: function () {
				var n = this.$element.val();
				this.$button.toggleClass("bs-placeholder", null === n || "" === n || n.constructor === Array && 0 === n.length)
			},
			tabIndex: function () {
				this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")));
				this.$element.attr("tabindex", -98)
			},
			clickListener: function () {
				var t = this,
					i = n(document);
				i.data("spaceSelect", !1);
				this.$button.on("keyup", function (n) {
					/(32)/.test(n.keyCode.toString(10)) && i.data("spaceSelect") && (n.preventDefault(), i.data("spaceSelect", !1))
				});
				this.$button.on("click", function () {
					t.setSize()
				});
				this.$element.on("shown.bs.select", function () {
					var i, n;
					if (t.options.liveSearch || t.multiple) {
						if (!t.multiple) {
							if (i = t.liObj[t.$element[0].selectedIndex], "number" != typeof i || t.options.size === !1) return;
							n = t.$lis.eq(i)[0].offsetTop - t.$menuInner[0].offsetTop;
							n = n - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2;
							t.$menuInner[0].scrollTop = n
						}
					} else t.$menuInner.find(".selected a").focus()
				});
				this.$menuInner.on("click", "li a", function (i) {
					var h = n(this),
						o = h.parent().data("originalIndex"),
						nt = t.$element.val(),
						tt = t.$element.prop("selectedIndex"),
						a = !0,
						p, w, g;
					if (t.multiple && 1 !== t.options.maxOptions && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !h.parent().hasClass("disabled")) {
						var c = t.$element.find("option"),
							e = c.eq(o),
							v = e.prop("selected"),
							y = e.parent("optgroup"),
							r = t.options.maxOptions,
							f = y.data("maxOptions") || !1;
						if (t.multiple) {
							if ((e.prop("selected", !v), t.setSelected(o, !v), h.blur(), r !== !1 || f !== !1) && (p = r < c.filter(":selected").length, w = f < y.find("option:selected").length, r && p || f && w))
								if (r && 1 == r) c.prop("selected", !1), e.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(o, !0);
								else if (f && 1 == f) y.find("option:selected").prop("selected", !1), e.prop("selected", !0), g = h.parent().data("optgroup"), t.$menuInner.find('[data-optgroup="' + g + '"]').removeClass("selected"), t.setSelected(o, !0);
							else {
								var b = "string" == typeof t.options.maxOptionsText ? [t.options.maxOptionsText, t.options.maxOptionsText] : t.options.maxOptionsText,
									s = "function" == typeof b ? b(r, f) : b,
									k = s[0].replace("{n}", r),
									d = s[1].replace("{n}", f),
									l = n('<div class="notify"><\/div>');
								s[2] && (k = k.replace("{var}", s[2][r > 1 ? 0 : 1]), d = d.replace("{var}", s[2][f > 1 ? 0 : 1]));
								e.prop("selected", !1);
								t.$menu.append(l);
								r && p && (l.append(n("<div>" + k + "<\/div>")), a = !1, t.$element.trigger("maxReached.bs.select"));
								f && w && (l.append(n("<div>" + d + "<\/div>")), a = !1, t.$element.trigger("maxReachedGrp.bs.select"));
								setTimeout(function () {
									t.setSelected(o, !1)
								}, 10);
								l.delay(750).fadeOut(300, function () {
									n(this).remove()
								})
							}
						} else c.prop("selected", !1), e.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), t.setSelected(o, !0);
						!t.multiple || t.multiple && 1 === t.options.maxOptions ? t.$button.focus() : t.options.liveSearch && t.$searchbox.focus();
						a && (nt != t.$element.val() && t.multiple || tt != t.$element.prop("selectedIndex") && !t.multiple) && (u = [o, e.prop("selected"), v], t.$element.triggerNative("change"))
					}
				});
				this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (i) {
					i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), t.options.liveSearch && !n(i.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
				});
				this.$menuInner.on("click", ".divider, .dropdown-header", function (n) {
					n.preventDefault();
					n.stopPropagation();
					t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
				});
				this.$menu.on("click", ".popover-title .close", function () {
					t.$button.click()
				});
				this.$searchbox.on("click", function (n) {
					n.stopPropagation()
				});
				this.$menu.on("click", ".actions-btn", function (i) {
					t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus();
					i.preventDefault();
					i.stopPropagation();
					n(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
				});
				this.$element.change(function () {
					t.render(!1);
					t.$element.trigger("changed.bs.select", u);
					u = null
				})
			},
			liveSearchListener: function () {
				var t = this,
					i = n('<li class="no-results"><\/li>');
				this.$button.on("click.dropdown.data-api", function () {
					t.$menuInner.find(".active").removeClass("active");
					t.$searchbox.val() && (t.$searchbox.val(""), t.$lis.not(".is-hidden").removeClass("hidden"), i.parent().length && i.remove());
					t.multiple || t.$menuInner.find(".selected").addClass("active");
					setTimeout(function () {
						t.$searchbox.focus()
					}, 10)
				});
				this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (n) {
					n.stopPropagation()
				});
				this.$searchbox.on("input propertychange", function () {
					var o, e, u, s;
					(t.$lis.not(".is-hidden").removeClass("hidden"), t.$lis.filter(".active").removeClass("active"), i.remove(), t.$searchbox.val()) && (e = t.$lis.not(".is-hidden, .divider, .dropdown-header"), (o = t.options.liveSearchNormalize ? e.not(":a" + t._searchStyle() + '("' + f(t.$searchbox.val()) + '")') : e.not(":" + t._searchStyle() + '("' + t.$searchbox.val() + '")'), o.length === e.length) ? (i.html(t.options.noneResultsText.replace("{0}", '"' + r(t.$searchbox.val()) + '"')), t.$menuInner.append(i), t.$lis.addClass("hidden")) : (o.addClass("hidden"), s = t.$lis.not(".hidden"), s.each(function (t) {
						var i = n(this);
						i.hasClass("divider") ? void 0 === u ? i.addClass("hidden") : (u && u.addClass("hidden"), u = i) : i.hasClass("dropdown-header") && s.eq(t + 1).data("optgroup") !== i.data("optgroup") ? i.addClass("hidden") : u = null
					}), u && u.addClass("hidden"), e.not(".hidden").first().addClass("active"), t.$menuInner.scrollTop(0)))
				})
			},
			_searchStyle: function () {
				return {
					begins: "ibegins",
					startsWith: "ibegins"
				}[this.options.liveSearchStyle] || "icontains"
			},
			val: function (n) {
				return "undefined" != typeof n ? (this.$element.val(n), this.render(), this.$element) : this.$element.val()
			},
			changeAll: function (t) {
				var r, f;
				if (this.multiple) {
					"undefined" == typeof t && (t = !0);
					this.findLis();
					var e = this.$element.find("option"),
						i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
						o = i.length,
						u = [];
					if (t) {
						if (i.filter(".selected").length === i.length) return
					} else if (0 === i.filter(".selected").length) return;
					for (i.toggleClass("selected", t), r = 0; r < o; r++) f = i[r].getAttribute("data-original-index"), u[u.length] = e.eq(f)[0];
					n(u).prop("selected", t);
					this.render(!1);
					this.togglePlaceholder();
					this.$element.triggerNative("change")
				}
			},
			selectAll: function () {
				return this.changeAll(!0)
			},
			deselectAll: function () {
				return this.changeAll(!1)
			},
			toggle: function (n) {
				n = n || window.event;
				n && n.stopPropagation();
				this.$button.trigger("click")
			},
			keydown: function (t) {
				var r, u, h, e, o = n(this),
					y = o.is("input") ? o.parent().parent() : o.parent(),
					i = y.data("this"),
					l = ":not(.disabled, .hidden, .dropdown-header, .divider)",
					a = {
						32: " ",
						48: "0",
						49: "1",
						50: "2",
						51: "3",
						52: "4",
						53: "5",
						54: "6",
						55: "7",
						56: "8",
						57: "9",
						59: ";",
						65: "a",
						66: "b",
						67: "c",
						68: "d",
						69: "e",
						70: "f",
						71: "g",
						72: "h",
						73: "i",
						74: "j",
						75: "k",
						76: "l",
						77: "m",
						78: "n",
						79: "o",
						80: "p",
						81: "q",
						82: "r",
						83: "s",
						84: "t",
						85: "u",
						86: "v",
						87: "w",
						88: "x",
						89: "y",
						90: "z",
						96: "0",
						97: "1",
						98: "2",
						99: "3",
						100: "4",
						101: "5",
						102: "6",
						103: "7",
						104: "8",
						105: "9"
					},
					f, v, s, c;
				if (e = i.$newElement.hasClass("open"), !e && (t.keyCode >= 48 && t.keyCode <= 57 || t.keyCode >= 96 && t.keyCode <= 105 || t.keyCode >= 65 && t.keyCode <= 90)) return i.options.container ? i.$button.trigger("click") : (i.setSize(), i.$menu.parent().addClass("open"), e = !0), void i.$searchbox.focus();
				if (i.options.liveSearch && /(^9$|27)/.test(t.keyCode.toString(10)) && e && (t.preventDefault(), t.stopPropagation(), i.$menuInner.click(), i.$button.focus()), /(38|40)/.test(t.keyCode.toString(10))) {
					if (r = i.$lis.filter(l), !r.length) return;
					u = i.options.liveSearch ? r.index(r.filter(".active")) : r.index(r.find("a").filter(":focus").parent());
					h = i.$menuInner.data("prevIndex");
					38 == t.keyCode ? (!i.options.liveSearch && u != h || u == -1 || u--, u < 0 && (u += r.length)) : 40 == t.keyCode && ((i.options.liveSearch || u == h) && u++, u %= r.length);
					i.$menuInner.data("prevIndex", u);
					i.options.liveSearch ? (t.preventDefault(), o.hasClass("dropdown-toggle") || (r.removeClass("active").eq(u).addClass("active").children("a").focus(), o.focus())) : r.eq(u).children("a").focus()
				} else o.is("input") || (s = [], r = i.$lis.filter(l), r.each(function (i) {
					n.trim(n(this).children("a").text().toLowerCase()).substring(0, 1) == a[t.keyCode] && s.push(i)
				}), f = n(document).data("keycount"), f++, n(document).data("keycount", f), v = n.trim(n(":focus").text().toLowerCase()).substring(0, 1), v != a[t.keyCode] ? (f = 1, n(document).data("keycount", f)) : f >= s.length && (n(document).data("keycount", 0), f > s.length && (f = 1)), r.eq(s[f - 1]).children("a").focus());
				(/(13|32)/.test(t.keyCode.toString(10)) || /(^9$)/.test(t.keyCode.toString(10)) && i.options.selectOnTab) && e && ((/(32)/.test(t.keyCode.toString(10)) || t.preventDefault(), i.options.liveSearch) ? /(32)/.test(t.keyCode.toString(10)) || (i.$menuInner.find(".active a").click(), o.focus()) : (c = n(":focus"), c.click(), c.focus(), t.preventDefault(), n(document).data("spaceSelect", !0)), n(document).data("keycount", 0));
				(/(^9$|27)/.test(t.keyCode.toString(10)) && e && (i.multiple || i.options.liveSearch) || /(27)/.test(t.keyCode.toString(10)) && !e) && (i.$menu.parent().removeClass("open"), i.options.container && i.$newElement.removeClass("open"), i.$button.focus())
			},
			mobile: function () {
				this.$element.addClass("mobile-device")
			},
			refresh: function () {
				this.$lis = null;
				this.liObj = {};
				this.reloadLi();
				this.render();
				this.checkDisabled();
				this.liHeight(!0);
				this.setStyle();
				this.setWidth();
				this.$lis && this.$searchbox.trigger("propertychange");
				this.$element.trigger("refreshed.bs.select")
			},
			hide: function () {
				this.$newElement.hide()
			},
			show: function () {
				this.$newElement.show()
			},
			remove: function () {
				this.$newElement.remove();
				this.$element.remove()
			},
			destroy: function () {
				this.$newElement.before(this.$element).remove();
				this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove();
				this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
			}
		};
		h = n.fn.selectpicker;
		n.fn.selectpicker = e;
		n.fn.selectpicker.Constructor = t;
		n.fn.selectpicker.noConflict = function () {
			return n.fn.selectpicker = h, this
		};
		n(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', t.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (n) {
			n.stopPropagation()
		});
		n(window).on("load.bs.select.data-api", function () {
			n(".selectpicker").each(function () {
				var t = n(this);
				e.call(t, t.data())
			})
		})
	}(n)
}),
function (n, t, i) {
	function y(n) {
		var t = {},
			r = /^jQuery\d+$/;
		return i.each(n.attributes, function (n, i) {
			i.specified && !r.test(i.name) && (t[i.name] = i.value)
		}), t
	}

	function e(n, t) {
		var u = this,
			r = i(u);
		if (u.value == r.attr("placeholder") && r.hasClass("placeholder"))
			if (r.data("placeholder-password")) {
				if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), n === !0) return r[0].value = t;
				r.focus()
			} else u.value = "", r.removeClass("placeholder"), u == v() && u.select()
	}

	function s() {
		var t, r = this,
			n = i(r),
			u = this.id;
		if (r.value == "") {
			if (r.type == "password") {
				if (!n.data("placeholder-textinput")) {
					try {
						t = n.clone().attr({
							type: "text"
						})
					} catch (f) {
						t = i("<input>").attr(i.extend(y(this), {
							type: "text"
						}))
					}
					t.removeAttr("name").data({
						"placeholder-password": n,
						"placeholder-id": u
					}).bind("focus.placeholder", e);
					n.data({
						"placeholder-textinput": t,
						"placeholder-id": u
					}).before(t)
				}
				n = n.removeAttr("id").hide().prev().attr("id", u).show()
			}
			n.addClass("placeholder");
			n[0].value = n.attr("placeholder")
		} else n.removeClass("placeholder")
	}

	function v() {
		try {
			return t.activeElement
		} catch (n) {}
	}
	var h = Object.prototype.toString.call(n.operamini) == "[object OperaMini]",
		f = "placeholder" in t.createElement("input") && !h,
		o = "placeholder" in t.createElement("textarea") && !h,
		c = i.fn,
		l = i.valHooks,
		a = i.propHooks,
		u, r;
	f && o ? (r = c.placeholder = function () {
		return this
	}, r.input = r.textarea = !0) : (r = c.placeholder = function () {
		var n = this;
		return n.filter((f ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
			"focus.placeholder": e,
			"blur.placeholder": s
		}).data("placeholder-enabled", !0).trigger("blur.placeholder"), n
	}, r.input = f, r.textarea = o, u = {
		get: function (n) {
			var t = i(n),
				r = t.data("placeholder-password");
			return r ? r[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : n.value
		},
		set: function (n, t) {
			var r = i(n),
				u = r.data("placeholder-password");
			return u ? u[0].value = t : r.data("placeholder-enabled") ? (t == "" ? (n.value = t, n != v() && s.call(n)) : r.hasClass("placeholder") ? e.call(n, !0, t) || (n.value = t) : n.value = t, r) : n.value = t
		}
	}, f || (l.input = u, a.value = u), o || (l.textarea = u, a.value = u), i(function () {
		i(t).delegate("form", "submit.placeholder", function () {
			var n = i(".placeholder", this).each(e);
			setTimeout(function () {
				n.each(s)
			}, 10)
		})
	}), i(n).bind("beforeunload.placeholder", function () {
		i(".placeholder").each(function () {
			this.value = ""
		})
	}))
}(this, document, jQuery);
! function (n, t) {
	if ("function" == typeof define && define.amd) define(["jquery"], t);
	else if ("object" == typeof module && module.exports) {
		var i;
		try {
			i = require("jquery")
		} catch (r) {
			i = null
		}
		module.exports = t(i)
	} else n.Slider = t(n.jQuery)
}(this, function (n) {
	var t;
	return function (n) {
			"use strict";

			function t() {}

			function i(n) {
				function u(t) {
					t.prototype.option || (t.prototype.option = function (t) {
						n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
					})
				}

				function f(t, u) {
					n.fn[t] = function (f) {
						var c, e, s, o;
						if ("string" == typeof f) {
							for (var l = r.call(arguments, 1), h = 0, a = this.length; a > h; h++)
								if (c = this[h], e = n.data(c, t), e)
									if (n.isFunction(e[f]) && "_" !== f.charAt(0)) {
										if (s = e[f].apply(e, l), void 0 !== s && s !== e) return s
									} else i("no such method '" + f + "' for " + t + " instance");
							else i("cannot call methods on " + t + " prior to initialization; attempted to call '" + f + "'");
							return this
						}
						return o = this.map(function () {
							var i = n.data(this, t);
							return i ? (i.option(f), i._init()) : (i = new u(this, f), n.data(this, t, i)), n(this)
						}), !o || o.length > 1 ? o : o[0]
					}
				}
				if (n) {
					var i = "undefined" == typeof console ? t : function (n) {
						console.error(n)
					};
					return n.bridget = function (n, t) {
						u(t);
						f(n, t)
					}, n.bridget
				}
			}
			var r = Array.prototype.slice;
			i(n)
		}(n),
		function (n) {
			function i(t, i) {
				function k(n, t) {
					var r = "data-slider-" + t,
						i = n.getAttribute(r);
					try {
						return JSON.parse(i)
					} catch (u) {
						return i
					}
				}
				var u, h, c, l, a, p, v, f, r, w, b;
				"string" == typeof t ? this.element = document.querySelector(t) : t instanceof HTMLElement && (this.element = t);
				var e, o, s, d = this.element.style.width,
					y = !1,
					g = this.element.parentNode;
				for (this.sliderElem ? y = !0 : (this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider", u = document.createElement("div"), u.className = "slider-track", e = document.createElement("div"), e.className = "slider-selection", o = document.createElement("div"), o.className = "slider-handle min-slider-handle", s = document.createElement("div"), s.className = "slider-handle max-slider-handle", u.appendChild(e), u.appendChild(o), u.appendChild(s), h = function (n) {
						var i = document.createElement("div"),
							t;
						i.className = "tooltip-arrow";
						t = document.createElement("div");
						t.className = "tooltip-inner";
						n.appendChild(i);
						n.appendChild(t)
					}, c = document.createElement("div"), c.className = "tooltip tooltip-main", h(c), l = document.createElement("div"), l.className = "tooltip tooltip-min", h(l), a = document.createElement("div"), a.className = "tooltip tooltip-max", h(a), this.sliderElem.appendChild(u), this.sliderElem.appendChild(c), this.sliderElem.appendChild(l), this.sliderElem.appendChild(a), g.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"), n && (this.$element = n(this.element), this.$sliderElem = n(this.sliderElem)), i = i ? i : {}, p = Object.keys(this.defaultOptions), v = 0; v < p.length; v++) f = p[v], r = i[f], r = "undefined" != typeof r ? r : k(this.element, f), r = null !== r ? r : this.defaultOptions[f], this.options || (this.options = {}), this.options[f] = r;
				this.eventToCallbackMap = {};
				this.sliderElem.id = this.options.id;
				this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
				this.tooltip = this.sliderElem.querySelector(".tooltip-main");
				this.tooltipInner = this.tooltip.querySelector(".tooltip-inner");
				this.tooltip_min = this.sliderElem.querySelector(".tooltip-min");
				this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner");
				this.tooltip_max = this.sliderElem.querySelector(".tooltip-max");
				this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner");
				y === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top", "width", "height"].forEach(function (n) {
					this._removeProperty(this.trackSelection, n)
				}, this), [this.handle1, this.handle2].forEach(function (n) {
					this._removeProperty(n, "left");
					this._removeProperty(n, "top")
				}, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (n) {
					this._removeProperty(n, "left");
					this._removeProperty(n, "top");
					this._removeProperty(n, "margin-left");
					this._removeProperty(n, "margin-top");
					this._removeClass(n, "right");
					this._removeClass(n, "top")
				}, this));
				"vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this._addClass(this.tooltip, "right"), this.tooltip.style.left = "100%", this._addClass(this.tooltip_min, "right"), this.tooltip_min.style.left = "100%", this._addClass(this.tooltip_max, "right"), this.tooltip_max.style.left = "100%") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = d, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this._addClass(this.tooltip, "top"), this.tooltip.style.top = -this.tooltip.outerHeight - 14 + "px", this._addClass(this.tooltip_min, "top"), this.tooltip_min.style.top = -this.tooltip_min.outerHeight - 14 + "px", this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = -this.tooltip_max.outerHeight - 14 + "px");
				this.options.value instanceof Array ? this.options.range = !0 : this.options.range && (this.options.value = [this.options.value, this.options.max]);
				this.trackSelection = e || this.trackSelection;
				"none" === this.options.selection && this._addClass(this.trackSelection, "hide");
				this.handle1 = o || this.handle1;
				this.handle2 = s || this.handle2;
				y === !0 && (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"));
				w = ["round", "triangle", "custom"];
				b = -1 !== w.indexOf(this.options.handle);
				b && (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle));
				this.offset = this._offset(this.sliderElem);
				this.size = this.sliderElem[this.sizePos];
				this.setValue(this.options.value);
				this.handle1Keydown = this._keydown.bind(this, 0);
				this.handle1.addEventListener("keydown", this.handle1Keydown, !1);
				this.handle2Keydown = this._keydown.bind(this, 1);
				this.handle2.addEventListener("keydown", this.handle2Keydown, !1);
				this.touchCapable ? (this.mousedown = this._mousedown.bind(this), this.sliderElem.addEventListener("touchstart", this.mousedown, !1)) : (this.mousedown = this._mousedown.bind(this), this.sliderElem.addEventListener("mousedown", this.mousedown, !1));
				"hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1));
				this.options.enabled ? this.enable() : this.disable()
			}
			var r = {
					formatInvalidInputErrorMsg: function (n) {
						return "Invalid input value '" + n + "' passed in"
					},
					callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
				},
				u;
			(t = function (n, t) {
				return i.call(this, n, t), this
			}, t.prototype = {
				_init: function () {},
				constructor: t,
				defaultOptions: {
					id: "",
					min: 0,
					max: 10,
					step: 1,
					precision: 0,
					orientation: "horizontal",
					value: 5,
					range: !1,
					selection: "before",
					tooltip: "show",
					tooltip_split: !1,
					handle: "round",
					reversed: !1,
					enabled: !0,
					formatter: function (n) {
						return n instanceof Array ? n[0] + " : " + n[1] : n
					},
					natural_arrow_keys: !1
				},
				over: !1,
				inDrag: !1,
				getValue: function () {
					return this.options.range ? this.options.value : this.options.value[0]
				},
				setValue: function (n, t) {
					var u, r, i;
					return n || (n = 0), u = this.getValue(), this.options.value = this._validateInputValue(n), r = this._applyPrecision.bind(this), this.options.range ? (this.options.value[0] = r(this.options.value[0]), this.options.value[1] = r(this.options.value[1]), this.options.value[0] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[0])), this.options.value[1] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[1]))) : (this.options.value = r(this.options.value), this.options.value = [Math.max(this.options.min, Math.min(this.options.max, this.options.value))], this._addClass(this.handle2, "hide"), this.options.value[1] = "after" === this.options.selection ? this.options.max : this.options.min), this.diff = this.options.max - this.options.min, this.percentage = this.diff > 0 ? [100 * (this.options.value[0] - this.options.min) / this.diff, 100 * (this.options.value[1] - this.options.min) / this.diff, 100 * this.options.step / this.diff] : [0, 0, 100], this._layout(), i = this.options.range ? this.options.value : this.options.value[0], t === !0 && this._trigger("slide", i), u !== i && this._trigger("change", {
						oldValue: u,
						newValue: i
					}), this._setDataVal(i), this
				},
				destroy: function () {
					this._removeSliderEventHandlers();
					this.sliderElem.parentNode.removeChild(this.sliderElem);
					this.element.style.display = "";
					this._cleanUpEventCallbacksMap();
					this.element.removeAttribute("data");
					n && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
				},
				disable: function () {
					return this.options.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
				},
				enable: function () {
					return this.options.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
				},
				toggle: function () {
					return this.options.enabled ? this.disable() : this.enable(), this
				},
				isEnabled: function () {
					return this.options.enabled
				},
				on: function (t, i) {
					return n ? (this.$element.on(t, i), this.$sliderElem.on(t, i)) : this._bindNonQueryEventHandler(t, i), this
				},
				getAttribute: function (n) {
					return n ? this.options[n] : this.options
				},
				setAttribute: function (n, t) {
					return this.options[n] = t, this
				},
				refresh: function () {
					return this._removeSliderEventHandlers(), i.call(this, this.element, this.options), n && n.data(this.element, "slider", this), this
				},
				_removeSliderEventHandlers: function () {
					this.handle1.removeEventListener("keydown", this.handle1Keydown, !1);
					this.handle1.removeEventListener("focus", this.showTooltip, !1);
					this.handle1.removeEventListener("blur", this.hideTooltip, !1);
					this.handle2.removeEventListener("keydown", this.handle2Keydown, !1);
					this.handle2.removeEventListener("focus", this.handle2Keydown, !1);
					this.handle2.removeEventListener("blur", this.handle2Keydown, !1);
					this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1);
					this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1);
					this.sliderElem.removeEventListener("touchstart", this.mousedown, !1);
					this.sliderElem.removeEventListener("mousedown", this.mousedown, !1)
				},
				_bindNonQueryEventHandler: function (n, t) {
					void 0 === this.eventToCallbackMap[n] && (this.eventToCallbackMap[n] = []);
					this.eventToCallbackMap[n].push(t)
				},
				_cleanUpEventCallbacksMap: function () {
					for (var i, t = Object.keys(this.eventToCallbackMap), n = 0; n < t.length; n++) i = t[n], this.eventToCallbackMap[i] = null
				},
				_showTooltip: function () {
					this.options.tooltip_split === !1 ? this._addClass(this.tooltip, "in") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"));
					this.over = !0
				},
				_hideTooltip: function () {
					this.inDrag === !1 && this.alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in"));
					this.over = !1
				},
				_layout: function () {
					var n, i, r, t, u, f;
					(n = this.options.reversed ? [100 - this.percentage[0], this.percentage[1]] : [this.percentage[0], this.percentage[1]], this.handle1.style[this.stylePos] = n[0] + "%", this.handle2.style[this.stylePos] = n[1] + "%", "vertical" === this.options.orientation) ? (this.trackSelection.style.top = Math.min(n[0], n[1]) + "%", this.trackSelection.style.height = Math.abs(n[0] - n[1]) + "%") : (this.trackSelection.style.left = Math.min(n[0], n[1]) + "%", this.trackSelection.style.width = Math.abs(n[0] - n[1]) + "%", i = this.tooltip_min.getBoundingClientRect(), r = this.tooltip_max.getBoundingClientRect(), i.right > r.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "-30px"));
					this.options.range ? (t = this.options.formatter(this.options.value), this._setText(this.tooltipInner, t), this.tooltip.style[this.stylePos] = (n[1] + n[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), u = this.options.formatter(this.options.value[0]), this._setText(this.tooltipInner_min, u), f = this.options.formatter(this.options.value[1]), this._setText(this.tooltipInner_max, f), this.tooltip_min.style[this.stylePos] = n[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"), this.tooltip_max.style[this.stylePos] = n[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")) : (t = this.options.formatter(this.options.value[0]), this._setText(this.tooltipInner, t), this.tooltip.style[this.stylePos] = n[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"))
				},
				_removeProperty: function (n, t) {
					n.style.removeProperty ? n.style.removeProperty(t) : n.style.removeAttribute(t)
				},
				_mousedown: function (n) {
					var t, r, u, i;
					return this.options.enabled ? (this._triggerFocusOnHandle(), this.offset = this._offset(this.sliderElem), this.size = this.sliderElem[this.sizePos], t = this._getPercentage(n), this.options.range ? (r = Math.abs(this.percentage[0] - t), u = Math.abs(this.percentage[1] - t), this.dragged = u > r ? 0 : 1) : this.dragged = 0, this.percentage[this.dragged] = this.options.reversed ? 100 - t : t, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this.inDrag = !0, i = this._calculateValue(), this._trigger("slideStart", i), this._setDataVal(i), this.setValue(i), this._pauseEvent(n), !0) : !1
				},
				_triggerFocusOnHandle: function (n) {
					0 === n && this.handle1.focus();
					1 === n && this.handle2.focus()
				},
				_keydown: function (n, t) {
					var r, f, e, o, i, u;
					if (!this.options.enabled) return !1;
					switch (t.keyCode) {
						case 37:
						case 40:
							r = -1;
							break;
						case 39:
						case 38:
							r = 1
					}
					if (r) return this.options.natural_arrow_keys && (f = "vertical" === this.options.orientation && !this.options.reversed, e = "horizontal" === this.options.orientation && this.options.reversed, (f || e) && (r = -1 * r)), o = r * this.percentage[2], i = this.percentage[n] + o, i > 100 ? i = 100 : 0 > i && (i = 0), this.dragged = n, this._adjustPercentageForRangeSliders(i), this.percentage[this.dragged] = i, this._layout(), u = this._calculateValue(), this._trigger("slideStart", u), this._setDataVal(u), this.setValue(u, !0), this._trigger("slideStop", u), this._setDataVal(u), this._pauseEvent(t), !1
				},
				_pauseEvent: function (n) {
					n.stopPropagation && n.stopPropagation();
					n.preventDefault && n.preventDefault();
					n.cancelBubble = !0;
					n.returnValue = !1
				},
				_mousemove: function (n) {
					var t, i;
					return this.options.enabled ? (t = this._getPercentage(n), this._adjustPercentageForRangeSliders(t), this.percentage[this.dragged] = this.options.reversed ? 100 - t : t, this._layout(), i = this._calculateValue(), this.setValue(i, !0), !1) : !1
				},
				_adjustPercentageForRangeSliders: function (n) {
					this.options.range && (0 === this.dragged && this.percentage[1] < n ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > n && (this.percentage[1] = this.percentage[0], this.dragged = 0))
				},
				_mouseup: function () {
					if (!this.options.enabled) return !1;
					this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1));
					document.removeEventListener("mousemove", this.mousemove, !1);
					document.removeEventListener("mouseup", this.mouseup, !1);
					this.inDrag = !1;
					this.over === !1 && this._hideTooltip();
					var n = this._calculateValue();
					return this._layout(), this._trigger("slideStop", n), this._setDataVal(n), !1
				},
				_calculateValue: function () {
					var n;
					return this.options.range ? (n = [this.options.min, this.options.max], 0 !== this.percentage[0] && (n[0] = Math.max(this.options.min, this.options.min + Math.round(this.diff * this.percentage[0] / 100 / this.options.step) * this.options.step), n[0] = this._applyPrecision(n[0])), 100 !== this.percentage[1] && (n[1] = Math.min(this.options.max, this.options.min + Math.round(this.diff * this.percentage[1] / 100 / this.options.step) * this.options.step), n[1] = this._applyPrecision(n[1]))) : (n = this.options.min + Math.round(this.diff * this.percentage[0] / 100 / this.options.step) * this.options.step, n < this.options.min ? n = this.options.min : n > this.options.max && (n = this.options.max), n = parseFloat(n), n = this._applyPrecision(n)), n
				},
				_applyPrecision: function (n) {
					var t = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
					return this._applyToFixedAndParseFloat(n, t)
				},
				_getNumDigitsAfterDecimalPlace: function (n) {
					var t = ("" + n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
					return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
				},
				_applyToFixedAndParseFloat: function (n, t) {
					var i = n.toFixed(t);
					return parseFloat(i)
				},
				_getPercentage: function (n) {
					this.touchCapable && ("touchstart" === n.type || "touchmove" === n.type) && (n = n.touches[0]);
					var t = 100 * (n[this.mousePos] - this.offset[this.stylePos]) / this.size;
					return t = Math.round(t / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, t))
				},
				_validateInputValue: function (n) {
					if ("number" == typeof n) return n;
					if (n instanceof Array) return this._validateArray(n), n;
					throw new Error(r.formatInvalidInputErrorMsg(n));
				},
				_validateArray: function (n) {
					for (var i, t = 0; t < n.length; t++)
						if (i = n[t], "number" != typeof i) throw new Error(r.formatInvalidInputErrorMsg(i));
				},
				_setDataVal: function (n) {
					var t = "value: '" + n + "'";
					this.element.setAttribute("data", t);
					this.element.setAttribute("value", n)
				},
				_trigger: function (t, i) {
					var r, u, f;
					if (i = i || 0 === i ? i : void 0, r = this.eventToCallbackMap[t], r && r.length)
						for (u = 0; u < r.length; u++) f = r[u], f(i);
					n && this._triggerJQueryEvent(t, i)
				},
				_triggerJQueryEvent: function (n, t) {
					var i = {
						type: n,
						value: t
					};
					this.$element.trigger(i);
					this.$sliderElem.trigger(i)
				},
				_unbindJQueryEventHandlers: function () {
					this.$element.off();
					this.$sliderElem.off()
				},
				_setText: function (n, t) {
					"undefined" != typeof n.innerText ? n.innerText = t : "undefined" != typeof n.textContent && (n.textContent = t)
				},
				_removeClass: function (n, t) {
					for (var f, e, u = t.split(" "), i = n.className, r = 0; r < u.length; r++) f = u[r], e = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"), i = i.replace(e, " ");
					n.className = i.trim()
				},
				_addClass: function (n, t) {
					for (var u = t.split(" "), i = n.className, r = 0; r < u.length; r++) {
						var f = u[r],
							e = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"),
							o = e.test(i);
						o || (i += " " + f)
					}
					n.className = i.trim()
				},
				_offset: function (n) {
					var t = 0,
						i = 0;
					if (n.offsetParent)
						do t += n.offsetLeft, i += n.offsetTop; while (n = n.offsetParent);
					return {
						left: t,
						top: i
					}
				},
				_css: function (t, i, r) {
					if (n) n.style(t, i, r);
					else {
						var u = i.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (n, t) {
							return t.toUpperCase()
						});
						t.style[u] = r
					}
				}
			}, n) && (u = n.fn.slider ? "bootstrapSlider" : "slider", n.bridget(u, t))
		}(n), t
}),
function (n, t) {
	function u() {
		return new Date(Date.UTC.apply(Date, arguments))
	}

	function e() {
		var n = new Date;
		return u(n.getFullYear(), n.getMonth(), n.getDate())
	}

	function c(n) {
		return function () {
			return this[n].apply(this, arguments)
		}
	}

	function y(t, i) {
		function o(n, t) {
			return t.toLowerCase()
		}
		var u = n(t).data(),
			f = {},
			e, s = new RegExp("^" + i.toLowerCase() + "([A-Z])"),
			r;
		i = new RegExp("^" + i.toLowerCase());
		for (r in u) i.test(r) && (e = r.replace(s, o), f[e] = u[r]);
		return f
	}

	function p(t) {
		var u = {},
			i;
		if (r[t] || (t = t.split("-")[0], r[t])) return i = r[t], n.each(v, function (n, t) {
			t in i && (u[t] = i[t])
		}), u
	}
	var s = n(window),
		l = function () {
			var t = {
				get: function (n) {
					return this.slice(n)[0]
				},
				contains: function (n) {
					for (var i = n && n.valueOf(), t = 0, r = this.length; t < r; t++)
						if (this[t].valueOf() === i) return t;
					return -1
				},
				remove: function (n) {
					this.splice(n, 1)
				},
				replace: function (t) {
					t && (n.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
				},
				clear: function () {
					this.splice(0)
				},
				copy: function () {
					var n = new l;
					return n.replace(this), n
				}
			};
			return function () {
				var i = [];
				return i.push.apply(i, arguments), n.extend(i, t), i
			}
		}(),
		f = function (t, r) {
			this.dates = new l;
			this.viewDate = e();
			this.focusDate = null;
			this._process_options(r);
			this.element = n(t);
			this.isInline = !1;
			this.isInput = this.element.is("input");
			this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1;
			this.hasInput = this.component && this.element.find("input").length;
			this.component && this.component.length === 0 && (this.component = !1);
			this.picker = n(i.template);
			this._buildEvents();
			this._attachEvents();
			this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu");
			this.o.rtl && this.picker.addClass("datepicker-rtl");
			this.viewMode = this.o.startView;
			this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (n, t) {
				return parseInt(t) + 1
			});
			this._allow_update = !1;
			this.setStartDate(this._o.startDate);
			this.setEndDate(this._o.endDate);
			this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
			this.fillDow();
			this.fillMonths();
			this._allow_update = !0;
			this.update();
			this.showMode();
			this.isInline && this.show()
		},
		h, a, o, v, r, i;
	f.prototype = {
		constructor: f,
		_process_options: function (t) {
			var u, e, h, f, s;
			this._o = n.extend({}, this._o, t);
			u = this.o = n.extend({}, this._o);
			e = u.language;
			r[e] || (e = e.split("-")[0], r[e] || (e = o.language));
			u.language = e;
			switch (u.startView) {
				case 2:
				case "decade":
					u.startView = 2;
					break;
				case 1:
				case "year":
					u.startView = 1;
					break;
				default:
					u.startView = 0
			}
			switch (u.minViewMode) {
				case 1:
				case "months":
					u.minViewMode = 1;
					break;
				case 2:
				case "years":
					u.minViewMode = 2;
					break;
				default:
					u.minViewMode = 0
			}
			if (u.startView = Math.max(u.startView, u.minViewMode), u.multidate !== !0 && (u.multidate = Number(u.multidate) || !1, u.multidate = u.multidate !== !1 ? Math.max(0, u.multidate) : 1), u.multidateSeparator = String(u.multidateSeparator), u.weekStart %= 7, u.weekEnd = (u.weekStart + 6) % 7, h = i.parseFormat(u.format), u.startDate !== -Infinity && (u.startDate = u.startDate ? u.startDate instanceof Date ? this._local_to_utc(this._zero_time(u.startDate)) : i.parseDate(u.startDate, h, u.language) : -Infinity), u.endDate !== Infinity && (u.endDate = u.endDate ? u.endDate instanceof Date ? this._local_to_utc(this._zero_time(u.endDate)) : i.parseDate(u.endDate, h, u.language) : Infinity), u.daysOfWeekDisabled = u.daysOfWeekDisabled || [], n.isArray(u.daysOfWeekDisabled) || (u.daysOfWeekDisabled = u.daysOfWeekDisabled.split(/[,\s]*/)), u.daysOfWeekDisabled = n.map(u.daysOfWeekDisabled, function (n) {
					return parseInt(n, 10)
				}), f = String(u.orientation).toLowerCase().split(/\s+/g), s = u.orientation.toLowerCase(), f = n.grep(f, function (n) {
					return /^auto|left|right|top|bottom$/.test(n)
				}), u.orientation = {
					x: "auto",
					y: "auto"
				}, s && s !== "auto")
				if (f.length === 1) switch (f[0]) {
					case "top":
					case "bottom":
						u.orientation.y = f[0];
						break;
					case "left":
					case "right":
						u.orientation.x = f[0]
				} else s = n.grep(f, function (n) {
					return /^left|right$/.test(n)
				}), u.orientation.x = s[0] || "auto", s = n.grep(f, function (n) {
					return /^top|bottom$/.test(n)
				}), u.orientation.y = s[0] || "auto"
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function (n) {
			for (var i = 0, f, r, u; i < n.length; i++) {
				f = n[i][0];
				n[i].length === 2 ? (r = t, u = n[i][1]) : n[i].length === 3 && (r = n[i][1], u = n[i][2]);
				f.on(u, r)
			}
		},
		_unapplyEvents: function (n) {
			for (var i = 0, f, r, u; i < n.length; i++) f = n[i][0], n[i].length === 2 ? (u = t, r = n[i][1]) : n[i].length === 3 && (u = n[i][1], r = n[i][2]), f.off(r, u)
		},
		_buildEvents: function () {
			this.isInput ? this._events = [
				[this.element, {
					focus: n.proxy(this.show, this),
					keyup: n.proxy(function (t) {
						n.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
					}, this),
					keydown: n.proxy(this.keydown, this)
				}]
			] : this.component && this.hasInput ? this._events = [
				[this.element.find("input"), {
					focus: n.proxy(this.show, this),
					keyup: n.proxy(function (t) {
						n.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
					}, this),
					keydown: n.proxy(this.keydown, this)
				}],
				[this.component, {
					click: n.proxy(this.show, this)
				}]
			] : this.element.is("div") ? this.isInline = !0 : this._events = [
				[this.element, {
					click: n.proxy(this.show, this)
				}]
			];
			this._events.push([this.element, "*", {
				blur: n.proxy(function (n) {
					this._focused_from = n.target
				}, this)
			}], [this.element, {
				blur: n.proxy(function (n) {
					this._focused_from = n.target
				}, this)
			}]);
			this._secondaryEvents = [
				[this.picker, {
					click: n.proxy(this.click, this)
				}],
				[n(window), {
					resize: n.proxy(this.place, this)
				}],
				[n(document), {
					"mousedown touchstart": n.proxy(function (n) {
						this.element.is(n.target) || this.element.find(n.target).length || this.picker.is(n.target) || this.picker.find(n.target).length || this.hide()
					}, this)
				}]
			]
		},
		_attachEvents: function () {
			this._detachEvents();
			this._applyEvents(this._events)
		},
		_detachEvents: function () {
			this._unapplyEvents(this._events)
		},
		_attachSecondaryEvents: function () {
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents)
		},
		_detachSecondaryEvents: function () {
			this._unapplyEvents(this._secondaryEvents)
		},
		_trigger: function (t, r) {
			var u = r || this.dates.get(-1),
				f = this._utc_to_local(u);
			this.element.trigger({
				type: t,
				date: f,
				dates: n.map(this.dates, this._utc_to_local),
				format: n.proxy(function (n, t) {
					arguments.length === 0 ? (n = this.dates.length - 1, t = this.o.format) : typeof n == "string" && (t = n, n = this.dates.length - 1);
					t = t || this.o.format;
					var r = this.dates.get(n);
					return i.formatDate(r, t, this.o.language)
				}, this)
			})
		},
		show: function () {
			this.isInline || this.picker.appendTo("body");
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger("show")
		},
		hide: function () {
			this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
		},
		remove: function () {
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			this.isInput || delete this.element.data().date
		},
		_utc_to_local: function (n) {
			return n && new Date(n.getTime() + n.getTimezoneOffset() * 6e4)
		},
		_local_to_utc: function (n) {
			return n && new Date(n.getTime() - n.getTimezoneOffset() * 6e4)
		},
		_zero_time: function (n) {
			return n && new Date(n.getFullYear(), n.getMonth(), n.getDate())
		},
		_zero_utc_time: function (n) {
			return n && new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()))
		},
		getDates: function () {
			return n.map(this.dates, this._utc_to_local)
		},
		getUTCDates: function () {
			return n.map(this.dates, function (n) {
				return new Date(n)
			})
		},
		getDate: function () {
			return this._utc_to_local(this.getUTCDate())
		},
		getUTCDate: function () {
			return new Date(this.dates.get(-1))
		},
		setDates: function () {
			var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, t);
			this._trigger("changeDate");
			this.setValue()
		},
		setUTCDates: function () {
			var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, n.map(t, this._utc_to_local));
			this._trigger("changeDate");
			this.setValue()
		},
		setDate: c("setDates"),
		setUTCDate: c("setUTCDates"),
		setValue: function () {
			var n = this.getFormattedDate();
			this.isInput ? this.element.val(n).change() : this.component && this.element.find("input").val(n).change()
		},
		getFormattedDate: function (r) {
			r === t && (r = this.o.format);
			var u = this.o.language;
			return n.map(this.dates, function (n) {
				return i.formatDate(n, r, u)
			}).join(this.o.multidateSeparator)
		},
		setStartDate: function (n) {
			this._process_options({
				startDate: n
			});
			this.update();
			this.updateNavArrows()
		},
		setEndDate: function (n) {
			this._process_options({
				endDate: n
			});
			this.update();
			this.updateNavArrows()
		},
		setDaysOfWeekDisabled: function (n) {
			this._process_options({
				daysOfWeekDisabled: n
			});
			this.update();
			this.updateNavArrows()
		},
		place: function () {
			var i, v, o;
			if (!this.isInline) {
				var u = this.picker.outerWidth(),
					f = this.picker.outerHeight(),
					h = 10,
					c = s.width(),
					y = s.height(),
					l = s.scrollTop(),
					p = parseInt(this.element.parents().filter(function () {
						return n(this).css("z-index") !== "auto"
					}).first().css("z-index")) + 10,
					t = this.component ? this.component.parent().offset() : this.element.offset(),
					a = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
					w = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
					r = t.left,
					e = t.top;
				this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left");
				this.o.orientation.x !== "auto" ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), this.o.orientation.x === "right" && (r -= u - w)) : (this.picker.addClass("datepicker-orient-left"), t.left < 0 ? r -= t.left - h : t.left + u > c && (r = c - u - h));
				i = this.o.orientation.y;
				i === "auto" && (v = -l + t.top - f, o = l + y - (t.top + a + f), i = Math.max(v, o) === o ? "top" : "bottom");
				this.picker.addClass("datepicker-orient-" + i);
				i === "top" ? e += a : e -= f + parseInt(this.picker.css("padding-top"));
				this.picker.css({
					top: e,
					left: r,
					zIndex: p
				})
			}
		},
		_allow_update: !0,
		update: function () {
			if (this._allow_update) {
				var r = this.dates.copy(),
					t = [],
					u = !1;
				arguments.length ? (n.each(arguments, n.proxy(function (n, i) {
					i instanceof Date && (i = this._local_to_utc(i));
					t.push(i)
				}, this)), u = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), t = t && this.o.multidate ? t.split(this.o.multidateSeparator) : [t], delete this.element.data().date);
				t = n.map(t, n.proxy(function (n) {
					return i.parseDate(n, this.o.format, this.o.language)
				}, this));
				t = n.grep(t, n.proxy(function (n) {
					return n < this.o.startDate || n > this.o.endDate || !n
				}, this), !0);
				this.dates.replace(t);
				this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate));
				u ? this.setValue() : t.length && String(r) !== String(this.dates) && this._trigger("changeDate");
				!this.dates.length && r.length && this._trigger("clearDate");
				this.fill()
			}
		},
		fillDow: function () {
			var i = this.o.weekStart,
				n = "<tr>",
				t;
			for (this.o.calendarWeeks && (t = '<th class="cw"> <\/th>', n += t, this.picker.find(".datepicker-days thead tr:first-child").prepend(t)); i < this.o.weekStart + 7;) n += '<th class="dow">' + r[this.o.language].daysMin[i++ % 7] + "<\/th>";
			n += "<\/tr>";
			this.picker.find(".datepicker-days thead").append(n)
		},
		fillMonths: function () {
			for (var n = "", t = 0; t < 12;) n += '<span class="month">' + r[this.o.language].monthsShort[t++] + "<\/span>";
			this.picker.find(".datepicker-months td").html(n)
		},
		setRange: function (t) {
			t && t.length ? this.range = n.map(t, function (n) {
				return n.valueOf()
			}) : delete this.range;
			this.fill()
		},
		getClassNames: function (t) {
			var i = [],
				r = this.viewDate.getUTCFullYear(),
				f = this.viewDate.getUTCMonth(),
				u = new Date;
			return t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < f ? i.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > f) && i.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === u.getFullYear() && t.getUTCMonth() === u.getMonth() && t.getUTCDate() === u.getDate() && i.push("today"), this.dates.contains(t) !== -1 && i.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || n.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) && i.push("disabled"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"), n.inArray(t.valueOf(), this.range) !== -1 && i.push("selected")), i
		},
		fill: function () {
			var d = new Date(this.viewDate),
				f = d.getUTCFullYear(),
				g = d.getUTCMonth(),
				y = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				ut = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				p = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				ft = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				et = r[this.o.language].today || r.en.today || "",
				ot = r[this.o.language].clear || r.en.clear || "",
				w, e, b, c, s, h, o, a, it, rt, l, v;
			for (this.picker.find(".datepicker-days thead th.datepicker-switch").text(r[this.o.language].months[g] + " " + f), this.picker.find("tfoot th.today").text(et).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(ot).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths(), e = u(f, g - 1, 28), b = i.getDaysInMonth(e.getUTCFullYear(), e.getUTCMonth()), e.setUTCDate(b), e.setUTCDate(b - (e.getUTCDay() - this.o.weekStart + 7) % 7), c = new Date(e), c.setUTCDate(c.getUTCDate() + 42), c = c.valueOf(), s = []; e.valueOf() < c;) {
				if (e.getUTCDay() === this.o.weekStart && (s.push("<tr>"), this.o.calendarWeeks)) {
					var nt = new Date(+e + (this.o.weekStart - e.getUTCDay() - 7) % 7 * 864e5),
						tt = new Date(Number(nt) + (11 - nt.getUTCDay()) % 7 * 864e5),
						k = new Date(Number(k = u(tt.getUTCFullYear(), 0, 1)) + (11 - k.getUTCDay()) % 7 * 864e5),
						st = (tt - k) / 6048e5 + 1;
					s.push('<td class="cw">' + st + "<\/td>")
				}
				h = this.getClassNames(e);
				h.push("day");
				this.o.beforeShowDay !== n.noop && (o = this.o.beforeShowDay(this._utc_to_local(e)), o === t ? o = {} : typeof o == "boolean" ? o = {
					enabled: o
				} : typeof o == "string" && (o = {
					classes: o
				}), o.enabled === !1 && h.push("disabled"), o.classes && (h = h.concat(o.classes.split(/\s+/))), o.tooltip && (w = o.tooltip));
				h = n.unique(h);
				s.push('<td class="' + h.join(" ") + '"' + (w ? ' title="' + w + '"' : "") + ">" + e.getUTCDate() + "<\/td>");
				e.getUTCDay() === this.o.weekEnd && s.push("<\/tr>");
				e.setUTCDate(e.getUTCDate() + 1)
			}
			for (this.picker.find(".datepicker-days tbody").empty().append(s.join("")), a = this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active"), n.each(this.dates, function (n, t) {
					t.getUTCFullYear() === f && a.eq(t.getUTCMonth()).addClass("active")
				}), (f < y || f > p) && a.addClass("disabled"), f === y && a.slice(0, ut).addClass("disabled"), f === p && a.slice(ft + 1).addClass("disabled"), s = "", f = parseInt(f / 10, 10) * 10, it = this.picker.find(".datepicker-years").find("th:eq(1)").text(f + "-" + (f + 9)).end().find("td"), f -= 1, rt = n.map(this.dates, function (n) {
					return n.getUTCFullYear()
				}), v = -1; v < 11; v++) l = ["year"], v === -1 ? l.push("old") : v === 10 && l.push("new"), n.inArray(f, rt) !== -1 && l.push("active"), (f < y || f > p) && l.push("disabled"), s += '<span class="' + l.join(" ") + '">' + f + "<\/span>", f += 1;
			it.html(s)
		},
		updateNavArrows: function () {
			if (this._allow_update) {
				var t = new Date(this.viewDate),
					n = t.getUTCFullYear(),
					i = t.getUTCMonth();
				switch (this.viewMode) {
					case 0:
						this.o.startDate !== -Infinity && n <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
							visibility: "hidden"
						}) : this.picker.find(".prev").css({
							visibility: "visible"
						});
						this.o.endDate !== Infinity && n >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
							visibility: "hidden"
						}) : this.picker.find(".next").css({
							visibility: "visible"
						});
						break;
					case 1:
					case 2:
						this.o.startDate !== -Infinity && n <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
							visibility: "hidden"
						}) : this.picker.find(".prev").css({
							visibility: "visible"
						});
						this.o.endDate !== Infinity && n >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
							visibility: "hidden"
						}) : this.picker.find(".next").css({
							visibility: "visible"
						})
				}
			}
		},
		click: function (t) {
			var r, e, f, o, c, s, l, h;
			if (t.preventDefault(), r = n(t.target).closest("span, td, th"), r.length === 1) switch (r[0].nodeName.toLowerCase()) {
				case "th":
					switch (r[0].className) {
						case "datepicker-switch":
							this.showMode(1);
							break;
						case "prev":
						case "next":
							c = i.modes[this.viewMode].navStep * (r[0].className === "prev" ? -1 : 1);
							switch (this.viewMode) {
								case 0:
									this.viewDate = this.moveMonth(this.viewDate, c);
									this._trigger("changeMonth", this.viewDate);
									break;
								case 1:
								case 2:
									this.viewDate = this.moveYear(this.viewDate, c);
									this.viewMode === 1 && this._trigger("changeYear", this.viewDate)
							}
							this.fill();
							break;
						case "today":
							s = new Date;
							s = u(s.getFullYear(), s.getMonth(), s.getDate(), 0, 0, 0);
							this.showMode(-2);
							l = this.o.todayBtn === "linked" ? null : "view";
							this._setDate(s, l);
							break;
						case "clear":
							this.isInput ? h = this.element : this.component && (h = this.element.find("input"));
							h && h.val("").change();
							this.update();
							this._trigger("changeDate");
							this.o.autoclose && this.hide()
					}
					break;
				case "span":
					r.is(".disabled") || (this.viewDate.setUTCDate(1), r.is(".month") ? (o = 1, f = r.parent().find("span").index(r), e = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(f), this._trigger("changeMonth", this.viewDate), this.o.minViewMode === 1 && this._setDate(u(e, f, o))) : (o = 1, f = 0, e = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(e), this._trigger("changeYear", this.viewDate), this.o.minViewMode === 2 && this._setDate(u(e, f, o))), this.showMode(-1), this.fill());
					break;
				case "td":
					r.is(".day") && !r.is(".disabled") && (o = parseInt(r.text(), 10) || 1, e = this.viewDate.getUTCFullYear(), f = this.viewDate.getUTCMonth(), r.is(".old") ? f === 0 ? (f = 11, e -= 1) : f -= 1 : r.is(".new") && (f === 11 ? (f = 0, e += 1) : f += 1), this._setDate(u(e, f, o)))
			}
			this.picker.is(":visible") && this._focused_from && n(this._focused_from).focus();
			delete this._focused_from
		},
		_toggle_multidate: function (n) {
			var t = this.dates.contains(n);
			if (n ? t !== -1 ? this.dates.remove(t) : this.dates.push(n) : this.dates.clear(), typeof this.o.multidate == "number")
				while (this.dates.length > this.o.multidate) this.dates.remove(0)
		},
		_setDate: function (n, t) {
			t && t !== "date" || this._toggle_multidate(n && new Date(n));
			t && t !== "view" || (this.viewDate = n && new Date(n));
			this.fill();
			this.setValue();
			this._trigger("changeDate");
			var i;
			this.isInput ? i = this.element : this.component && (i = this.element.find("input"));
			i && i.change();
			this.o.autoclose && (!t || t === "date") && this.hide()
		},
		moveMonth: function (n, i) {
			var e;
			if (!n) return t;
			if (!i) return n;
			var r = new Date(n.valueOf()),
				o = r.getUTCDate(),
				s = r.getUTCMonth(),
				h = Math.abs(i),
				u, f;
			if (i = i > 0 ? 1 : -1, h === 1) f = i === -1 ? function () {
				return r.getUTCMonth() === s
			} : function () {
				return r.getUTCMonth() !== u
			}, u = s + i, r.setUTCMonth(u), (u < 0 || u > 11) && (u = (u + 12) % 12);
			else {
				for (e = 0; e < h; e++) r = this.moveMonth(r, i);
				u = r.getUTCMonth();
				r.setUTCDate(o);
				f = function () {
					return u !== r.getUTCMonth()
				}
			}
			while (f()) r.setUTCDate(--o), r.setUTCMonth(u);
			return r
		},
		moveYear: function (n, t) {
			return this.moveMonth(n, t * 12)
		},
		dateWithinRange: function (n) {
			return n >= this.o.startDate && n <= this.o.endDate
		},
		keydown: function (n) {
			var o, t, i, u, r, f;
			if (this.picker.is(":not(:visible)")) {
				n.keyCode === 27 && this.show();
				return
			}
			o = !1;
			r = this.focusDate || this.viewDate;
			switch (n.keyCode) {
				case 27:
					this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide();
					n.preventDefault();
					break;
				case 37:
				case 39:
					if (!this.o.keyboardNavigation) break;
					t = n.keyCode === 37 ? -1 : 1;
					n.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || e(), t), u = this.moveYear(r, t), this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || e(), t), u = this.moveMonth(r, t), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || e()), i.setUTCDate(i.getUTCDate() + t), u = new Date(r), u.setUTCDate(r.getUTCDate() + t));
					this.dateWithinRange(i) && (this.focusDate = this.viewDate = u, this.setValue(), this.fill(), n.preventDefault());
					break;
				case 38:
				case 40:
					if (!this.o.keyboardNavigation) break;
					t = n.keyCode === 38 ? -1 : 1;
					n.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || e(), t), u = this.moveYear(r, t), this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || e(), t), u = this.moveMonth(r, t), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || e()), i.setUTCDate(i.getUTCDate() + t * 7), u = new Date(r), u.setUTCDate(r.getUTCDate() + t * 7));
					this.dateWithinRange(i) && (this.focusDate = this.viewDate = u, this.setValue(), this.fill(), n.preventDefault());
					break;
				case 13:
					r = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(r);
					o = !0;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					this.picker.is(":visible") && (n.preventDefault(), this.o.autoclose && this.hide());
					break;
				case 9:
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide()
			}
			o && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change())
		},
		showMode: function (n) {
			n && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + n)));
			this.picker.find(">div").hide().filter(".datepicker-" + i.modes[this.viewMode].clsName).css("display", "block");
			this.updateNavArrows()
		}
	};
	h = function (t, i) {
		this.element = n(t);
		this.inputs = n.map(i.inputs, function (n) {
			return n.jquery ? n[0] : n
		});
		delete i.inputs;
		n(this.inputs).datepicker(i).bind("changeDate", n.proxy(this.dateUpdated, this));
		this.pickers = n.map(this.inputs, function (t) {
			return n(t).data("datepicker")
		});
		this.updateDates()
	};
	h.prototype = {
		updateDates: function () {
			this.dates = n.map(this.pickers, function (n) {
				return n.getUTCDate()
			});
			this.updateRanges()
		},
		updateRanges: function () {
			var t = n.map(this.dates, function (n) {
				return n.valueOf()
			});
			n.each(this.pickers, function (n, i) {
				i.setRange(t)
			})
		},
		dateUpdated: function (t) {
			if (!this.updating) {
				this.updating = !0;
				var u = n(t.target).data("datepicker"),
					r = u.getUTCDate(),
					i = n.inArray(t.target, this.inputs),
					f = this.inputs.length;
				if (i !== -1) {
					if (n.each(this.pickers, function (n, t) {
							t.getUTCDate() || t.setUTCDate(r)
						}), r < this.dates[i])
						while (i >= 0 && r < this.dates[i]) this.pickers[i--].setUTCDate(r);
					else if (r > this.dates[i])
						while (i < f && r > this.dates[i]) this.pickers[i++].setUTCDate(r);
					this.updateDates();
					delete this.updating
				}
			}
		},
		remove: function () {
			n.map(this.pickers, function (n) {
				n.remove()
			});
			delete this.element.data().datepicker
		}
	};
	a = n.fn.datepicker;
	n.fn.datepicker = function (i) {
		var u = Array.apply(null, arguments),
			r;
		return u.shift(), this.each(function () {
			var s = n(this),
				e = s.data("datepicker"),
				l = typeof i == "object" && i,
				v;
			if (!e) {
				var a = y(this, "date"),
					w = n.extend({}, o, a, l),
					b = p(w.language),
					c = n.extend({}, o, b, a, l);
				s.is(".input-daterange") || c.inputs ? (v = {
					inputs: c.inputs || s.find("input").toArray()
				}, s.data("datepicker", e = new h(this, n.extend(c, v)))) : s.data("datepicker", e = new f(this, c))
			}
			if (typeof i == "string" && typeof e[i] == "function" && (r = e[i].apply(e, u), r !== t)) return !1
		}), r !== t ? r : this
	};
	o = n.fn.datepicker.defaults = {
		autoclose: !1,
		beforeShowDay: n.noop,
		calendarWeeks: !1,
		clearBtn: !1,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: !0,
		format: "mm/dd/yyyy",
		keyboardNavigation: !0,
		language: "en",
		minViewMode: 0,
		multidate: !1,
		multidateSeparator: ",",
		orientation: "auto",
		rtl: !1,
		startDate: -Infinity,
		startView: 0,
		todayBtn: !1,
		todayHighlight: !1,
		weekStart: 0
	};
	v = n.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
	n.fn.datepicker.Constructor = f;
	r = n.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};
	i = {
		modes: [{
			clsName: "days",
			navFnc: "Month",
			navStep: 1
		}, {
			clsName: "months",
			navFnc: "FullYear",
			navStep: 1
		}, {
			clsName: "years",
			navFnc: "FullYear",
			navStep: 10
		}],
		isLeapYear: function (n) {
			return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
		},
		getDaysInMonth: function (n, t) {
			return [31, i.isLeapYear(n) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function (n) {
			var t = n.replace(this.validParts, "\0").split("\0"),
				i = n.match(this.validParts);
			if (!t || !t.length || !i || i.length === 0) throw new Error("Invalid date format.");
			return {
				separators: t,
				parts: i
			}
		},
		parseDate: function (e, o, s) {
			function nt() {
				var n = this.slice(0, c[h].length),
					t = c[h].slice(0, n.length);
				return n === t
			}
			var tt, c, v, y, h, a, it, d, w;
			if (!e) return t;
			if (e instanceof Date) return e;
			if (typeof o == "string" && (o = i.parseFormat(o)), tt = /([\-+]\d+)([dmwy])/, c = e.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
				for (e = new Date, h = 0; h < c.length; h++) {
					v = tt.exec(c[h]);
					y = parseInt(v[1]);
					switch (v[2]) {
						case "d":
							e.setUTCDate(e.getUTCDate() + y);
							break;
						case "m":
							e = f.prototype.moveMonth.call(f.prototype, e, y);
							break;
						case "w":
							e.setUTCDate(e.getUTCDate() + y * 7);
							break;
						case "y":
							e = f.prototype.moveYear.call(f.prototype, e, y)
					}
				}
				return u(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0)
			}
			c = e && e.match(this.nonpunctuation) || [];
			e = new Date;
			var b = {},
				g = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
				l = {
					yyyy: function (n, t) {
						return n.setUTCFullYear(t)
					},
					yy: function (n, t) {
						return n.setUTCFullYear(2e3 + t)
					},
					m: function (n, t) {
						if (isNaN(n)) return n;
						for (t -= 1; t < 0;) t += 12;
						for (t %= 12, n.setUTCMonth(t); n.getUTCMonth() !== t;) n.setUTCDate(n.getUTCDate() - 1);
						return n
					},
					d: function (n, t) {
						return n.setUTCDate(t)
					}
				},
				p, k;
			if (l.M = l.MM = l.mm = l.m, l.dd = l.d, e = u(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0), a = o.parts.slice(), c.length !== a.length && (a = n(a).filter(function (t, i) {
					return n.inArray(i, g) !== -1
				}).toArray()), c.length === a.length) {
				for (h = 0, it = a.length; h < it; h++) {
					if (p = parseInt(c[h], 10), v = a[h], isNaN(p)) switch (v) {
						case "MM":
							k = n(r[s].months).filter(nt);
							p = n.inArray(k[0], r[s].months) + 1;
							break;
						case "M":
							k = n(r[s].monthsShort).filter(nt);
							p = n.inArray(k[0], r[s].monthsShort) + 1
					}
					b[v] = p
				}
				for (h = 0; h < g.length; h++) w = g[h], w in b && !isNaN(b[w]) && (d = new Date(e), l[w](d, b[w]), isNaN(d) || (e = d))
			}
			return e
		},
		formatDate: function (t, u, f) {
			var e, s, o, h;
			if (!t) return "";
			for (typeof u == "string" && (u = i.parseFormat(u)), e = {
					d: t.getUTCDate(),
					D: r[f].daysShort[t.getUTCDay()],
					DD: r[f].days[t.getUTCDay()],
					m: t.getUTCMonth() + 1,
					M: r[f].monthsShort[t.getUTCMonth()],
					MM: r[f].months[t.getUTCMonth()],
					yy: t.getUTCFullYear().toString().substring(2),
					yyyy: t.getUTCFullYear()
				}, e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, t = [], s = n.extend([], u.separators), o = 0, h = u.parts.length; o <= h; o++) s.length && t.push(s.shift()), t.push(e[u.parts[o]]);
			return t.join("")
		},
		headTemplate: '<thead><tr><th class="prev">??<\/th><th colspan="5" class="datepicker-switch"><\/th><th class="next">??<\/th><\/tr><\/thead>',
		contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>',
		footTemplate: '<tfoot><tr><th colspan="7" class="today"><\/th><\/tr><tr><th colspan="7" class="clear"><\/th><\/tr><\/tfoot>'
	};
	i.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + i.headTemplate + "<tbody><\/tbody>" + i.footTemplate + '<\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + "<\/table><\/div><\/div>";
	n.fn.datepicker.DPGlobal = i;
	n.fn.datepicker.noConflict = function () {
		return n.fn.datepicker = a, this
	};
	n(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
		var i = n(this);
		i.data("datepicker") || (t.preventDefault(), i.datepicker("show"))
	});
	n(function () {
		n('[data-provide="datepicker-inline"]').datepicker()
	})
}(window.jQuery);
$(window).scroll(function () {
	$(this).scrollTop() >= 73 ? $("#return-to-top").fadeIn(100) : $("#return-to-top").fadeOut(100)
});
$("#return-to-top").click(function () {
		$("body,html").animate({
			scrollTop: 0
		}, 500)
	}),
	function (n, t) {
		typeof define == "function" && define.amd ? define(["jquery"], t) : typeof exports == "object" ? module.exports = t(require("jquery")) : n.jquery_mmenu_js = t(n.jQuery)
	}(this, function (n) {
		return ! function (n) {
				function o() {
					n[i].glbl || (f = {
						$wndw: n(window),
						$docu: n(document),
						$html: n("html"),
						$body: n("body")
					}, t = {}, r = {}, u = {}, n.each([t, r, u], function (n, t) {
						t.add = function (n) {
							n = n.split(" ");
							for (var i = 0, r = n.length; i < r; i++) t[n[i]] = t.mm(n[i])
						}
					}), t.mm = function (n) {
						return "mm-" + n
					}, t.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"), t.umm = function (n) {
						return "mm-" == n.slice(0, 3) && (n = n.slice(3)), n
					}, r.mm = function (n) {
						return "mm-" + n
					}, r.add("parent child"), u.mm = function (n) {
						return n + ".mm"
					}, u.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), n[i]._c = t, n[i]._d = r, n[i]._e = u, n[i].glbl = f)
				}
				var i = "mmenu",
					e = "6.1.1",
					t, r, u, f;
				n[i] && n[i].version > e || (n[i] = function (n, t, i) {
					return this.$menu = n, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = t, this.conf = i, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this
				}, n[i].version = e, n[i].addons = {}, n[i].uniqueId = 0, n[i].defaults = {
					extensions: [],
					initMenu: function () {},
					initPanels: function () {},
					navbar: {
						add: !0,
						title: "Menu",
						titleLink: "parent"
					},
					onClick: {
						setSelected: !0
					},
					slidingSubmenus: !0
				}, n[i].configuration = {
					classNames: {
						divider: "Divider",
						inset: "Inset",
						nolistview: "NoListview",
						nopanel: "NoPanel",
						panel: "Panel",
						selected: "Selected",
						spacer: "Spacer",
						vertical: "Vertical"
					},
					clone: !1,
					openingInterval: 25,
					panelNodetype: "ul, ol, div",
					transitionDuration: 400
				}, n[i].prototype = {
					getInstance: function () {
						return this
					},
					initPanels: function (n) {
						this._initPanels(n)
					},
					openPanel: function (u, f) {
						var s, h, o, e, c, l;
						if (this.trigger("openPanel:before", u), u && u.length && (u.is("." + t.panel) || (u = u.closest("." + t.panel)), u.is("." + t.panel))) {
							if (s = this, "boolean" != typeof f && (f = !0), u.hasClass(t.vertical)) u.add(u.parents("." + t.vertical)).removeClass(t.hidden).parent("li").addClass(t.opened), this.openPanel(u.parents("." + t.panel).not("." + t.vertical).first()), this.trigger("openPanel:start", u), this.trigger("openPanel:finish", u);
							else {
								if (u.hasClass(t.opened)) return;
								if (h = this.$pnls.children("." + t.panel), o = h.filter("." + t.opened), !n[i].support.csstransitions) return o.addClass(t.hidden).removeClass(t.opened), u.removeClass(t.hidden).addClass(t.opened), this.trigger("openPanel:start", u), void this.trigger("openPanel:finish", u);
								for (h.not(u).removeClass(t.subopened), e = u.data(r.parent); e;) e = e.closest("." + t.panel), e.is("." + t.vertical) || e.addClass(t.subopened), e = e.data(r.parent);
								h.removeClass(t.highest).not(o).not(u).addClass(t.hidden);
								u.removeClass(t.hidden);
								c = function () {
									o.removeClass(t.opened);
									u.addClass(t.opened);
									u.hasClass(t.subopened) ? (o.addClass(t.highest), u.removeClass(t.subopened)) : (o.addClass(t.subopened), u.addClass(t.highest));
									this.trigger("openPanel:start", u)
								};
								l = function () {
									o.removeClass(t.highest).addClass(t.hidden);
									u.removeClass(t.highest);
									this.trigger("openPanel:finish", u)
								};
								f && !u.hasClass(t.noanimation) ? setTimeout(function () {
									s.__transitionend(u, function () {
										l.call(s)
									}, s.conf.transitionDuration);
									c.call(s)
								}, this.conf.openingInterval) : (c.call(this), l.call(this))
							}
							this.trigger("openPanel:after", u)
						}
					},
					closePanel: function (n) {
						this.trigger("closePanel:before", n);
						var i = n.parent();
						i.hasClass(t.vertical) && (i.removeClass(t.opened), this.trigger("closePanel", n));
						this.trigger("closePanel:after", n)
					},
					closeAllPanels: function () {
						this.trigger("closeAllPanels:before");
						this.$pnls.find("." + t.listview).children().removeClass(t.selected).filter("." + t.vertical).removeClass(t.opened);
						var i = this.$pnls.children("." + t.panel),
							n = i.first();
						this.$pnls.children("." + t.panel).not(n).removeClass(t.subopened).removeClass(t.opened).removeClass(t.highest).addClass(t.hidden);
						this.openPanel(n);
						this.trigger("closeAllPanels:after")
					},
					togglePanel: function (n) {
						var i = n.parent();
						i.hasClass(t.vertical) && this[i.hasClass(t.opened) ? "closePanel" : "openPanel"](n)
					},
					setSelected: function (n) {
						this.trigger("setSelected:before", n);
						this.$menu.find("." + t.listview).children("." + t.selected).removeClass(t.selected);
						n.addClass(t.selected);
						this.trigger("setSelected:after", n)
					},
					bind: function (n, t) {
						this.cbck[n] = this.cbck[n] || [];
						this.cbck[n].push(t)
					},
					trigger: function () {
						var u = this,
							i = Array.prototype.slice.call(arguments),
							t = i.shift(),
							n, r;
						if (this.cbck[t])
							for (n = 0, r = this.cbck[t].length; n < r; n++) this.cbck[t][n].apply(u, i)
					},
					matchMedia: function (n, t, i) {
						var r = {
							yes: t,
							no: i
						};
						this.mtch[n] = this.mtch[n] || [];
						this.mtch[n].push(r)
					},
					_initAddons: function () {
						this.trigger("initAddons:before");
						for (var t in n[i].addons) n[i].addons[t].add.call(this), n[i].addons[t].add = function () {};
						for (t in n[i].addons) n[i].addons[t].setup.call(this);
						this.trigger("initAddons:after")
					},
					_initExtensions: function () {
						var t, n;
						this.trigger("initExtensions:before");
						t = this;
						this.opts.extensions.constructor === Array && (this.opts.extensions = {
							all: this.opts.extensions
						});
						for (n in this.opts.extensions) this.opts.extensions[n] = this.opts.extensions[n].length ? "mm-" + this.opts.extensions[n].join(" mm-") : "", this.opts.extensions[n] && ! function (n) {
							t.matchMedia(n, function () {
								this.$menu.addClass(this.opts.extensions[n])
							}, function () {
								this.$menu.removeClass(this.opts.extensions[n])
							})
						}(n);
						this.trigger("initExtensions:after")
					},
					_initMenu: function () {
						this.trigger("initMenu:before");
						this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
							n(this).attr("id", t.mm(n(this).attr("id")))
						}));
						this.opts.initMenu.call(this, this.$menu, this.$orig);
						this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId());
						this.$pnls = n('<div class="' + t.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);
						var i = [t.menu];
						this.opts.slidingSubmenus || i.push(t.vertical);
						this.$menu.addClass(i.join(" ")).parent().addClass(t.wrapper);
						this.trigger("initMenu:after")
					},
					_initPanels: function (i) {
						this.trigger("initPanels:before", i);
						i = i || this.$pnls.children(this.conf.panelNodetype);
						var u = n(),
							r = this,
							f = function (i) {
								i.filter(this.conf.panelNodetype).each(function () {
									var i = r._initPanel(n(this)),
										e;
									i && (r._initNavbar(i), r._initListview(i), u = u.add(i), e = i.children("." + t.listview).children("li").children(r.conf.panelNodeType).add(i.children("." + r.conf.classNames.panel)), e.length && f.call(r, e))
								})
							};
						f.call(this, i);
						this.opts.initPanels.call(this, u);
						this.trigger("initPanels:after", u)
					},
					_initPanel: function (n) {
						var u, f, i;
						return (this.trigger("initPanel:before", n), n.hasClass(t.panel)) ? n : (this.__refactorClass(n, this.conf.classNames.panel, "panel"), this.__refactorClass(n, this.conf.classNames.nopanel, "nopanel"), this.__refactorClass(n, this.conf.classNames.vertical, "vertical"), this.__refactorClass(n, this.conf.classNames.inset, "inset"), n.filter("." + t.inset).addClass(t.nopanel), n.hasClass(t.nopanel)) ? !1 : (u = n.hasClass(t.vertical) || !this.opts.slidingSubmenus, n.removeClass(t.vertical), f = n.attr("id") || this.__getUniqueId(), n.removeAttr("id"), n.is("ul, ol") && (n.wrap("<div />"), n = n.parent()), n.addClass(t.panel + " " + t.hidden).attr("id", f), i = n.parent("li"), u ? n.add(i).addClass(t.vertical) : n.appendTo(this.$pnls), i.length && (i.data(r.child, n), n.data(r.parent, i)), this.trigger("initPanel:after", n), n)
					},
					_initNavbar: function (u) {
						var e, s;
						if (this.trigger("initNavbar:before", u), !u.children("." + t.navbar).length) {
							var f = u.data(r.parent),
								h = n('<div class="' + t.navbar + '" />'),
								c = n[i].i18n(this.opts.navbar.title),
								o = "";
							if (f && f.length) {
								if (f.hasClass(t.vertical)) return;
								e = f.parent().is("." + t.listview) ? f.children("a, span").not("." + t.next) : f.closest("." + t.panel).find('a[href="#' + u.attr("id") + '"]');
								e = e.first();
								f = e.closest("." + t.panel);
								s = f.attr("id");
								switch (c = e.text(), this.opts.navbar.titleLink) {
									case "anchor":
										o = e.attr("href");
										break;
									case "parent":
										o = "#" + s
								}
								h.append('<a class="' + t.btn + " " + t.prev + '" href="#' + s + '" />')
							} else if (!this.opts.navbar.title) return;
							this.opts.navbar.add && u.addClass(t.hasnavbar);
							h.append('<a class="' + t.title + '"' + (o.length ? ' href="' + o + '"' : "") + ">" + c + "<\/a>").prependTo(u);
							this.trigger("initNavbar:after", u)
						}
					},
					_initListview: function (i) {
						var f, e, u, o, s;
						this.trigger("initListview:before", i);
						f = this.__childAddBack(i, "ul, ol");
						this.__refactorClass(f, this.conf.classNames.nolistview, "nolistview");
						f.filter("." + this.conf.classNames.inset).addClass(t.nolistview);
						e = f.not("." + t.nolistview).addClass(t.listview).children();
						this.__refactorClass(e, this.conf.classNames.selected, "selected");
						this.__refactorClass(e, this.conf.classNames.divider, "divider");
						this.__refactorClass(e, this.conf.classNames.spacer, "spacer");
						u = i.data(r.parent);
						u && u.parent().is("." + t.listview) && !u.children("." + t.next).length && (o = u.children("a, span").first(), s = n('<a class="' + t.next + '" href="#' + i.attr("id") + '" />').insertBefore(o), o.is("span") && s.addClass(t.fullsubopen));
						this.trigger("initListview:after", i)
					},
					_initOpened: function () {
						this.trigger("initOpened:before");
						var n = this.$pnls.find("." + t.listview).children("." + t.selected).removeClass(t.selected).last().addClass(t.selected),
							i = n.length ? n.closest("." + t.panel) : this.$pnls.children("." + t.panel).first();
						this.openPanel(i, !1);
						this.trigger("initOpened:after")
					},
					_initAnchors: function () {
						var r = this;
						f.$body.on(u.click + "-oncanvas", "a[href]", function (u) {
							var f = n(this),
								e = !1,
								s = r.$menu.find(f).length,
								l, o, h, c;
							for (l in n[i].addons)
								if (n[i].addons[l].clickAnchor.call(r, f, s)) {
									e = !0;
									break
								}
							if (o = f.attr("href"), !e && s && o.length > 1 && "#" == o.slice(0, 1)) try {
								h = n(o, r.$menu);
								h.is("." + t.panel) && (e = !0, r[f.parent().hasClass(t.vertical) ? "togglePanel" : "openPanel"](h))
							} catch (a) {}(e && u.preventDefault(), e || !s || !f.is("." + t.listview + " > li > a") || f.is('[rel="external"]') || f.is('[target="_blank"]')) || (r.__valueOrFn(r.opts.onClick.setSelected, f) && r.setSelected(n(u.target).parent()), c = r.__valueOrFn(r.opts.onClick.preventDefault, f, "#" == o.slice(0, 1)), c && u.preventDefault(), r.__valueOrFn(r.opts.onClick.close, f, c) && r.close())
						})
					},
					_initMatchMedia: function () {
						var n = this;
						this._fireMatchMedia();
						f.$wndw.on(u.resize, function () {
							n._fireMatchMedia()
						})
					},
					_fireMatchMedia: function () {
						var n, i, t;
						for (n in this.mtch)
							for (i = window.matchMedia && window.matchMedia(n).matches ? "yes" : "no", t = 0; t < this.mtch[n].length; t++) this.mtch[n][t][i].call(this)
					},
					_getOriginalMenuId: function () {
						var n = this.$menu.attr("id");
						return this.conf.clone && n && n.length && (n = t.umm(n)), n
					},
					__api: function () {
						var i = this,
							t = {};
						return n.each(this._api, function () {
							var n = this;
							t[n] = function () {
								var r = i[n].apply(i, arguments);
								return "undefined" == typeof r ? t : r
							}
						}), t
					},
					__valueOrFn: function (n, t, i) {
						return "function" == typeof n ? n.call(t[0]) : "undefined" == typeof n && "undefined" != typeof i ? i : n
					},
					__refactorClass: function (n, i, r) {
						return n.filter("." + i).removeClass(i).addClass(t[r])
					},
					__findAddBack: function (n, t) {
						return n.find(t).add(n.filter(t))
					},
					__childAddBack: function (n, t) {
						return n.children(t).add(n.filter(t))
					},
					__filterListItems: function (n) {
						return n.not("." + t.divider).not("." + t.hidden)
					},
					__filterListItemAnchors: function (n) {
						return this.__filterListItems(n).children("a").not("." + t.next)
					},
					__transitionend: function (n, t, i) {
						var f = !1,
							r = function (i) {
								"undefined" != typeof i && i.target != n[0] || (f || (n.unbind(u.transitionend), n.unbind(u.webkitTransitionEnd), t.call(n[0])), f = !0)
							};
						n.on(u.transitionend, r);
						n.on(u.webkitTransitionEnd, r);
						setTimeout(r, 1.1 * i)
					},
					__getUniqueId: function () {
						return t.mm(n[i].uniqueId++)
					}
				}, n.fn[i] = function (t, r) {
					o();
					t = n.extend(!0, {}, n[i].defaults, t);
					r = n.extend(!0, {}, n[i].configuration, r);
					var u = n();
					return this.each(function () {
						var e = n(this),
							f;
						e.data(i) || (f = new n[i](e, t, r), f.$menu.data(i, f.__api()), u = u.add(f.$menu))
					}), u
				}, n[i].i18n = function () {
					var t = {};
					return function (i) {
						switch (typeof i) {
							case "object":
								return n.extend(t, i), t;
							case "string":
								return t[i] || i;
							case "undefined":
							default:
								return t
						}
					}
				}(), n[i].support = {
					touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
					csstransitions: function () {
						return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransitions || Modernizr.csstransitions
					}(),
					csstransforms: function () {
						return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms
					}(),
					csstransforms3d: function () {
						return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d
					}()
				})
			}(n),
			function (n) {
				var u = "mmenu",
					r = "offCanvas",
					t, e, f, i;
				n[u].addons[r] = {
					setup: function () {
						var e;
						if (this.opts[r]) {
							var s = this,
								f = this.opts[r],
								o = this.conf[r];
							i = n[u].glbl;
							this._api = n.merge(this._api, ["open", "close", "setPage"]);
							"object" != typeof f && (f = {});
							"top" != f.position && "bottom" != f.position || (f.zposition = "front");
							f = this.opts[r] = n.extend(!0, {}, n[u].defaults[r], f);
							"string" != typeof o.pageSelector && (o.pageSelector = "> " + o.pageNodetype);
							i.$allMenus = (i.$allMenus || n()).add(this.$menu);
							this.vars.opened = !1;
							e = [t.offcanvas];
							"left" != f.position && e.push(t.mm(f.position));
							"back" != f.zposition && e.push(t.mm(f.zposition));
							n[u].support.csstransforms || e.push(t["no-csstransforms"]);
							n[u].support.csstransforms3d || e.push(t["no-csstransforms3d"]);
							this.bind("initMenu:after", function () {
								var n, u;
								this.setPage(i.$page);
								this._initBlocker();
								this["_initWindow_" + r]();
								this.$menu.addClass(e.join(" ")).parent("." + t.wrapper).removeClass(t.wrapper);
								this.$menu[o.menuInsertMethod](o.menuInsertSelector);
								n = window.location.hash;
								n && (u = this._getOriginalMenuId(), u && u == n.slice(1) && this.open())
							});
							this.bind("initExtensions:after", function () {
								for (var u, n = [t.mm("widescreen"), t.mm("iconbar")], r = 0; r < n.length; r++)
									for (u in this.opts.extensions)
										if (this.opts.extensions[u].indexOf(n[r]) > -1) {
											! function (t, r) {
												s.matchMedia(t, function () {
													i.$html.addClass(n[r])
												}, function () {
													i.$html.removeClass(n[r])
												})
											}(u, r);
											break
										}
							});
							this.bind("open:start:sr-aria", function () {
								this.__sr_aria(this.$menu, "hidden", !1)
							});
							this.bind("close:finish:sr-aria", function () {
								this.__sr_aria(this.$menu, "hidden", !0)
							});
							this.bind("initMenu:after:sr-aria", function () {
								this.__sr_aria(this.$menu, "hidden", !0)
							})
						}
					},
					add: function () {
						t = n[u]._c;
						e = n[u]._d;
						f = n[u]._e;
						t.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d");
						e.add("style")
					},
					clickAnchor: function (n, u) {
						var s = this,
							f, e, o;
						if (this.opts[r]) {
							if (f = this._getOriginalMenuId(), f && n.is('[href="#' + f + '"]')) return u ? !0 : (e = n.closest("." + t.menu), e.length && (o = e.data("mmenu"), o && o.close)) ? (o.close(), s.__transitionend(e, function () {
								s.open()
							}, s.conf.transitionDuration), !0) : (this.open(), !0);
							if (i.$page) return f = i.$page.first().attr("id"), f && n.is('[href="#' + f + '"]') ? (this.close(), !0) : void 0
						}
					}
				};
				n[u].defaults[r] = {
					position: "left",
					zposition: "back",
					blockUI: !0,
					moveBackground: !0
				};
				n[u].configuration[r] = {
					pageNodetype: "div",
					pageSelector: null,
					noPageSelector: [],
					wrapPageIfNeeded: !0,
					menuInsertMethod: "prependTo",
					menuInsertSelector: "body"
				};
				n[u].prototype.open = function () {
					if (this.trigger("open:before"), !this.vars.opened) {
						var n = this;
						this._openSetup();
						setTimeout(function () {
							n._openFinish()
						}, this.conf.openingInterval);
						this.trigger("open:after")
					}
				};
				n[u].prototype._openSetup = function () {
					var s = this,
						o = this.opts[r],
						u;
					this.closeAllOthers();
					i.$page.each(function () {
						n(this).data(e.style, n(this).attr("style") || "")
					});
					i.$wndw.trigger(f.resize + "-" + r, [!0]);
					u = [t.opened];
					o.blockUI && u.push(t.blocking);
					"modal" == o.blockUI && u.push(t.modal);
					o.moveBackground && u.push(t.background);
					"left" != o.position && u.push(t.mm(this.opts[r].position));
					"back" != o.zposition && u.push(t.mm(this.opts[r].zposition));
					i.$html.addClass(u.join(" "));
					setTimeout(function () {
						s.vars.opened = !0
					}, this.conf.openingInterval);
					this.$menu.addClass(t.opened)
				};
				n[u].prototype._openFinish = function () {
					var n = this;
					this.__transitionend(i.$page.first(), function () {
						n.trigger("open:finish")
					}, this.conf.transitionDuration);
					this.trigger("open:start");
					i.$html.addClass(t.opening)
				};
				n[u].prototype.close = function () {
					if (this.trigger("close:before"), this.vars.opened) {
						var u = this;
						this.__transitionend(i.$page.first(), function () {
							u.$menu.removeClass(t.opened);
							var f = [t.opened, t.blocking, t.modal, t.background, t.mm(u.opts[r].position), t.mm(u.opts[r].zposition)];
							i.$html.removeClass(f.join(" "));
							i.$page.each(function () {
								n(this).attr("style", n(this).data(e.style))
							});
							u.vars.opened = !1;
							u.trigger("close:finish")
						}, this.conf.transitionDuration);
						this.trigger("close:start");
						i.$html.removeClass(t.opening);
						this.trigger("close:after")
					}
				};
				n[u].prototype.closeAllOthers = function () {
					i.$allMenus.not(this.$menu).each(function () {
						var t = n(this).data(u);
						t && t.close && t.close()
					})
				};
				n[u].prototype.setPage = function (u) {
					this.trigger("setPage:before", u);
					var e = this,
						f = this.conf[r];
					u && u.length || (u = i.$body.find(f.pageSelector), f.noPageSelector.length && (u = u.not(f.noPageSelector.join(", "))), u.length > 1 && f.wrapPageIfNeeded && (u = u.wrapAll("<" + this.conf[r].pageNodetype + " />").parent()));
					u.each(function () {
						n(this).attr("id", n(this).attr("id") || e.__getUniqueId())
					});
					u.addClass(t.page + " " + t.slideout);
					i.$page = u;
					this.trigger("setPage:after", u)
				};
				n[u].prototype["_initWindow_" + r] = function () {
					i.$wndw.off(f.keydown + "-" + r).on(f.keydown + "-" + r, function (n) {
						if (i.$html.hasClass(t.opened) && 9 == n.keyCode) return n.preventDefault(), !1
					});
					var n = 0;
					i.$wndw.off(f.resize + "-" + r).on(f.resize + "-" + r, function (r, u) {
						if (1 == i.$page.length && (u || i.$html.hasClass(t.opened))) {
							var f = i.$wndw.height();
							(u || f != n) && (n = f, i.$page.css("minHeight", f))
						}
					})
				};
				n[u].prototype._initBlocker = function () {
					var u = this;
					this.opts[r].blockUI && (i.$blck || (i.$blck = n('<div id="' + t.blocker + '" class="' + t.slideout + '" />')), i.$blck.appendTo(i.$body).off(f.touchstart + "-" + r + " " + f.touchmove + "-" + r).on(f.touchstart + "-" + r + " " + f.touchmove + "-" + r, function (n) {
						n.preventDefault();
						n.stopPropagation();
						i.$blck.trigger(f.mousedown + "-" + r)
					}).off(f.mousedown + "-" + r).on(f.mousedown + "-" + r, function (n) {
						n.preventDefault();
						i.$html.hasClass(t.modal) || (u.closeAllOthers(), u.close())
					}))
				}
			}(n),
			function (n) {
				var r = "mmenu",
					t = "scrollBugFix",
					i, e, u, f;
				n[r].addons[t] = {
					setup: function () {
						var u = this.opts[t];
						this.conf[t];
						f = n[r].glbl;
						n[r].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof u && (u = {
							fix: u
						}), "object" != typeof u && (u = {}), u = this.opts[t] = n.extend(!0, {}, n[r].defaults[t], u), u.fix && (this.bind("open:start", function () {
							this.$pnls.children("." + i.opened).scrollTop(0)
						}), this.bind("initMenu:after", function () {
							this["_initWindow_" + t]()
						})))
					},
					add: function () {
						i = n[r]._c;
						e = n[r]._d;
						u = n[r]._e
					},
					clickAnchor: function () {}
				};
				n[r].defaults[t] = {
					fix: !0
				};
				n[r].prototype["_initWindow_" + t] = function () {
					var e = this,
						r;
					f.$docu.off(u.touchmove + "-" + t).on(u.touchmove + "-" + t, function (n) {
						f.$html.hasClass(i.opened) && n.preventDefault()
					});
					r = !1;
					f.$body.off(u.touchstart + "-" + t).on(u.touchstart + "-" + t, "." + i.panels + "> ." + i.panel, function (n) {
						f.$html.hasClass(i.opened) && (r || (r = !0, 0 === n.currentTarget.scrollTop ? n.currentTarget.scrollTop = 1 : n.currentTarget.scrollHeight === n.currentTarget.scrollTop + n.currentTarget.offsetHeight && (n.currentTarget.scrollTop -= 1), r = !1))
					}).off(u.touchmove + "-" + t).on(u.touchmove + "-" + t, "." + i.panels + "> ." + i.panel, function (t) {
						f.$html.hasClass(i.opened) && n(this)[0].scrollHeight > n(this).innerHeight() && t.stopPropagation()
					});
					f.$wndw.off(u.orientationchange + "-" + t).on(u.orientationchange + "-" + t, function () {
						e.$pnls.children("." + i.opened).scrollTop(0).css({
							"-webkit-overflow-scrolling": "auto"
						}).css({
							"-webkit-overflow-scrolling": "touch"
						})
					})
				}
			}(n),
			function (n) {
				var i = "mmenu",
					r = "screenReader",
					t, u, f, e;
				n[i].addons[r] = {
					setup: function () {
						var o = this,
							f = this.opts[r],
							s = this.conf[r];
						e = n[i].glbl;
						"boolean" == typeof f && (f = {
							aria: f,
							text: f
						});
						"object" != typeof f && (f = {});
						f = this.opts[r] = n.extend(!0, {}, n[i].defaults[r], f);
						f.aria && (this.bind("initAddons:after", function () {
							this.bind("initMenu:after", function () {
								this.trigger("initMenu:after:sr-aria")
							});
							this.bind("initNavbar:after", function () {
								this.trigger("initNavbar:after:sr-aria", arguments[0])
							});
							this.bind("openPanel:start", function () {
								this.trigger("openPanel:start:sr-aria", arguments[0])
							});
							this.bind("close:start", function () {
								this.trigger("close:start:sr-aria")
							});
							this.bind("close:finish", function () {
								this.trigger("close:finish:sr-aria")
							});
							this.bind("open:start", function () {
								this.trigger("open:start:sr-aria")
							});
							this.bind("open:finish", function () {
								this.trigger("open:finish:sr-aria")
							})
						}), this.bind("updateListview", function () {
							this.$pnls.find("." + t.listview).children().each(function () {
								o.__sr_aria(n(this), "hidden", n(this).is("." + t.hidden))
							})
						}), this.bind("openPanel:start", function (n) {
							var i = this.$menu.find("." + t.panel).not(n).not(n.parents("." + t.panel)),
								r = n.add(n.find("." + t.vertical + "." + t.opened).children("." + t.panel));
							this.__sr_aria(i, "hidden", !0);
							this.__sr_aria(r, "hidden", !1)
						}), this.bind("closePanel", function (n) {
							this.__sr_aria(n, "hidden", !0)
						}), this.bind("initPanels:after", function (i) {
							var r = i.find("." + t.prev + ", ." + t.next).each(function () {
								o.__sr_aria(n(this), "owns", n(this).attr("href").replace("#", ""))
							});
							this.__sr_aria(r, "haspopup", !0)
						}), this.bind("initNavbar:after", function (n) {
							var i = n.children("." + t.navbar);
							this.__sr_aria(i, "hidden", !n.hasClass(t.hasnavbar))
						}), f.text && (this.bind("initlistview:after", function (n) {
							var i = n.find("." + t.listview).find("." + t.fullsubopen).parent().children("span");
							this.__sr_aria(i, "hidden", !0)
						}), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function (n) {
							var i = n.children("." + t.navbar),
								r = !!i.children("." + t.prev).length;
							this.__sr_aria(i.children("." + t.title), "hidden", r)
						})));
						f.text && (this.bind("initAddons:after", function () {
							this.bind("setPage:after", function () {
								this.trigger("setPage:after:sr-text", arguments[0])
							})
						}), this.bind("initNavbar:after", function (r) {
							var u = r.children("." + t.navbar),
								f = u.children("." + t.title).text(),
								e = n[i].i18n(s.text.closeSubmenu);
							f && (e += " (" + f + ")");
							u.children("." + t.prev).html(this.__sr_text(e))
						}), this.bind("initListview:after", function (r) {
							var f = r.data(u.parent);
							if (f && f.length) {
								var e = f.children("." + t.next),
									h = e.nextAll("span, a").first().text(),
									c = n[i].i18n(s.text[e.parent().is("." + t.vertical) ? "toggleSubmenu" : "openSubmenu"]);
								h && (c += " (" + h + ")");
								e.html(o.__sr_text(c))
							}
						}))
					},
					add: function () {
						t = n[i]._c;
						u = n[i]._d;
						f = n[i]._e;
						t.add("sronly")
					},
					clickAnchor: function () {}
				};
				n[i].defaults[r] = {
					aria: !0,
					text: !0
				};
				n[i].configuration[r] = {
					text: {
						closeMenu: "Close menu",
						closeSubmenu: "Close submenu",
						openSubmenu: "Open submenu",
						toggleSubmenu: "Toggle submenu"
					}
				};
				n[i].prototype.__sr_aria = function (n, t, i) {
					n.prop("aria-" + t, i)[i ? "attr" : "removeAttr"]("aria-" + t, i)
				};
				n[i].prototype.__sr_text = function (n) {
					return '<span class="' + t.sronly + '">' + n + "<\/span>"
				}
			}(n), !0
	});
! function (n) {
	var r = "mmenu",
		i = "dropdown",
		t, e, f, u;
	n[r].addons[i] = {
		setup: function () {
			var c, a, l;
			if (this.opts.offCanvas) {
				var h = this,
					o = this.opts[i],
					s = this.conf[i];
				(u = n[r].glbl, "boolean" == typeof o && o && (o = {
					drop: o
				}), "object" != typeof o && (o = {}), "string" == typeof o.position && (o.position = { of: o.position
				}), o = this.opts[i] = n.extend(!0, {}, n[r].defaults[i], o), o.drop) && (this.bind("initMenu:after", function () {
					if (this.$menu.addClass(t.dropdown), o.tip && this.$menu.addClass(t.tip), "string" != typeof o.position.of) {
						var r = this._getOriginalMenuId();
						r && r.length && (o.position.of = '[href="#' + r + '"]')
					}
					"string" == typeof o.position.of && (c = n(o.position.of), o.event = o.event.split(" "), 1 == o.event.length && (o.event[1] = o.event[0]), "hover" == o.event[0] && c.on(f.mouseenter + "-" + i, function () {
						h.open()
					}), "hover" == o.event[1] && this.$menu.on(f.mouseleave + "-" + i, function () {
						h.close()
					}))
				}), this.bind("open:start", function () {
					this.$menu.data(e.style, this.$menu.attr("style") || "");
					u.$html.addClass(t.dropdown)
				}), this.bind("close:finish", function () {
					this.$menu.attr("style", this.$menu.data(e.style));
					u.$html.removeClass(t.dropdown)
				}), a = function (n, i) {
					var r = i[0],
						l = i[1],
						d = "x" == n ? "scrollLeft" : "scrollTop",
						g = "x" == n ? "outerWidth" : "outerHeight",
						a = "x" == n ? "left" : "top",
						p = "x" == n ? "right" : "bottom",
						w = "x" == n ? "width" : "height",
						nt = "x" == n ? "maxWidth" : "maxHeight",
						e = null,
						tt = u.$wndw[d](),
						h = c.offset()[a] -= tt,
						v = h + c[g](),
						b = u.$wndw[w](),
						k = s.offset.button[n] + s.offset.viewport[n],
						f, y;
					if (o.position[n]) switch (o.position[n]) {
						case "left":
						case "bottom":
							e = "after";
							break;
						case "right":
						case "top":
							e = "before"
					}
					return null === e && (e = h + (v - h) / 2 < b / 2 ? "after" : "before"), "after" == e ? (f = "x" == n ? h : v, y = b - (f + k), r[a] = f + s.offset.button[n], r[p] = "auto", l.push(t["x" == n ? "tipleft" : "tiptop"])) : (f = "x" == n ? v : h, y = f - k, r[p] = "calc( 100% - " + (f - s.offset.button[n]) + "px )", r[a] = "auto", l.push(t["x" == n ? "tipright" : "tipbottom"])), r[nt] = Math.min(s[w].max, y), [r, l]
				}, l = function () {
					if (this.vars.opened) {
						this.$menu.attr("style", this.$menu.data(e.style));
						var n = [{},
							[]
						];
						n = a.call(this, "y", n);
						n = a.call(this, "x", n);
						this.$menu.css(n[0]);
						o.tip && this.$menu.removeClass(t.tipleft + " " + t.tipright + " " + t.tiptop + " " + t.tipbottom).addClass(n[1].join(" "))
					}
				}, this.bind("open:start", l), u.$wndw.on(f.resize + "-" + i, function () {
					l.call(h)
				}), this.opts.offCanvas.blockUI || u.$wndw.on(f.scroll + "-" + i, function () {
					l.call(h)
				}))
			}
		},
		add: function () {
			t = n[r]._c;
			e = n[r]._d;
			f = n[r]._e;
			t.add("dropdown tip tipleft tipright tiptop tipbottom");
			f.add("mouseenter mouseleave resize scroll")
		},
		clickAnchor: function () {}
	};
	n[r].defaults[i] = {
		drop: !1,
		event: "click",
		position: {},
		tip: !0
	};
	n[r].configuration[i] = {
		offset: {
			button: {
				x: -10,
				y: 10
			},
			viewport: {
				x: 20,
				y: 20
			}
		},
		height: {
			max: 880
		},
		width: {
			max: 440
		}
	}
}(jQuery),
function (n, t, i) {
	i.fn.menuResize = function () {
		var t = i(this),
			r = function () {
				var f = parent !== n;
				if (console.log(f), !f)
					if (t.find("#msi-navbar").removeClass("hidden"), i(n).width() >= 768) {
						t.find(".more").before(i("#overflow > li"));
						var r = t.find(".more"),
							u = t.find("#msi-navbar").children("li").not(".more"),
							h = navItemWidth = r.width(),
							e = i(n).width() - 60,
							o, c, s, l = t.children("li").not(":last-child");
						for (l.each(function () {
								navItemWidth += i(this).width()
							}), u.each(function () {
								navItemWidth += i(this).width()
							}), i(n).width() >= 768 && i(n).width() <= 1171 ? navItemWidth > e ? r.show() : r.hide() : r.hide(); navItemWidth > e;) navItemWidth -= u.last().width(), u.last().prependTo("#overflow"), u.splice(-1, 1);
						// o = i("#msi-navbar .more").offset().left;
						s = i("#overflow").width();
						// c = o + h - s;
						c = h - s;
						i(n).width() > 767 && i("#overflow").css({
							right: 0
						});
						i(".searchbox").is(":visible") && t.find("#msi-mmenu").hide()
					} else i("#msi-navbar").removeClass("msi-navbar");
				setSignUpFormHeight()
			};
		i(n).resize(r);
		r();
		t.find("#search").click(function () {
			t.find("input[type=text]").val("");
			i(this).toggleClass("glyphicon-remove-circle");
			t.find("#msi-mmenu").toggle();
			t.find(".searchbox").toggle();
			t.find("input[type=text]").focus();
			r()
		});
		t.find("input[type=text]").keypress(function (t) {
			t.which == 13 && (t.preventDefault(), i(this).val() != "" ? n.open("/material-selector.aspx?key=" + i(this).val()) : alert("Please enter key to search"))
		})
	};
	i.fn.setCaptionHeight = function () {
		var t = i(this),
			r = t.find("#lblTitle").html().length;
		r > 660 && t.css({
			height: "100%",
			top: 0
		});
		i(n).width() < 768 ? t.find("#lblTitle").hide() : t.find("#lblTitle").show();
		t.show();
		i(n).on("resize", function () {
			i(n).width() < 768 ? (t.find("#lblTitle").hide(), t.css({
				height: "auto",
				top: "auto",
				bottom: "30px"
			})) : (t.css({
				height: "auto",
				top: "30px",
				bottom: "auto"
			}), t.find("#lblTitle").show(), r > 660 && t.css({
				height: "100%",
				top: "auto",
				bottom: 0
			}))
		})
	};
	i(t).ready(function () {
		var r;
		i("#msi-navbar > li").each(function (n) {
			i(this).children("ul").length && i(this).children().first("a").attr("href", "#mm-" + n)
		});
		i("#msi-navbarmain").menuResize();
		setSignUpFormHeight();
		i("#divHeroCaption").length && i("#divHeroCaption").setCaptionHeight();
		r = i("#msi-mmenu").data("mmenu");
		i("#msi-mmenu").mmenu({
			dropdown: !0,
			onClick: {
				close: !0
			}
		}, {
			clone: !0
		});
		i("#msi-navbarsub").menuResize();
		r = i("#msi-submenu").data("mmenu");
		i("#msi-submenu").mmenu({
			dropdown: !0,
			onClick: {
				close: !0
			}
		}, {
			clone: !0
		});
		var u = 300,
			f = 700,
			t = i(".back-to-top");
		i(n).scroll(function () {
			i(this).scrollTop() > u ? t.addClass("is-visible") : t.removeClass("is-visible fade-out")
		});
		t.on("click", function (n) {
			n.preventDefault();
			i("body,html").animate({
				scrollTop: 0
			}, f)
		});
		i("#txtSearch").autocomplete({
			source: function (n, t) {
				var r = "https://www.msisurfaces.com/quartz-countertops/api/QHomeApi/AutoComplete?searchKey=" + n.term;
				i.ajax({
					url: r,
					type: "GET",
					cache: !1,
					dataType: "json",
					success: function (n) {
						t(i.map(n, function (n) {
							return {
								label: n.ProductName,
								value: n.ProductName
							}
						}))
					},
					error: function (n, t, i) {
						console.log("some error occured", t, i)
					}
				})
			},
			minLength: 1,
			select: function (n, t) {
				return i("#txtName").val(t.item.label), !1
			}
		})
	})
}(this, document, jQuery)