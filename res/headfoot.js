exports.footer = {
    height: "0.5cm",
    contents: function(pageNum, numPages) {
	var font = 
	    "float:right;" +
	    "font-style: oblique;" +
	    "font-size:0.55em;";

	var footer =
	    "border-top: 1px solid #ccc;" +
	    "padding-top: 0.1cm;";
	
	return "<div style='"+footer+"'><span style='"+font+"'> Pagina " + pageNum + " di " + numPages + "</span></div>"
    }
};
