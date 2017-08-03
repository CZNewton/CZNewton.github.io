AllCards = $.ajax({
    url: 'GEThttps://omgvamp-hearthstone-v1.p.mashape.com/cards',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data) { console.dir((data.source)); },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "6qdiqMXzArmshsf69P3yGLhrLrW3p1AjiMLjsnEoMLtAcQoDhr");
    }
});
