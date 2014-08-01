KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('next-tick', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/next-tick/2.0.0/']});