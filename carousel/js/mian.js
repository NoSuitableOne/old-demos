function Carousel($node, bool) {
     this.$node = $node;
     this.ct = $node.find(".ct");
     this.idx = 0;
     this.isLocked = false;
     this.imgCount = $node.find("img").length;
     this.imgWidth = $node.find("img").width();
     this.bool = bool;
     this.bullet = $node.find(".bullet");    
     this.LfArrow = $node.find(".arrow.left");
     this.RtArrow = $node.find(".arrow.right");    
     this.playAuto = function() {
         if (this.bool) {
             var me = this;
             setInterval(function() {
                 me.playForward()
             }, 3000);
         }
     }
     this.setImg();
     this.bind();
     this.playAuto();
     this.setBullet();
 }
 Carousel.prototype = {
     setImg: function() {
         var firstCloneNode = this.$node.find(".img-ct").first().clone(),
             lastCloneNode = this.$node.find(".img-ct").last().clone();

         firstCloneNode.appendTo(this.ct);
         lastCloneNode.prependTo(this.ct);
         this.ct.css({
             left: -this.imgWidth,
             width: this.imgWidth * (this.imgCount + 2)
         })
     },
     playForward: function(num) {
         if (this.isLocked) {
             return;
         }
         var me = this,
             count = num || 1;
         this.isLocked = true;
         this.ct.animate({
                 left: "-=" + this.imgWidth * count
             },
             function() {
                 me.idx += count;
                 if (me.idx % me.imgCount === 0) {
                     me.ct.css({
                         left: -me.imgWidth,
                         width: me.imgWidth * (me.imgCount + 2)
                     })
                     me.idx = 0;
                 }
                 me.setBullet();
             })
         this.isLocked = false;
     },
     playBackward: function(num) {
         if (this.isLocked) {
             return;
         }
         var me = this,
             count = num || 1;
         this.isLocked = true;
         this.ct.animate({
                 left: "+=" + this.imgWidth * count
             },
             function() {
                 me.idx -= count;
                 if (me.idx < 0) {
                     me.ct.css({
                         left: -me.imgWidth * me.imgCount,
                         width: me.imgWidth * (me.imgCount + 2)
                     })
                     me.idx = me.imgCount - 1;
                 }
                 me.setBullet();
             })
         this.isLocked = false;
     },
     setBullet: function() {
         this.bullet.find("li").removeClass("hover").eq(this.idx).addClass("hover");
     },
     bind: function() {
         var me = this;
         if(this.$node.find(".bullet")!==null){
             this.bullet.on("click", "li", function(event) {
                 var num = me.bullet.find("li").index(event.target) - me.idx;
                 if (num > 0) {
                     me.playForward(num);
                     return;
                 }
                 if (num < 0) {
                     me.playBackward(-num);
                     return;
                 }
             })    
         }
         if(this.$node.find(".arrow")!==null){
             this.LfArrow.on("click", function() {
                 me.playBackward();
             })
             this.RtArrow.on("click", function() {
                 me.playForward();
             })    
         }
     }
 }

 var $node1 = $("#carousel1"),
     $node2 = $("#carousel2"),
     carousel1 = new Carousel($node1, true),
     carousel2 = new Carousel($node2, false);