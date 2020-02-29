class FlkAccordion {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        this.defaults = {
            expanded: false,
        };
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isExpanded = this.prop('expanded', this.defaults.expanded);
        if (this.prop('collapsed', null) !== null) {
            this.isExpanded = !this.prop('collapsed', null);
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }

    /**
     * Toggle the panel body
     */
    toggle() {        
        if (this.panel.style.maxHeight) {
            this.maxHeight = null;
        } else {
            this.maxHeight = this.panel.scrollHeight + "px";
        }
        
        this.isExpanded = !this.isExpanded;
    }
}
