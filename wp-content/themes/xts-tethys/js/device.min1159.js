!(function (s) {
	var n,
		i = "",
		r =
			(screen.width &&
				((width = screen.width || ""),
				(height = screen.height || ""),
				(i += width + " x " + height)),
			navigator.appVersion),
		e = navigator.userAgent,
		o = navigator.appName,
		a = "" + parseFloat(navigator.appVersion),
		d = parseInt(navigator.appVersion, 10),
		t =
			(-1 != (t = e.indexOf("Opera")) &&
				((o = "Opera"),
				(a = e.substring(t + 6)),
				-1 != (t = e.indexOf("Version")) && (a = e.substring(t + 8))),
			-1 != (t = e.indexOf("OPR"))
				? ((o = "Opera"), (a = e.substring(t + 4)))
				: -1 != (t = e.indexOf("Edge"))
				? ((o = "Edge"), (a = e.substring(t + 5)))
				: -1 != (t = e.indexOf("Edg"))
				? ((o = "Microsoft Edge"), (a = e.substring(t + 4)))
				: -1 != (t = e.indexOf("MSIE"))
				? ((o = "Internet"), (a = e.substring(t + 5)))
				: -1 != (t = e.indexOf("Chrome"))
				? ((o = "Chrome"), (a = e.substring(t + 7)))
				: -1 != (t = e.indexOf("Safari"))
				? ((o = "Safari"),
				  (a = e.substring(t + 7)),
				  -1 != (t = e.indexOf("Version")) && (a = e.substring(t + 8)))
				: -1 != (t = e.indexOf("Firefox"))
				? ((o = "Firefox"), (a = e.substring(t + 8)))
				: -1 != e.indexOf("Trident/")
				? ((o = "Internet"), (a = e.substring(e.indexOf("rv:") + 3)))
				: (f = e.lastIndexOf(" ") + 1) < (t = e.lastIndexOf("/")) &&
				  ((o = e.substring(f, t)),
				  (a = e.substring(t + 1)),
				  o.toLowerCase() == o.toUpperCase() && (o = navigator.appName)),
			-1 !=
				(f = (a =
					-1 !=
					(f = (a = -1 != (f = a.indexOf(";")) ? a.substring(0, f) : a).indexOf(
						" "
					))
						? a.substring(0, f)
						: a).indexOf(")")) && (a = a.substring(0, f)),
			(d = parseInt("" + a, 10)),
			isNaN(d) &&
				((a = "" + parseFloat(navigator.appVersion)),
				(d = parseInt(navigator.appVersion, 10))),
			/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(r)),
		w = "-",
		O = [
			{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
			{ s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
			{ s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
			{ s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
			{ s: "Windows Vista", r: /Windows NT 6.0/ },
			{ s: "Windows Server 2003", r: /Windows NT 5.2/ },
			{ s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
			{ s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
			{ s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
			{ s: "Windows 98", r: /(Windows 98|Win98)/ },
			{ s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
			{ s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
			{ s: "Windows CE", r: /Windows CE/ },
			{ s: "Windows 3.11", r: /Win16/ },
			{ s: "Android", r: /Android/ },
			{ s: "Open BSD", r: /OpenBSD/ },
			{ s: "Sun OS", r: /SunOS/ },
			{ s: "Chrome OS", r: /CrOS/ },
			{ s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
			{ s: "iOS", r: /(iPhone|iPad|iPod)/ },
			{ s: "Mac OS X", r: /Mac OS X/ },
			{ s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
			{ s: "QNX", r: /QNX/ },
			{ s: "UNIX", r: /UNIX/ },
			{ s: "BeOS", r: /BeOS/ },
			{ s: "OS/2", r: /OS\/2/ },
			{
				s: "Search Bot",
				r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
			},
		];
	for (n in O) {
		var W = O[n];
		if (W.r.test(e)) {
			w = W.s;
			break;
		}
	}
	var c = "-";
	switch (
		(/Windows/.test(w) && ((c = /Windows (.*)/.exec(w)[1]), (w = "Windows")), w)
	) {
		case "Mac OS":
		case "Mac OS X":
		case "Android":
			c =
				/(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(
					e
				)[1];
			break;
		case "iOS":
			c =
				(c = /OS (\d+)_(\d+)_?(\d+)?/.exec(r))[1] +
				"." +
				c[2] +
				"." +
				(0 | c[3]);
	}
	var g,
		f = "no check";
	"undefined" != typeof swfobject &&
		(f =
			0 < (g = swfobject.getFlashPlayerVersion()).major
				? g.major + "." + g.minor + " r" + g.release
				: "-"),
		(s.jscd = {
			screen: i,
			browser: o,
			browserVersion: a,
			browserMajorVersion: d,
			mobile: t,
			os: w,
			osVersion: c,
			flashVersion: f,
		});
})(this),
	(function () {
		var s = jQuery("html");
		s.addClass("browser-" + jscd.browser), s.addClass("platform-" + jscd.os);
	})();
