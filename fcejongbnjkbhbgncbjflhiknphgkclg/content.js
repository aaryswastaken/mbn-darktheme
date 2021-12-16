window.addEventListener('DOMContentLoaded', function () {
    console.log('Moodle Dark loaded!'); // 4th

    function addStyleString(str) {
        var node = document.createElement('style');
        node.innerHTML = str;
        document.body.appendChild(node);
    }
    const popupStyles = '.courseinfo { border-radius: 25px; background-image: url(https://cbs12.com/resources/media/8e8ea23c-0a8f-4ee3-99f4-80f2bccd8538-large16x9_MGN_1280x720_90415B00CAVDZ.jpg?1566331974932)!important;} .courseinfo-body {background: rgba(0,0,0,0.8) !important;}\n' +
        '.userpicture { display: none !important} #fixy-user, #fixy-content, .fixy .fixy-header { background: transparent} .fixy-inner, body, #mr-nav { background: #333 !important;} h3, h2, p, .snap-completion-meta a, textarea { color: white !important} .coursefullname { font-weight: 500 !important}' +
        '.completion-line { background: mediumpurple !important}';

    const courseStyles = 'header, #mr-nav, #page, li, i, ul, div:not(.courseinfo):not(.courseinfo-body):not(.dynamicinfo):not(.coursegrade):not(.completionstatus):not(.completion-line):not(.breadcrumb-nav):not(.progress_bar_completed), footer, p, span, table, tr, table.boxaligncenter.generaltable.user-grade *, select, textarea { background: #333 !important; color: white !important; } h1, h2, h3, h4, h5, h6, p, a, li, span, i { color: white !important } input[type="submit"],input[type="text"],input[type="number"] { border-color: white !important; background: #e3e3e3 !important; color: black !important; } ' +
        '#page-header { background: rgb(2,0,36) !important; background: linear-gradient(158deg, rgba(2,0,36,1) 0%, rgba(85,1,117,1) 35%, rgba(42,1,74,1) 100%) !important;} #page-mast, #page-mast > p, .breadcrumb-nav { background: transparent !important; } .courseinfo:hover {    box-shadow: 0 8px 17px 0 mediumpurple, 0 6px 20px 0 rgba(85,1,117,1) !important;} ' +
        '@media (max-width: 767px) { .hidden-xs { display: initial !important; }}';

    addStyleString(courseStyles);
    addStyleString(popupStyles);
});
