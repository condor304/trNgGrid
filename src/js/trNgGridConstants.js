var TrNgGrid;
(function (TrNgGrid) {
    var Constants;
    (function (Constants) {
        Constants.tableDirective = "trNgGrid";
        Constants.tableDirectiveAttribute = "data-tr-ng-grid";
        Constants.dataColumnIsAutoGeneratedAttribute = Constants.tableDirectiveAttribute + "-auto-generated";
        Constants.dataColumnIsAutoGeneratedField = Constants.tableDirective + "AutoGenerated";
        Constants.dataColumnIsCustomizedAttribute = Constants.tableDirectiveAttribute + "-customized";
        Constants.dataColumnIsCustomizedField = Constants.tableDirective + "Customized";
        Constants.sortFilter = Constants.tableDirective + "SortFilter";
        Constants.dataPagingFilter = Constants.tableDirective + "DataPagingFilter";
        Constants.translateFilter = Constants.tableDirective + "TranslateFilter";
        Constants.dataFormattingFilter = Constants.tableDirective + "DataFormatFilter";
        Constants.defaultTranslationLocale = "default";
        Constants.bodyDirective = Constants.tableDirective + "Body";
        Constants.bodyDirectiveAttribute = Constants.tableDirectiveAttribute + "-body";
        Constants.bodyDirectiveRow = Constants.bodyDirective + "Row";
        Constants.bodyDirectiveRowAttribute = Constants.bodyDirectiveAttribute + "-row";
        Constants.headerDirective = Constants.tableDirective + "Header";
        Constants.headerDirectiveAttribute = Constants.tableDirectiveAttribute + "-header";
        Constants.headerDirectiveRow = Constants.headerDirective + "Row";
        Constants.headerDirectiveRowAttribute = Constants.headerDirectiveAttribute + "-row";
        Constants.footerDirective = Constants.tableDirective + "Footer";
        Constants.footerDirectiveAttribute = Constants.tableDirectiveAttribute + "-footer";
        Constants.cellFooterDirective = Constants.tableDirective + "FooterCell";
        Constants.cellFooterDirectiveAttribute = Constants.tableDirectiveAttribute + "-footer-cell";
        Constants.cellFooterTemplateDirective = Constants.tableDirective + "FooterCellTemplate";
        Constants.cellFooterTemplateDirectiveAttribute = Constants.tableDirectiveAttribute + "-footer-cell-template";
        Constants.globalFilterDirective = Constants.tableDirective + "GlobalFilter";
        Constants.globalFilterDirectiveAttribute = Constants.tableDirectiveAttribute + "-global-filter";
        Constants.pagerDirective = Constants.tableDirective + "Pager";
        Constants.pagerDirectiveAttribute = Constants.tableDirectiveAttribute + "-pager";
        Constants.cellHeaderDirective = Constants.tableDirective + "HeaderCell";
        Constants.cellHeaderDirectiveAttribute = Constants.tableDirectiveAttribute + "-header-cell";
        Constants.cellHeaderTemplateDirective = Constants.tableDirective + "HeaderCellTemplate";
        Constants.cellHeaderTemplateDirectiveAttribute = Constants.tableDirectiveAttribute + "-header-cell-template";
        Constants.cellBodyDirective = Constants.tableDirective + "BodyCell";
        Constants.cellBodyDirectiveAttribute = Constants.tableDirectiveAttribute + "-body-cell";
        Constants.cellBodyTemplateDirective = Constants.tableDirective + "BodyCellTemplate";
        Constants.cellBodyTemplateDirectiveAttribute = Constants.tableDirectiveAttribute + "-body-cell-template";
        Constants.columnSortDirective = Constants.tableDirective + "ColumnSort";
        Constants.columnSortDirectiveAttribute = Constants.tableDirectiveAttribute + "-column-sort";
        Constants.columnFilterDirective = Constants.tableDirective + "ColumnFilter";
        Constants.columnFilterDirectiveAttribute = Constants.tableDirectiveAttribute + "-column-filter";
        Constants.gridConfigurationService = Constants.tableDirective + "Configuration";
        Constants.gridConfigurationProvider = Constants.gridConfigurationService + "Provider";
    })(Constants = TrNgGrid.Constants || (TrNgGrid.Constants = {}));
})(TrNgGrid || (TrNgGrid = {}));