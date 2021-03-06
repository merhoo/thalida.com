'use strict';

var $requires = ['$localStorage', 'VISIT_GROUPS'];
var service = function( $localStorage, VISIT_GROUPS ){
    //======================================================================
    //
    //  Visits
    //      Save the visitors # of visits as well as get the group that they
    //      fall into based on those visits
    //
    //----------------------------------------------------------------------

    var Visits = function(){
        // Get the various groups that a visitor could fall into
        this.groups = VISIT_GROUPS;
        this.totalGroups = this.groups.length;

        // Default the visitor count to 0 + save to localstorage
        this.storage = $localStorage.$default({
            visits: 1,
            lastVisit: moment().format('x')
        });
    };

    //======================================================================
    //
    //  @increment
    //      Increment the visitors counter + udpate the last visited timestamp
    //
    //----------------------------------------------------------------------
    Visits.prototype.increment = function() {
        var now = moment();
        var lastVisit = moment(this.storage.lastVisit, 'x');
        var isFirstVist = this.storage.visits === 1;

        if( (isFirstVist && now.diff(lastVisit, 'seconds') > 5)
            || (!isFirstVist && now.diff(lastVisit, 'minutes') > 2)
        ){
            this.storage.visits += 1;
            this.storage.lastVisit = moment().format('x');
        }

        return this.storage.visits;
    };

    //======================================================================
    //
    //  @getGroup
    //      Figure out what group a user falls in to based on the # of
    //      visists they've made to the site.
    //
    //----------------------------------------------------------------------
    Visits.prototype.getGroup = function(){
        var foundGroup;

        for(var i = 0; i < this.totalGroups; i += 1){
            var group = this.groups[i];
            if( this.storage.visits <= group.minVisits || i == this.totalGroups - 1){
                foundGroup = group;
                break;
            }
        }

        return foundGroup;
    };

    Visits.prototype.getTotal = function(){
        return this.storage.visits;
    };

    Visits.prototype.getLastVisitTime = function(){
        return this.storage.lastVisit;
    };

    return new Visits();
}

service.$inject = $requires;
module.exports = service;
