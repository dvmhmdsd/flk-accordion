const Component = require(COMPONENT_CLASS_PATH);

class FlkAccordionComponent extends Component {}

module.exports = {
    selector: 'flk-accordion',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkAccordionComponent,
    isUnique: false,
    component: 'FlkAccordion',
    htmlFile: __dirname + '/../../flk-accordion.component.html',
};