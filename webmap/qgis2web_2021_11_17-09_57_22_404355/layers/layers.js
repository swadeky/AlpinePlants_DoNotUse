var wms_layers = [];

var format_eriogonum_0 = new ol.format.GeoJSON();
var features_eriogonum_0 = format_eriogonum_0.readFeatures(json_eriogonum_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eriogonum_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eriogonum_0.addFeatures(features_eriogonum_0);
var lyr_eriogonum_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eriogonum_0, 
                style: style_eriogonum_0,
                interactive: true,
                title: '<img src="styles/legend/eriogonum_0.png" /> eriogonum'
            });
var format_penstemon_1 = new ol.format.GeoJSON();
var features_penstemon_1 = format_penstemon_1.readFeatures(json_penstemon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_penstemon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_penstemon_1.addFeatures(features_penstemon_1);
var lyr_penstemon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_penstemon_1, 
                style: style_penstemon_1,
                interactive: true,
                title: '<img src="styles/legend/penstemon_1.png" /> penstemon'
            });
var format_primula_2 = new ol.format.GeoJSON();
var features_primula_2 = format_primula_2.readFeatures(json_primula_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_primula_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_primula_2.addFeatures(features_primula_2);
var lyr_primula_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_primula_2, 
                style: style_primula_2,
                interactive: true,
                title: '<img src="styles/legend/primula_2.png" /> primula'
            });
var format_silene_3 = new ol.format.GeoJSON();
var features_silene_3 = format_silene_3.readFeatures(json_silene_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_silene_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_silene_3.addFeatures(features_silene_3);
var lyr_silene_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_silene_3, 
                style: style_silene_3,
                interactive: true,
                title: '<img src="styles/legend/silene_3.png" /> silene'
            });
var format_rareplant_pts_ERHO_4 = new ol.format.GeoJSON();
var features_rareplant_pts_ERHO_4 = format_rareplant_pts_ERHO_4.readFeatures(json_rareplant_pts_ERHO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rareplant_pts_ERHO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rareplant_pts_ERHO_4.addFeatures(features_rareplant_pts_ERHO_4);
var lyr_rareplant_pts_ERHO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rareplant_pts_ERHO_4, 
                style: style_rareplant_pts_ERHO_4,
                interactive: true,
                title: '<img src="styles/legend/rareplant_pts_ERHO_4.png" /> rareplant_pts_ERHO'
            });
var format_rareplant_pts_5 = new ol.format.GeoJSON();
var features_rareplant_pts_5 = format_rareplant_pts_5.readFeatures(json_rareplant_pts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rareplant_pts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rareplant_pts_5.addFeatures(features_rareplant_pts_5);
var lyr_rareplant_pts_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rareplant_pts_5, 
                style: style_rareplant_pts_5,
                interactive: true,
    title: 'rareplant_pts<br />\
    <img src="styles/legend/rareplant_pts_5_0.png" /> Agoseris<br />\
    <img src="styles/legend/rareplant_pts_5_1.png" /> CYMNIV<br />\
    <img src="styles/legend/rareplant_pts_5_2.png" /> ERIHOL<br />\
    <img src="styles/legend/rareplant_pts_5_3.png" /> PENLEI<br />\
    <img src="styles/legend/rareplant_pts_5_4.png" /> PRICUS<br />\
    <img src="styles/legend/rareplant_pts_5_5.png" /> SILNAC<br />\
    <img src="styles/legend/rareplant_pts_5_6.png" /> <br />'
        });
var format_eri2021_6 = new ol.format.GeoJSON();
var features_eri2021_6 = format_eri2021_6.readFeatures(json_eri2021_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eri2021_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eri2021_6.addFeatures(features_eri2021_6);
var lyr_eri2021_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eri2021_6, 
                style: style_eri2021_6,
                interactive: true,
                title: '<img src="styles/legend/eri2021_6.png" /> eri.2021'
            });
var format_pen2021_7 = new ol.format.GeoJSON();
var features_pen2021_7 = format_pen2021_7.readFeatures(json_pen2021_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pen2021_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pen2021_7.addFeatures(features_pen2021_7);
var lyr_pen2021_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pen2021_7, 
                style: style_pen2021_7,
                interactive: true,
                title: '<img src="styles/legend/pen2021_7.png" /> pen.2021'
            });
var format_pri2021_8 = new ol.format.GeoJSON();
var features_pri2021_8 = format_pri2021_8.readFeatures(json_pri2021_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pri2021_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pri2021_8.addFeatures(features_pri2021_8);
var lyr_pri2021_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pri2021_8, 
                style: style_pri2021_8,
                interactive: true,
                title: '<img src="styles/legend/pri2021_8.png" /> pri.2021'
            });
var format_sil2021_9 = new ol.format.GeoJSON();
var features_sil2021_9 = format_sil2021_9.readFeatures(json_sil2021_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sil2021_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sil2021_9.addFeatures(features_sil2021_9);
var lyr_sil2021_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sil2021_9, 
                style: style_sil2021_9,
                interactive: true,
                title: '<img src="styles/legend/sil2021_9.png" /> sil.2021'
            });

        var lyr_GoogleTerrain_10 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_GeoDaLISAanalysisResults_11 = new ol.format.GeoJSON();
var features_GeoDaLISAanalysisResults_11 = format_GeoDaLISAanalysisResults_11.readFeatures(json_GeoDaLISAanalysisResults_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoDaLISAanalysisResults_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoDaLISAanalysisResults_11.addFeatures(features_GeoDaLISAanalysisResults_11);
var lyr_GeoDaLISAanalysisResults_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeoDaLISAanalysisResults_11, 
                style: style_GeoDaLISAanalysisResults_11,
                interactive: true,
    title: 'GeoDa LISA analysis Results<br />\
    <img src="styles/legend/GeoDaLISAanalysisResults_11_0.png" /> 0<br />\
    <img src="styles/legend/GeoDaLISAanalysisResults_11_1.png" /> 1<br />\
    <img src="styles/legend/GeoDaLISAanalysisResults_11_2.png" /> 2<br />\
    <img src="styles/legend/GeoDaLISAanalysisResults_11_3.png" /> 3<br />\
    <img src="styles/legend/GeoDaLISAanalysisResults_11_4.png" /> 4<br />\
    <img src="styles/legend/GeoDaLISAanalysisResults_11_5.png" /> <br />'
        });
var format_GRBA_park_boundary_12 = new ol.format.GeoJSON();
var features_GRBA_park_boundary_12 = format_GRBA_park_boundary_12.readFeatures(json_GRBA_park_boundary_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRBA_park_boundary_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRBA_park_boundary_12.addFeatures(features_GRBA_park_boundary_12);
var lyr_GRBA_park_boundary_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRBA_park_boundary_12, 
                style: style_GRBA_park_boundary_12,
                interactive: true,
                title: '<img src="styles/legend/GRBA_park_boundary_12.png" /> GRBA_park_boundary'
            });
var format_GRBA_buff_13 = new ol.format.GeoJSON();
var features_GRBA_buff_13 = format_GRBA_buff_13.readFeatures(json_GRBA_buff_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRBA_buff_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRBA_buff_13.addFeatures(features_GRBA_buff_13);
var lyr_GRBA_buff_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRBA_buff_13, 
                style: style_GRBA_buff_13,
                interactive: true,
                title: '<img src="styles/legend/GRBA_buff_13.png" /> GRBA_buff'
            });
var format_GRBAarearoads_14 = new ol.format.GeoJSON();
var features_GRBAarearoads_14 = format_GRBAarearoads_14.readFeatures(json_GRBAarearoads_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRBAarearoads_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRBAarearoads_14.addFeatures(features_GRBAarearoads_14);
var lyr_GRBAarearoads_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRBAarearoads_14, 
                style: style_GRBAarearoads_14,
                interactive: true,
                title: '<img src="styles/legend/GRBAarearoads_14.png" /> GRBA area roads'
            });
var format_GRBA_trails_15 = new ol.format.GeoJSON();
var features_GRBA_trails_15 = format_GRBA_trails_15.readFeatures(json_GRBA_trails_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRBA_trails_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRBA_trails_15.addFeatures(features_GRBA_trails_15);
var lyr_GRBA_trails_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRBA_trails_15, 
                style: style_GRBA_trails_15,
                interactive: true,
                title: '<img src="styles/legend/GRBA_trails_15.png" /> GRBA_trails'
            });
var format_GRBA_Mod_Buff_16 = new ol.format.GeoJSON();
var features_GRBA_Mod_Buff_16 = format_GRBA_Mod_Buff_16.readFeatures(json_GRBA_Mod_Buff_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRBA_Mod_Buff_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRBA_Mod_Buff_16.addFeatures(features_GRBA_Mod_Buff_16);
var lyr_GRBA_Mod_Buff_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRBA_Mod_Buff_16, 
                style: style_GRBA_Mod_Buff_16,
                interactive: true,
                title: '<img src="styles/legend/GRBA_Mod_Buff_16.png" /> GRBA_Mod_Buff'
            });
var lyr_USGS_1_n39w115_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "USGS_1_n39w115",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/USGS_1_n39w115_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12801926.973711, 4579190.371443, -12690236.417948, 4721910.311091]
                            })
                        });
var lyr_USGS_1_n40w115_20211101_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "USGS_1_n40w115_20211101",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/USGS_1_n40w115_20211101_18.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12801926.973757, 4721432.839733, -12690236.417891, 4866184.477963]
                            })
                        });
var group_2021 = new ol.layer.Group({
                                layers: [lyr_eri2021_6,lyr_pen2021_7,lyr_pri2021_8,lyr_sil2021_9,],
                                title: "2021"});
var group_2005points = new ol.layer.Group({
                                layers: [lyr_eriogonum_0,lyr_penstemon_1,lyr_primula_2,lyr_silene_3,lyr_rareplant_pts_ERHO_4,lyr_rareplant_pts_5,],
                                title: "2005 points"});

lyr_eriogonum_0.setVisible(true);lyr_penstemon_1.setVisible(true);lyr_primula_2.setVisible(true);lyr_silene_3.setVisible(true);lyr_rareplant_pts_ERHO_4.setVisible(true);lyr_rareplant_pts_5.setVisible(true);lyr_eri2021_6.setVisible(true);lyr_pen2021_7.setVisible(true);lyr_pri2021_8.setVisible(true);lyr_sil2021_9.setVisible(true);lyr_GoogleTerrain_10.setVisible(true);lyr_GeoDaLISAanalysisResults_11.setVisible(true);lyr_GRBA_park_boundary_12.setVisible(true);lyr_GRBA_buff_13.setVisible(true);lyr_GRBAarearoads_14.setVisible(true);lyr_GRBA_trails_15.setVisible(true);lyr_GRBA_Mod_Buff_16.setVisible(true);lyr_USGS_1_n39w115_17.setVisible(true);lyr_USGS_1_n40w115_20211101_18.setVisible(true);
var layersList = [group_2005points,group_2021,lyr_GoogleTerrain_10,lyr_GeoDaLISAanalysisResults_11,lyr_GRBA_park_boundary_12,lyr_GRBA_buff_13,lyr_GRBAarearoads_14,lyr_GRBA_trails_15,lyr_GRBA_Mod_Buff_16,lyr_USGS_1_n39w115_17,lyr_USGS_1_n40w115_20211101_18];
lyr_eriogonum_0.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'Year': 'Year', });
lyr_penstemon_1.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'Year': 'Year', });
lyr_primula_2.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'Year': 'Year', });
lyr_silene_3.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', 'Perimeter': 'Perimeter', 'Acres': 'Acres', 'Year': 'Year', 'Hectares': 'Hectares', });
lyr_rareplant_pts_ERHO_4.set('fieldAliases', {'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'YEAR': 'YEAR', 'PLANT_CODE': 'PLANT_CODE', });
lyr_rareplant_pts_5.set('fieldAliases', {'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'YEAR': 'YEAR', 'PLANT_CODE': 'PLANT_CODE', });
lyr_eri2021_6.set('fieldAliases', {'elv_f': 'elv_f', 'nd83_tm11N': 'nd83_tm11N', 'nd83_tm1_1': 'nd83_tm1_1', 'ERHO5': 'ERHO5', });
lyr_pen2021_7.set('fieldAliases', {'elv_f': 'elv_f', 'nd83_tm11N': 'nd83_tm11N', 'nd83_tm1_1': 'nd83_tm1_1', 'PELEF': 'PELEF', });
lyr_pri2021_8.set('fieldAliases', {'elv_f': 'elv_f', 'nd83_tm11N': 'nd83_tm11N', 'nd83_tm1_1': 'nd83_tm1_1', 'PRCUN': 'PRCUN', });
lyr_sil2021_9.set('fieldAliases', {'elv_f': 'elv_f', 'nd83_tm11N': 'nd83_tm11N', 'nd83_tm1_1': 'nd83_tm1_1', 'SINA2': 'SINA2', });
lyr_GeoDaLISAanalysisResults_11.set('fieldAliases', {'POLY_ID': 'POLY_ID', 'SOURCE_ID': 'SOURCE_ID', 'JOIN_COUNT': 'JOIN_COUNT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GiZScore': 'GiZScore', 'GiPValue': 'GiPValue', 'NNeighbors': 'NNeighbors', 'Gi_Bin': 'Gi_Bin', 'standardiz': 'standardiz', 'LISA_I': 'LISA_I', 'LISA_CL': 'LISA_CL', 'LISA_P': 'LISA_P', });
lyr_GRBA_park_boundary_12.set('fieldAliases', {'UNIT_TYPE': 'UNIT_TYPE', 'STATE': 'STATE', 'REGION': 'REGION', 'UNIT_CODE': 'UNIT_CODE', 'UNIT_NAME': 'UNIT_NAME', 'DATE_EDIT': 'DATE_EDIT', 'GIS_NOTES': 'GIS_NOTES', 'CREATED_BY': 'CREATED_BY', 'METADATA': 'METADATA', 'PARKNAME': 'PARKNAME', });
lyr_GRBA_buff_13.set('fieldAliases', {'id': 'id', });
lyr_GRBAarearoads_14.set('fieldAliases', {'MAJOR1': 'MAJOR1', 'MINOR1': 'MINOR1', 'MAJOR2': 'MAJOR2', 'MINOR2': 'MINOR2', 'MAJOR3': 'MAJOR3', 'MINOR3': 'MINOR3', 'TYPE': 'TYPE', 'NAME': 'NAME', 'LENGTH': 'LENGTH', 'ID': 'ID', });
lyr_GRBA_trails_15.set('fieldAliases', {'Comment': 'Comment', 'NAME': 'NAME', 'LENGTH': 'LENGTH', 'Trail_Clas': 'Trail_Clas', 'Min_Slope': 'Min_Slope', 'Max_Slope': 'Max_Slope', 'Avg_Slope': 'Avg_Slope', });
lyr_GRBA_Mod_Buff_16.set('fieldAliases', {'id': 'id', });
lyr_eriogonum_0.set('fieldImages', {'ID': '', 'AREA': '', 'PERIMETER': '', 'ACRES': '', 'HECTARES': '', 'Year': '', });
lyr_penstemon_1.set('fieldImages', {'ID': '', 'AREA': '', 'PERIMETER': '', 'ACRES': '', 'HECTARES': '', 'Year': '', });
lyr_primula_2.set('fieldImages', {'ID': '', 'AREA': '', 'PERIMETER': '', 'ACRES': '', 'HECTARES': '', 'Year': '', });
lyr_silene_3.set('fieldImages', {'Id': 'Range', 'Area': 'TextEdit', 'Perimeter': 'TextEdit', 'Acres': 'TextEdit', 'Year': 'Range', 'Hectares': 'TextEdit', });
lyr_rareplant_pts_ERHO_4.set('fieldImages', {'X_COORD': '', 'Y_COORD': '', 'YEAR': '', 'PLANT_CODE': '', });
lyr_rareplant_pts_5.set('fieldImages', {'X_COORD': 'Range', 'Y_COORD': 'Range', 'YEAR': 'Range', 'PLANT_CODE': 'TextEdit', });
lyr_eri2021_6.set('fieldImages', {'elv_f': 'TextEdit', 'nd83_tm11N': 'TextEdit', 'nd83_tm1_1': 'TextEdit', 'ERHO5': 'TextEdit', });
lyr_pen2021_7.set('fieldImages', {'elv_f': 'TextEdit', 'nd83_tm11N': 'TextEdit', 'nd83_tm1_1': 'TextEdit', 'PELEF': 'TextEdit', });
lyr_pri2021_8.set('fieldImages', {'elv_f': 'TextEdit', 'nd83_tm11N': 'TextEdit', 'nd83_tm1_1': 'TextEdit', 'PRCUN': 'TextEdit', });
lyr_sil2021_9.set('fieldImages', {'elv_f': 'TextEdit', 'nd83_tm11N': 'TextEdit', 'nd83_tm1_1': 'TextEdit', 'SINA2': 'TextEdit', });
lyr_GeoDaLISAanalysisResults_11.set('fieldImages', {'POLY_ID': 'TextEdit', 'SOURCE_ID': 'TextEdit', 'JOIN_COUNT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GiZScore': 'TextEdit', 'GiPValue': 'TextEdit', 'NNeighbors': 'TextEdit', 'Gi_Bin': 'TextEdit', 'standardiz': 'TextEdit', 'LISA_I': 'TextEdit', 'LISA_CL': 'TextEdit', 'LISA_P': 'TextEdit', });
lyr_GRBA_park_boundary_12.set('fieldImages', {'UNIT_TYPE': 'TextEdit', 'STATE': 'TextEdit', 'REGION': 'TextEdit', 'UNIT_CODE': 'TextEdit', 'UNIT_NAME': 'TextEdit', 'DATE_EDIT': 'DateTime', 'GIS_NOTES': 'TextEdit', 'CREATED_BY': 'TextEdit', 'METADATA': 'TextEdit', 'PARKNAME': 'TextEdit', });
lyr_GRBA_buff_13.set('fieldImages', {'id': 'TextEdit', });
lyr_GRBAarearoads_14.set('fieldImages', {'MAJOR1': '', 'MINOR1': '', 'MAJOR2': '', 'MINOR2': '', 'MAJOR3': '', 'MINOR3': '', 'TYPE': '', 'NAME': '', 'LENGTH': '', 'ID': '', });
lyr_GRBA_trails_15.set('fieldImages', {'Comment': '', 'NAME': '', 'LENGTH': '', 'Trail_Clas': '', 'Min_Slope': '', 'Max_Slope': '', 'Avg_Slope': '', });
lyr_GRBA_Mod_Buff_16.set('fieldImages', {'id': 'TextEdit', });
lyr_eriogonum_0.set('fieldLabels', {});
lyr_penstemon_1.set('fieldLabels', {});
lyr_primula_2.set('fieldLabels', {});
lyr_silene_3.set('fieldLabels', {});
lyr_rareplant_pts_ERHO_4.set('fieldLabels', {});
lyr_rareplant_pts_5.set('fieldLabels', {});
lyr_eri2021_6.set('fieldLabels', {});
lyr_pen2021_7.set('fieldLabels', {});
lyr_pri2021_8.set('fieldLabels', {});
lyr_sil2021_9.set('fieldLabels', {});
lyr_GeoDaLISAanalysisResults_11.set('fieldLabels', {'POLY_ID': 'no label', 'SOURCE_ID': 'no label', 'JOIN_COUNT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GiZScore': 'no label', 'GiPValue': 'no label', 'NNeighbors': 'no label', 'Gi_Bin': 'no label', 'standardiz': 'no label', 'LISA_I': 'no label', 'LISA_CL': 'no label', 'LISA_P': 'no label', });
lyr_GRBA_park_boundary_12.set('fieldLabels', {'UNIT_TYPE': 'no label', 'STATE': 'no label', 'REGION': 'no label', 'UNIT_CODE': 'no label', 'UNIT_NAME': 'no label', 'DATE_EDIT': 'no label', 'GIS_NOTES': 'no label', 'CREATED_BY': 'no label', 'METADATA': 'no label', 'PARKNAME': 'no label', });
lyr_GRBA_buff_13.set('fieldLabels', {'id': 'no label', });
lyr_GRBAarearoads_14.set('fieldLabels', {'MAJOR1': 'no label', 'MINOR1': 'no label', 'MAJOR2': 'no label', 'MINOR2': 'no label', 'MAJOR3': 'no label', 'MINOR3': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'LENGTH': 'no label', 'ID': 'no label', });
lyr_GRBA_trails_15.set('fieldLabels', {'Comment': 'no label', 'NAME': 'no label', 'LENGTH': 'no label', 'Trail_Clas': 'no label', 'Min_Slope': 'no label', 'Max_Slope': 'no label', 'Avg_Slope': 'no label', });
lyr_GRBA_Mod_Buff_16.set('fieldLabels', {'id': 'no label', });
lyr_GRBA_Mod_Buff_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});