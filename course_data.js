window.lmsCourseData = {
    "en": {
        "title": "QGIS Fundamentals: Complete Beginner's Guide",
        "agreement": "I agree not to copy, redistribute, or republish the course content without the explicit permission of Teshan Ishara.",
        "outcomesTitle": "Course Learning Outcomes",
        "curriculumTitle": "Course Curriculum (5 Modules)",
        "careersTitle": "Available Opportunities & Careers",
        "tabs": {
            "outcomes": "\n                <h4>Course Learning Outcomes</h4>\n                <ul>\n                    <li>Understand the fundamentals of GIS, vector and raster data structures.</li>\n                    <li>Confidently navigate the QGIS user interface, panels, and custom toolbars.</li>\n                    <li>Master Coordinate Reference Systems (CRS) and UTM projection zones to avoid misalignment errors.</li>\n                    <li>Style vector layers using Categorized, Graduated, and advanced Rule-based symbology.</li>\n                    <li>Apply terrain mapping algorithms to Digital Elevation Models (Contour, Hillshade, Slopes).</li>\n                    <li>Perform database edits in Attribute Tables using complex math and geometry expressions.</li>\n                    <li>Execute spatial joing and overlay queries (Buffer, Clip, Intersection, Dissolve).</li>\n                    <li>Design professional layouts in QGIS Print Composer with legends, scale bars, and coordinates grids.</li>\n                    <li>Automate multi-sheet map generation using the QGIS Atlas serialization engine.</li>\n                </ul>\n            ",
            "curriculum": "\n                <h4>Course Curriculum (150 Slides)</h4>\n                <ul>\n                    <li><strong>Module 1:</strong> Introduction to QGIS & GIS Basics (Slides 1 - 30)</li>\n                    <li><strong>Module 2:</strong> Spatial Data Sources, Formats & CRS (Slides 31 - 60)</li>\n                    <li><strong>Module 3:</strong> Map Visualization, Cartography & Styling (Slides 61 - 90)</li>\n                    <li><strong>Module 4:</strong> Attribute Tables, Expressions & Spatial Queries (Slides 91 - 120)</li>\n                    <li><strong>Module 5:</strong> Designing Print Layouts & Map Exporting (Slides 121 - 150)</li>\n                </ul>\n            ",
            "careers": "\n                <h4>Available Opportunities & Careers</h4>\n                <p>Completing this comprehensive, 10-hour level course prepares you for high-paying roles:</p>\n                <ul>\n                    <li><strong>GIS Specialist / Analyst:</strong> Draft corporate spatial databases and publish web maps.</li>\n                    <li><strong>Environmental Spatial Modeler:</strong> Conduct suitability mapping, hydrology modeling, and forestry risk analysis.</li>\n                    <li><strong>Urban Planner:</strong> Analyze municipal transport routes, zoning guidelines, and service area catchments.</li>\n                    <li><strong>Academic Research Consultant:</strong> Assist international thesis works with publication-ready cartographic maps.</li>\n                </ul>\n            "
        },
        "slides": [
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Course Overview & Learning Objectives",
                "text": "Welcome to QGIS Fundamentals. This course is designed to take you from a complete beginner to a confident GIS user. Over 5 comprehensive modules, you will master spatial data models, coordinate reference systems, symbology styling, spatial analysis, attribute queries, and professional map layout designs.",
                "visual": "**Learning Paths:**<br>• Module 1-2: Interface & Projections<br>• Module 3-4: Cartography & Queries<br>• Module 5: Cartographic Output\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/QGIS_Quick_Start_–_The_Geographic_Foundation.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> QGIS Quick Start & Foundation\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "What is GIS? Spatial Data Concepts",
                "text": "Geographic Information Systems (GIS) are computational systems designed to capture, store, manipulate, analyze, manage, and present all types of geographical data. Spatial data is unique because it is referenced to real-world coordinates on Earth, combining geometries with attributes.",
                "visual": "**Spatial Matrix:**<br>• Location: X, Y, Z coordinates<br>• Geometry: Points, Lines, Polygons<br>• Attributes: Non-spatial descriptive database columns",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "The Evolution of QGIS 3.44",
                "text": "QGIS (formerly Quantum GIS) started in 2002 as a simple spatial data viewer. Today, version 3.44 is a world-class, professional desktop GIS suite backed by the OSGeo Foundation. It stands as the leading free and open-source software (FOSS) in the global geospatial industry.",
                "visual": "**Key Milestones:**<br>• 2002: Project founded by Gary Sherman<br>• 2013: QGIS 2.0 released<br>• 2026: QGIS 3.44 LTR with advanced 3D and processing models",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Desktop GIS vs Web GIS vs Mobile GIS",
                "text": "Geospatial technologies operate across three platforms: Desktop GIS (heavy processing, styling, modeling), Web GIS (publishing interactive maps, dashboards, sharing via HTTP), and Mobile GIS (field data collection using GPS, offline mapping).",
                "visual": "**Platform Uses:**<br>• Desktop: QGIS, ArcGIS Pro<br>• Web: QGIS2Web, Mapbox, ArcGIS Online<br>• Mobile: Input, QField, Mergin Maps",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Core Architectural Features of QGIS",
                "text": "QGIS is built on the Qt application framework and C++ library, with extensive Python bindings. It features a modular architecture where the core handles canvas rendering and basic data loading, while plugins extend capabilities for network analysis, database connectivity, and remote sensing.",
                "visual": "**Core Tech Stack:**<br>• GUI Framework: Qt5 / Qt6<br>• Libraries: GDAL, OGR, GEOS, PROJ<br>• Scripting: Python 3 & PyQGIS bindings",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Downloading QGIS: LTR vs PR Releases",
                "text": "When downloading QGIS from qgis.org, you will see two versions: Long Term Release (LTR) and Point Release (PR). LTR is recommended for professional production and corporate deployments because it focuses on stability and bug fixes. PR has the newest features but may contain minor bugs.",
                "visual": "**Version Selection:**<br>• Stability Required: Choose LTR (Long Term Release)<br>• Cutting-edge features: Choose PR (Point Release / Latest Release)",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Installing QGIS on Windows",
                "text": "For Windows users, QGIS is distributed as an MSI installer. You can choose the network installer (OSGeo4W) which manages library updates, or the standalone installer for offline setup. Double-click the MSI, accept the license, select installation folder, and let it copy binaries.",
                "visual": "**Installation Check:**<br>1. Run standalone MSI<br>2. Select destination directory (e.g. `C:\\Program Files\\QGIS 3.44`)<br>3. Open QGIS Desktop from desktop shortcut",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Installing QGIS on macOS",
                "text": "On macOS, QGIS is packaged as a standard DMG disk image. Open the DMG file, drag the QGIS icon into your Applications folder. Note that you may need to authorize the developer signature in macOS System Settings under Security & Privacy before launching it for the first time.",
                "visual": "**macOS Launch Tips:**<br>• Drag QGIS to /Applications<br>• If blocked: Go to System Settings -> Privacy & Security -> Open Anyway",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Installing QGIS on Linux (Ubuntu/Debian)",
                "text": "Linux distributions typically provide QGIS in their package managers. On Ubuntu/Debian, it is highly recommended to add the official QGIS repository to your apt sources rather than using the default distribution repo, which is often outdated. Run apt update and install qgis and qgis-plugin-grass.",
                "visual": "**Terminal Commands:**<br><code>sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable</code><br><code>sudo apt update</code><br><code>sudo apt install qgis qgis-plugin-grass</code>",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "The User Interface Layout Overview",
                "text": "When you open QGIS, the graphical user interface is clean but highly feature-rich. It contains a Menu Bar (top), Toolbars (below menu), Panels (left/right sidebars), Map Canvas (centerpiece rendering area), and Status Bar (bottom). Customizing this layout improves spatial drafting speed.",
                "visual": "**Workspace Control:**<br>• View -> Panels (Toggle panels visibility)<br>• View -> Toolbars (Toggle toolbar items)<br>• Right-click empty grey space on menus to toggle widgets",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Managing Panels: Layers List Panel",
                "text": "The Layers List Panel (typically on the top-left) shows all geospatial datasets loaded into your active session. It displays layer names, legend symbology styles, rendering checkmarks, and group hierarchies. Layer order in this list determines drawing order on the map canvas.",
                "visual": "**Drawing Order Rule:**<br>• Points go to the top<br>• Lines in the middle<br>• Polygons / Rasters at the bottom to avoid occlusion",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Managing Panels: The Browser Panel",
                "text": "The Browser Panel operates as QGIS's built-in file explorer. It lets you navigate local directories, network drives, project directories, database connections (PostGIS, SpatiaLite, Spatialite), and web services (WMS, WFS, XYZ tiles) without leaving the interface. You can drag files directly from here onto the map.",
                "visual": "**Browser Features:**<br>• Drag-and-drop loading<br>• Manage database schemas<br>• Store Favorite folders for quick access",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Toolbars & Navigation Controls",
                "text": "Toolbars provide one-click buttons for common actions. The Map Navigation Toolbar holds buttons for Zoom In, Zoom Out, Pan, Zoom Full Extent, and Zoom to Selection. Utilizing mouse scroll wheel zooming combined with middle-mouse button panning is the standard way to navigate spatial datasets.",
                "visual": "**Navigation Shortcuts:**<br>• Scroll Wheel: Zoom In / Out<br>• Hold Wheel/Middle Button: Pan map canvas<br>• `Ctrl + Shift + F`: Zoom to full extent\n<div class=\"shortcut-widget\" style=\"margin-top: 15px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 8px;\">\n    <span style=\"font-weight: 700; font-size: 0.85rem; color: var(--accent-emerald); display: block; margin-bottom: 8px;\"><i class=\"fa-solid fa-keyboard\"></i> QGIS Navigation Cheat Sheet</span>\n    <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.78rem; text-align: left;\">\n        <div><kbd style=\"background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px; font-family: monospace;\">Ctrl + Shift + F</kbd> Zoom Full</div>\n        <div><kbd style=\"background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px; font-family: monospace;\">Spacebar</kbd> Toggle Pan Mode</div>\n        <div><kbd style=\"background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px; font-family: monospace;\">Middle Click + Drag</kbd> Pan canvas</div>\n        <div><kbd style=\"background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px; font-family: monospace;\">Ctrl + Shift + B</kbd> Show Browser</div>\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "The Map Canvas & Visual Rendering",
                "text": "The Map Canvas is the main visible viewport where spatial layers are drawn. It handles geometry coordinates translation into screen pixels. When layers are heavy, you can uncheck 'Render' in the bottom-right corner to stop active drawing while adjusting properties, preventing CPU lockups.",
                "visual": "**Canvas Options:**<br>• Render checkbox toggle<br>• Set map rotation (degrees)<br>• Dynamic magnifying glass tool",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Setting Up Project Properties",
                "text": "Every QGIS project is saved as a `.qgs` (XML) or `.qgz` (zipped XML + auxiliary data) file. Project properties can be configured under Project -> Properties. Here, you configure general metadata, background color, default CRS, project title, and coordinate display coordinates.",
                "visual": "**Project Properties Tabs:**<br>• General (Title, colors)<br>• Metadata (Author, organization)<br>• CRS (Project-wide map coordinate projection)",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Customizing QGIS Options & User Interface",
                "text": "Global software parameters are controlled under Settings -> Options. In this panel, you can customize default font families, menu languages, proxy settings for networks, system directories, default coordinate systems for new projects, and spatial digitizing tolerances.",
                "visual": "**Quick Tip:**<br>• Go to Settings -> Options -> General to change application language to English or other languages.",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Introduction to the Vector Data Model",
                "text": "Vector data represents real-world features using coordinates. Point geometries represent discrete single-point locations (e.g. wells, cities). Line geometries represent continuous paths (e.g. streams, roads). Polygon geometries represent enclosed geographic areas (e.g. forest boundaries, countries).",
                "visual": "**Vector Geometries:**<br>• Point: Single (X, Y) coordinate pair<br>• LineString: Sequence of connected coordinate points<br>• Polygon: Closed loop of boundary coordinate rings",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Introduction to the Raster Data Model",
                "text": "Raster data represents spatial fields as continuous grid cells (pixels). Each grid cell contains a digital number (DN) value representing a thematic parameter (e.g. elevation in meters, surface temperature in Celsius, reflectance value in remote sensing bands).",
                "visual": "**Raster Structure:**<br>• Grid coordinates (Rows and Columns)<br>• Spatial Resolution (Pixel cell size, e.g. 30m Landsat)<br>• Bands (Spectral wavelengths)",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Understanding Attribute Tables",
                "text": "Behind every vector feature lies a database row in the Attribute Table. This non-spatial data holds descriptive fields (e.g., name, population, land category). Field columns have explicit data types (String, Integer, Decimal, Date) that must be maintained during database operations.",
                "visual": "**Attribute Properties:**<br>• Columns: Database fields (e.g. NAME, POP_EST)<br>• Rows: Features matching coordinates<br>• Field Types: Real (Float), Integer (Int), String (Text)",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Geospatial File Formats vs Database Storage",
                "text": "Spatial data can be stored in standalone files (Shapefiles, GeoTIFFs) or inside relational databases (PostGIS, SpatiaLite, Oracle). Standalone files are simple to share but struggle with multi-user write locks, whereas databases handle millions of records securely under SQL schemas.",
                "visual": "**Database Advantages:**<br>• Multi-user editing concurrency<br>• SQL Spatial index performance (R-Tree)<br>• Centralized database queries",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Managing Local Workspace Directories",
                "text": "Before starting any mapping project, set up a structured project folder. Typically, a workspace has subfolders: `/raw_data` for read-only downloads, `/output` for exported maps/tables, and `/archive` for historic layers. Save your QGIS `.qgz` project at the root folder.",
                "visual": "**Workspace Layout:**<br>• `/project_folder` -> Save `.qgz` here<br>• `/data` -> Place Shapefiles & DEMs here<br>• `/exports` -> Place final PDFs & images here",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Locating Free Open Geospatial Data",
                "text": "Accessing high-quality geographic data is essential. Popular open-data platforms include Natural Earth (global vector datasets), USGS EarthExplorer (Sentinel & Landsat satellite imagery), OpenStreetMap (streets and buildings), and local national geoportals.",
                "visual": "**Data Providers:**<br>• Natural Earth: `naturalearthdata.com`<br>• Satellite DEM: EarthExplorer / NASA ASTER<br>• Infrastructure: OSM Overpass API",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Metadata Standards in GIS Projects",
                "text": "Metadata is 'data about data'. It documents the source of the layers, coordinates accuracy, creation dates, copyright licenses, and authors. Following ISO 19115 standards ensures that other analysts can interpret and trust your maps.",
                "visual": "**Metadata Core Fields:**<br>• Abstract / Summary of layer purpose<br>• Coordinate projection lineage<br>• Usage restrictions & Citation rules",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Adding Your First Vector Layer (Shapefile)",
                "text": "To load a Shapefile into QGIS, drag and drop the `.shp` file from the Browser Panel to the Map Canvas. Alternatively, use Layer -> Add Layer -> Add Vector Layer. Select the file path and click Add. QGIS parses the shape geometries and renders them automatically.",
                "visual": "**Step-by-Step:**<br>1. Menu -> Layer -> Add Layer -> Add Vector Layer<br>2. Select File dataset type<br>3. Browse to `alaska.shp` -> Add -> Close",
                "download": {
                    "text": "Download Alaska Sample Dataset (ZIP, 3.2 MB)",
                    "url": "https://github.com/qgis/QGIS-Sample-Data/archive/master.zip"
                }
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Adding Your First Raster Layer (GeoTIFF)",
                "text": "Raster files like GeoTIFF digital elevation models are loaded via Layer -> Add Layer -> Add Raster Layer. You can also drag the `.tif` file directly from the Browser panel. QGIS will compute image pyramids (if requested) to speed up rendering at varied map scales.",
                "visual": "**Optimizing Rasters:**<br>• Right-click raster -> Properties -> Pyramids<br>• Build pyramids to enable fast sub-sampling redraws at zoomed-out scales.",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "XYZ Tiles background connection (OSM)",
                "text": "To overlay streets or satellite imagery backgrounds, connect to XYZ Tiles. In the Browser Panel, right-click XYZ Tiles, choose New Connection. Paste the OpenStreetMap URL. Drag the new layer to the bottom of your Layers panel.",
                "visual": "**OSM XYZ Connection:**<br>• Name: OpenStreetMap<br>• URL: `https://tile.openstreetmap.org/{z}/{x}/{y}.png`",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Grouping Layers for Visual Cleanliness",
                "text": "As project size increases, the layers panel becomes cluttered. Group layers by right-clicking empty space in Layers, selecting Add Group. Give the group a name (e.g. 'Hydrology', 'Roads') and drag relevant layers inside. You can toggle group visibility with a single click.",
                "visual": "**Grouping Practice:**<br>1. Right-click Layers Panel -> Add Group<br>2. Label group 'Transport'<br>3. Drag highways and railways layers inside the group",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Measuring Distances and Areas in Map Canvas",
                "text": "To measure distances or areas interactively without creating layers, click the Measure Tool on the attributes toolbar. Choose Measure Line or Measure Area. Click on the map canvas to draw vertices. Read calculated parameters in the popup dialog.",
                "visual": "**Measurement Settings:**<br>• Distance units: Meters, Kilometers, Feet<br>• Ellipsoidal settings: Computes distances along Earth ellipsoid for accuracy",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Using Identify Features tool to inspect attributes",
                "text": "To view database records of any feature drawn on screen, click the Identify Features tool (shortcut `Ctrl + Shift + I`). Click on the target map feature. A sidebar panel opens listing all database column values associated with that exact coordinate spot.",
                "visual": "**Keyboard Shortcut:**<br>• Press `Ctrl + Shift + I`<br>• Select 'Auto-open form' to display attribute values in clean popups",
                "download": null
            },
            {
                "module": "Module 1",
                "moduleTitle": "Introduction to QGIS & GIS Basics",
                "title": "Module 1 Practical Assignment",
                "text": "To complete Module 1, download the official QGIS sample dataset. Create a new project, connect OpenStreetMap as an XYZ background, load the Alaska boundaries shapefile, group hydrology layers, and save your project as `module1_setup.qgz`.",
                "visual": "**Assignment Goal:**<br>• Save project file with loaded shapefiles<br>• Setup OSM XYZ connection<br>• Ensure zero broken data paths on load",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Introduction to Module 2",
                "text": "In this module, we will explore spatial data file architectures, geodatabases, web map services, and coordinate reference systems. Understanding projections is the most important theoretical skill in GIS to prevent alignment errors.",
                "visual": "**Core focus:**<br>• Shapefiles vs GeoPackage<br>• Georeferencing maps<br>• Coordinate systems (CRS)",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "The ESRI Shapefile: Legacy and Limits",
                "text": "The ESRI Shapefile (`.shp`) is the most common vector data format, created in the 1990s. However, it has serious limitations: it is not a single file (requires at least `.shp`, `.shx`, `.dbf`), column names are capped at 10 characters, and file size cannot exceed 2 GB.",
                "visual": "**Shapefile Siblings:**<br>• `.shp`: Stores geometries<br>• `.dbf`: Stores attribute table databases<br>• `.shx`: Index file between geometry and attributes",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "The OGC GeoPackage: The Modern Standard",
                "text": "The GeoPackage (`.gpkg`) is a modern, open-source SQLite-based container. It stores vector features, raster tiles, styling configurations, and project metadata inside a single, high-performance file. It has no 2 GB size limit and handles complex schemas easily.",
                "visual": "**GeoPackage Benefits:**<br>• Single file container (.gpkg)<br>• Unlimited file size limits (relies on filesystem)<br>• Supports spatial indexes natively",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "The GeoJSON format for web mapping",
                "text": "GeoJSON is an open standard format designed for representing simple geographical features, along with their non-spatial attributes, based on JavaScript Object Notation. It is highly readable, structured as text, and natively supported by web mapping libraries like Leaflet.",
                "visual": "**Sample GeoJSON Element:**<br><code>{ \"type\": \"Feature\", \"geometry\": { \"type\": \"Point\", \"coordinates\": [80.1, 6.2] } }</code>",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "GPX Formats for GPS Track Logs",
                "text": "GPS Exchange Format (GPX) is an XML schema designed for sharing GPS data between devices and software. It stores waypoints (individual points), routes (ordered lists of points representing a planned path), and tracks (ordered lists of points representing actual movements).",
                "visual": "**Importing GPX:**<br>1. Menu -> Layer -> Add Layer -> Add Vector Layer<br>2. Select GPX file<br>3. Choose sub-layers: waypoints, tracks",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Connecting to Spatial Databases",
                "text": "For large-scale enterprise mapping, data is stored in relational databases. PostGIS (an extension of PostgreSQL) is the industry standard. Connecting QGIS to PostGIS allows you to query millions of rows instantly, edit database geometries concurrently, and run server-side analysis.",
                "visual": "**Database Connection Steps:**<br>1. Browser panel -> Right-click PostgreSQL -> New Connection<br>2. Input Host, Port, Database name, Username, Password<br>3. Test connection -> Add to project",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Understanding SpatiaLite databases",
                "text": "SpatiaLite is the spatial extension of SQLite, allowing standalone local databases. It allows you to run complete SQL queries with geometry functions (e.g. `ST_Buffer`) on a single database file stored locally, without requiring a server setup.",
                "visual": "**SpatiaLite Practice:**<br>• Create SpatiaLite database directly via Browser panel<br>• Drag layers inside to perform SQL queries",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Web Map Services: WMS and WMTS",
                "text": "Web Map Service (WMS) renders spatial data as georeferenced raster tiles on a server and sends them to QGIS as static images. Web Map Tile Service (WMTS) improves this by caching these tiles at standard map scales, making map panning and zooming much faster.",
                "visual": "**Connecting to WMS:**<br>• Browser -> WMS/WMTS -> New Connection<br>• Paste WMS URL -> Connect -> Add layer to canvas",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Web Feature Services: WFS and WCS",
                "text": "Web Feature Service (WFS) allows you to download actual vector geometries and attribute rows from a remote server, enabling local styling and analysis. Web Coverage Service (WCS) does the same for raster datasets, allowing you to access raw grid cell values.",
                "visual": "**WFS Advantage:**<br>• Downloads real coordinates<br>• Allows attribute selection and local vector editing",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Importing Delimited Text Files (CSV)",
                "text": "Delimited text files (e.g. `.csv`) containing X and Y coordinates can be loaded into QGIS. Go to Layer -> Add Layer -> Add Delimited Text Layer. Set X field to longitude, Y field to latitude. Ensure you specify the correct Coordinate System used during field collection.",
                "visual": "**CSV Import Check:**<br>• Geometry definition: Point coordinates<br>• Coordinate System: Typically EPSG:4326 (WGS 84 GPS)",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Geocoding Addresses into Spatial Points",
                "text": "Geocoding is the process of converting textual address descriptions (e.g., '1600 Amphitheatre Pkwy, Mountain View, CA') into spatial coordinate points. QGIS plugins like MMQGIS or Geocoding tool use remote APIs (Nominatim, Google Maps API) to compute coordinates.",
                "visual": "**Geocoding Plugins:**<br>• MMQGIS (Uses Nominatim/OSM)<br>• OSM Place Search panel<br>• Google/Stripe API connectors",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "The Georeferencer Tool: Theory",
                "text": "Georeferencing is the process of assigning real-world coordinates to a scanned map, aerial photograph, or raster image that lacks projection metadata. By identifying Ground Control Points (GCPs) on both the scanned sheet and reference map, QGIS warp-stretches the image.",
                "visual": "**Warp Mechanics:**<br>• GCP (Ground Control Points) placement<br>• Coordinate matching with active reference base layers",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Georeferencer Transformation Settings",
                "text": "When georeferencing, you must configure transformation settings: Transformation type (Linear, Polynomial, Thin Plate Spline) and Resampling method (Nearest Neighbor, Bilinear, Cubic). The target projected CRS and output modified raster path must be defined.",
                "visual": "**Residual Error Check:**<br>• Target a low Target Mean Error (RMS)<br>• Add at least 4 GCPs for Linear, 6 for Polynomial 1",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Warping Georeferenced Rasters Practical",
                "text": "To run the warp, open the Georeferencer window (Layer -> Georeferencer). Add your scanned image, click reference points, input target coordinates. Configure transformation parameters, and click the green 'Start' arrow to generate a projected GeoTIFF.",
                "visual": "**Workflow Check:**<br>1. Add GCP control points<br>2. Select EPSG target system<br>3. Execute and verify alignment on map canvas",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Introduction to Geodesy",
                "text": "Geodesy is the science of measuring Earth's shape, orientation, and gravity field. Because Earth is not a perfect sphere, scientists use ellipsoids (mathematical models of Earth's shape) and datums (which anchor the ellipsoid to the Earth's center) to define coordinates.",
                "visual": "**Models of Earth:**<br>• Geoid: Actual gravitational shape of Earth<br>• Ellipsoid: Mathematical projection approximation (e.g. WGS 84)",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Geographic vs Projected CRS",
                "text": "Coordinate Reference Systems (CRS) are categorized into: Geographic Coordinate Systems (GCS, which measure coordinates in angular degrees, e.g. latitude/longitude) and Projected Coordinate Systems (PCS, which project 3D coordinates onto a flat 2D surface, measured in meters).",
                "visual": "**CRS Metric Units:**<br>• GCS: Latitude / Longitude (Angular degrees)<br>• PCS: Easting / Northing (Metric / Imperial linear measurements)",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Understanding Map Projections & Distortions",
                "text": "Projecting a 3D Earth onto a flat 2D surface always introduces distortions in at least one of four properties: Area, Shape, Distance, or Direction. Conformal projections preserve shape; equal-area projections preserve area; equidistant projections preserve distance.",
                "visual": "**Conformal vs Equal Area:**<br>• Conformal: Preserves local shapes (e.g. Mercator)<br>• Equal Area: Preserves relative areas (e.g. Albers Equal Area)",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Demystifying EPSG Codes",
                "text": "EPSG (European Petroleum Survey Group) codes are standardized 4-to-5-digit numbers that represent unique Coordinate Reference Systems. Instead of configuring complex datum and ellipsoid projection parameters manually, you simply reference the EPSG code.",
                "visual": "**Crucial Codes:**<br>• EPSG:4326 -> WGS 84 Geographic<br>• EPSG:3857 -> WGS 84 Web Mercator",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Universal Transverse Mercator (UTM)",
                "text": "The Universal Transverse Mercator (UTM) system divides the Earth into 60 longitudinal zones, each 6 degrees wide. It uses a conformal transverse Mercator projection in meters. UTM zones are ideal for local mapping because they minimize distortion within the zone boundaries.",
                "visual": "**Sri Lanka UTM Zone:**<br>• Sri Lanka falls into **UTM Zone 44N** (Northern Hemisphere)<br>• Standard projected system for local metric tasks",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Sri Lankan Local Projections",
                "text": "Sri Lanka uses specific local projections: the historical Kandawala datum (EPSG:5223 or local grid system in yards/meters) and the modern Sri Lanka Datum 1999 (SLD99, EPSG:5224 Transverse Mercator). Using these local coordinate systems is critical for high-precision national mapping projects.",
                "visual": "**EPSG Codes for Sri Lanka:**<br>• SLD99 / Sri Lanka Grid (EPSG:5224)<br>• Kandawala / Sri Lanka Grid (EPSG:5223)\n<div class=\"table-widget\" style=\"margin-top: 15px; overflow-x: auto;\">\n    <table style=\"width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: left; border: 1px solid rgba(255,255,255,0.06);\">\n        <thead>\n            <tr style=\"background: rgba(16, 185, 129, 0.08); border-bottom: 1px solid rgba(16, 185, 129, 0.2);\">\n                <th style=\"padding: 6px;\">EPSG Code</th>\n                <th style=\"padding: 6px;\">CRS Name</th>\n                <th style=\"padding: 6px;\">Units</th>\n                <th style=\"padding: 6px;\">Type</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr style=\"border-bottom: 1px solid rgba(255,255,255,0.03);\">\n                <td style=\"padding: 6px; font-weight:700; color: var(--accent-emerald);\">4326</td>\n                <td style=\"padding: 6px;\">WGS 84 Geographic</td>\n                <td style=\"padding: 6px;\">Degrees</td>\n                <td style=\"padding: 6px;\">GPS Standard</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid rgba(255,255,255,0.03);\">\n                <td style=\"padding: 6px; font-weight:700; color: var(--accent-emerald);\">3857</td>\n                <td style=\"padding: 6px;\">WGS 84 / Web Mercator</td>\n                <td style=\"padding: 6px;\">Meters</td>\n                <td style=\"padding: 6px;\">Web Tiles (OSM)</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid rgba(255,255,255,0.03);\">\n                <td style=\"padding: 6px; font-weight:700; color: var(--accent-emerald);\">32644</td>\n                <td style=\"padding: 6px;\">UTM Zone 44N</td>\n                <td style=\"padding: 6px;\">Meters</td>\n                <td style=\"padding: 6px;\">Projected (Local)</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Project CRS vs Layer CRS",
                "text": "Every vector/raster layer has an immutable native CRS in its metadata. The QGIS Project has its own Project CRS. QGIS displays all layers inside the project using the Project CRS. If they differ, QGIS projects coordinates on-the-fly, which does not alter the actual file coordinate system.",
                "visual": "**OTF Rendering:**<br>• On-the-fly projection aligns layers visually<br>• Does NOT modify the raw coordinate values in the file database",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "How to permanently reproject layers",
                "text": "On-the-fly alignment is visual only. For spatial analysis (e.g., buffers, distances), layers must share the exact same Projected CRS. To reproject a layer permanently, right-click the layer, choose Export -> Save Features As. Select the target projected system and save the new file.",
                "visual": "**Reprojection Steps:**<br>1. Right-click layer -> Export -> Save Features As<br>2. Select GeoPackage format<br>3. Set CRS to UTM Zone 44N (EPSG:32644) or SLD99 (EPSG:5224)",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Troubleshooting Coordinate Misalignments",
                "text": "If a newly loaded layer renders in the wrong place (e.g. Sri Lanka layers showing up in the ocean off Africa), the layer has a broken or missing CRS definition. Do NOT use reproject tool. Instead, right-click, select Layer CRS -> Set Layer CRS to force the correct coordinate system definition.",
                "visual": "**Correction Rule:**<br>• Use **Set Layer CRS** to assign missing metadata coordinates<br>• Use **Reproject Layer** to calculate new coordinates on map projection change",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Converting Vector to Raster (Rasterize)",
                "text": "To convert vector layers (points, lines, polygons) into continuous grids, use Raster -> Conversion -> Rasterize (Vector to Raster). You select the input vector layer, the attribute field to write as cell values, and define the output raster pixel size (spatial resolution).",
                "visual": "**Parameter Check:**<br>• Output raster resolution units: Georeferenced units (meters)<br>• Select attribute field containing numerical values for raster values",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Converting Raster to Vector (Polygonize)",
                "text": "To convert continuous raster grids (e.g. classified land use grids) into discrete vector polygons, use Raster -> Conversion -> Polygonize (Raster to Vector). QGIS groups contiguous pixels sharing the same integer value into single polygon features.",
                "visual": "**Execution Parameters:**<br>• Input raster band (e.g. Band 1)<br>• Output field name (typically 'DN')",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Working with Digital Elevation Models (DEM)",
                "text": "A Digital Elevation Model (DEM) is a raster dataset representing continuous terrain heights relative to a vertical datum. DEMs are utilized to generate contours, analyze catchment hydrology flow directions, delineate watersheds, and calculate slopes and hillshades.",
                "visual": "**DEM Datasets:**<br>• SRTM (Shuttle Radar Topography Mission, 30m resolution)<br>• ASTER Global DEM",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Multi-band Remote Sensing Imagery",
                "text": "Satellite imagery is stored as multi-band rasters. Each band captures light reflectance across specific wavelengths (Blue, Green, Red, Near-Infrared, Shortwave-Infrared). In Layer Properties -> Symbology, you can combine these bands into RGB channels to generate True-Color or False-Color views.",
                "visual": "**Band Configurations (Sentinel-2):**<br>• Natural Color (True Color): Red=Band 4, Green=Band 3, Blue=Band 2<br>• False Color (Vegetation): Red=Band 8, Green=Band 4, Blue=Band 3",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Downloading Satellite Data from USGS EarthExplorer",
                "text": "To get raw remote sensing imagery, create an account on USGS EarthExplorer (`earthexplorer.usgs.gov`). Navigate to your study area, filter by date range and cloud cover, select datasets (e.g. Landsat 8-9 OLI), and download the GeoTIFF bundles.",
                "visual": "**Search Filters:**<br>• Date Range: Seasonal filters<br>• Cloud Cover: Lower than 10% to ensure image clarity",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Fixing Invalid Geometry Errors",
                "text": "Geospatial operations fail if vector polygons contain self-intersections or duplicate vertices. Use Processing Toolbox -> Vector geometry -> Check validity to identify errors. Resolve them using the 'Fix Geometries' tool, which rebuilds valid topology paths.",
                "visual": "**Topology Errors:**<br>• Self-intersection (polygon boundary crosses itself)<br>• Duplicate nodes and duplicate segments",
                "download": null
            },
            {
                "module": "Module 2",
                "moduleTitle": "Spatial Data Sources, Formats & CRS",
                "title": "Module 2 Practical Assignment",
                "text": "Download the master repository ZIP dataset. Load the CSV coordinate file using the Delimited Text tool. Check its alignment against XYZ OSM tiles. Reproject the points layer into UTM zone 44N (EPSG:32644), and save your project file as `module2_crs.qgz`.",
                "visual": "**Assignment Checklist:**<br>• Load CSV point data successfully<br>• Convert GCS coordinates to PCS meters projection<br>• Export reprojected layer as GeoPackage",
                "download": {
                    "text": "Download Practice Administrative Boundaries (ZIP, 1.8 MB)",
                    "url": "https://github.com/qgis/QGIS-Sample-Data/archive/master.zip"
                }
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Introduction to Module 3",
                "text": "Map design is both science and art. In this module, you will learn how to apply cartographic design rules, manage qualitative and quantitative symbols, render continuous elevation models, and format readable dynamic map labels.",
                "visual": "**Key topics:**<br>• Symbology classification<br>• Raster rendering (DEMs)<br>• Map labeling engine",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Principles of Cartographic Design",
                "text": "Effective cartography ensures that the reader understands the map's theme immediately. You must maintain clear visual hierarchy (most important layers stand out), appropriate color contrast, legible typography, and avoid map clutter by filtering unnecessary details.",
                "visual": "**Cartographic Design Rules:**<br>• Visual Hierarchy: High-priority data stands out<br>• Simplicity: Avoid background clutter<br>• Color Harmony: Match colors to thematic meanings (e.g. blue for water)\n<div class=\"palette-widget\" style=\"margin-top: 15px; background: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.04); padding: 12px; border-radius: 8px; text-align: left;\">\n    <span style=\"font-weight: 700; font-size: 0.85rem; color: var(--accent-emerald); display: block; margin-bottom: 8px;\"><i class=\"fa-solid fa-palette\"></i> Cartographic Symbology Types</span>\n    <div style=\"display: flex; gap: 8px; flex-wrap: wrap;\">\n        <div style=\"flex: 1; min-width: 80px; background: rgba(29, 191, 115, 0.1); border: 1px solid rgba(29, 191, 115, 0.2); padding: 6px; border-radius: 4px; font-size: 0.72rem; text-align: center;\">\n            <strong>Single Symbol</strong><br>Uniform styling\n        </div>\n        <div style=\"flex: 1; min-width: 80px; background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.2); padding: 6px; border-radius: 4px; font-size: 0.72rem; text-align: center;\">\n            <strong>Categorized</strong><br>Qualitative columns\n        </div>\n        <div style=\"flex: 1; min-width: 80px; background: rgba(255, 179, 0, 0.1); border: 1px solid rgba(255, 179, 0, 0.2); padding: 6px; border-radius: 4px; font-size: 0.72rem; text-align: center;\">\n            <strong>Graduated</strong><br>Quantitative bins\n        </div>\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Configure Layer Symbology",
                "text": "To open symbology styling, double-click any vector layer in the Layers list, navigate to Symbology. The dropdown menu provides styling types: Single Symbol (default), Categorized, Graduated, Rule-based, Point Displacement, and Heatmap.",
                "visual": "**Symbology Path:**<br>• Right-click Layer -> Properties -> Symbology<br>• Toggle render options based on field columns",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Color Theory in Cartography",
                "text": "Choosing colors is critical. Maps utilize: Qualitative color schemes (different hues for nominal data like soil types), Sequential schemes (increasing darkness of a single hue representing quantities), and Diverging schemes (two hues diverging from a central neutral tone).",
                "visual": "**Theme Matching:**<br>• Soil / Geology: Qualitative colors<br>• Population / Income: Sequential gradients<br>• Temperature anomaly / Election: Diverging color ramps",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "ColorBrewer integration in QGIS",
                "text": "QGIS integrates ColorBrewer color ramps natively. When styling categorized or graduated layers, click the Color Ramp dropdown, select 'All Color Ramps' or 'Create New Color Ramp' and choose 'ColorBrewer'. Select schemes that are colorblind-friendly.",
                "visual": "**Selecting Color Ramp:**<br>• Properties -> Symbology -> Color Ramp -> ColorBrewer options<br>• Filter for Colorblind-friendly palettes",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Categorized Symbology for Nominal Data",
                "text": "Use Categorized styling for qualitative data where values represent categories. In the Symbology tab, set style type to Categorized. Select the attribute field column containing the category strings. Click Classify at the bottom to assign a unique color to each value.",
                "visual": "**Categorized Styling Practice:**<br>1. Value: `landuse`<br>2. Color Ramp: Random Colors / Pastel<br>3. Click Classify -> Click Apply",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Graduated Symbology for Quantitative Data",
                "text": "Use Graduated styling for numerical, quantitative fields (e.g. area, population density). Select the numeric column, choose a color ramp gradient, and select a classification method to divide the continuous numerical values into ranges.",
                "visual": "**Graduated Configuration:**<br>• Value: `pop_density`<br>• Color Ramp: Oranges / Viridis<br>• Choose classification method and classes (e.g. 5 classes)",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Data Classification: Equal Interval & Quantiles",
                "text": "When styling graduated layers, classification methods distribute data differently: Equal Interval divides attribute ranges into equal-sized sub-ranges (ideal for ratio data), whereas Quantile places an equal number of features in each class (ideal for rank data).",
                "visual": "**Comparison:**<br>• Equal Interval: Classes are mathematically uniform but features may gather in single classes.<br>• Quantile: Visually balanced map, but features with huge difference in values are grouped together.",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Data Classification: Jenks Natural Breaks",
                "text": "Jenks Natural Breaks is the industry standard classification. It groups values together by minimizing variances within classes while maximizing differences between classes. It is ideal for unevenly distributed data, representing real-world patterns accurately.",
                "visual": "**Jenks Rule of Thumb:**<br>• Select Natural Breaks (Jenks) for general population or economic datasets.<br>• Keep class count to 5 or 6 for human scanning legibility.",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Rule-Based Symbology for Complex Styling",
                "text": "Rule-Based symbology allows you to build custom styling configurations using mathematical expressions. For example, you can style high-risk zones over a certain population with a red hatch pattern, while styling low-risk zones under that threshold with transparent fills.",
                "visual": "**Rule-based Example:**<br>• Rule 1: `\"risk\" = 'High' AND \"population\" > 50000` -> Red color<br>• Rule 2: `\"risk\" = 'Low'` -> Green color",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Point Displacement and Point Cluster Styles",
                "text": "When multiple points share the exact same coordinates (e.g., multiple incident reports at one building), a map shows them overlapping as a single point. Point Displacement pushes them out in a circle/grid configuration, while Point Cluster displays a single marker with a count label.",
                "visual": "**Clustering Setup:**<br>• Symbology drop-down -> Point Cluster<br>• Style center marker and configure the count font size",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Creating Map Heatmaps (Kernel Density)",
                "text": "To visualize point density patterns (e.g. crime hotspots, disease clusters), change symbology to Heatmap. QGIS uses Kernel Density Estimation (KDE) to calculate density surface rings. You configure the search radius (bandwidth) and color ramp.",
                "visual": "**Heatmap Configuration:**<br>• Symbology -> Heatmap<br>• Radius: 15 millimeters (Map canvas scale-dependent)<br>• Color Ramp: Magma / Inferno",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Styling Singleband Gray Raster Layers",
                "text": "Single-band raster grids (like elevation models or NDVI outputs) load as grayscale images by default. In Layer Properties -> Symbology, you set rendering type to Singleband gray. You adjust contrast enhancement settings, minimum/maximum cutoffs, and color gradients.",
                "visual": "**Grayscale settings:**<br>• Color gradient: Black to White / White to Black<br>• Contrast Enhancement: Stretch to MinMax",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Styling Singleband Pseudocolor Raster Layers",
                "text": "To display elevation grids dynamically, set rendering type to Singleband pseudocolor. Select a color ramp (e.g. Terrain or Earth). QGIS assigns specific colors to grid cell height values. Click Classify to build class breaks.",
                "visual": "**Step-by-Step:**<br>1. Properties -> Symbology -> Change dropdown to 'Singleband pseudocolor'<br>2. Select 'Terrain' from Color Ramp dropdown<br>3. Click Classify -> Click Apply",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Generating Terrain Hillshade Views",
                "text": "A Hillshade is a 3D visual effect that simulates shadows cast by sun illumination on mountain terrain. Double-click your DEM raster, select Symbology, set render type to Hillshade. Adjust the light source Azimuth (angle of sun) and Altitude (height of sun).",
                "visual": "**Standard Illumination Parameters:**<br>• Azimuth: 315 degrees (North-West light source matches human vision)<br>• Altitude: 45 degrees",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Generating Raster Contour Lines",
                "text": "To generate topographic contour lines from a DEM raster, go to Raster -> Extraction -> Contour. Specify the contour interval (elevation vertical distance between contours, e.g. 10m or 50m). QGIS extracts vectors and writes height values to a new column.",
                "visual": "**Contour Parameters:**<br>• Interval between contour lines: 20 meters<br>• Attribute field name: 'ELEV' (stores height values)",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Visualizing 3D Map views in QGIS",
                "text": "QGIS contains a powerful native 3D engine. Go to View -> 3D Map Views -> New 3D Map View. In the config menu, specify the elevation DEM layer to drape shapes. Use shift + drag mouse canvas to tilt the earth view in 3D.",
                "visual": "**3D Scene Settings:**<br>• Terrain type: DEM raster layer<br>• Vertical exaggeration: 1.5 (enhances terrain peaks visually)",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Adding Text Labels to Map Features",
                "text": "Labels display names or descriptive text next to map features. In Layer Properties -> Labels tab, change dropdown to Single Labels. Select the attribute database column containing the string values to display on screen.",
                "visual": "**Standard Label Setup:**<br>• Label dropdown: Single Labels<br>• Value field: `\"NAME\"` or `\"city_name\"`",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Formatting Label Font and Style",
                "text": "Legibility of labels is key. In the Labels -> Text sub-tab, customize font family (e.g. Inter, Space Grotesk), style (bold, regular), text size, and color. Use dark labels for light backgrounds and light labels for dark backgrounds.",
                "visual": "**Typography Tips:**<br>• Use sans-serif fonts for web layouts<br>• Bold key labels like cities or capitals for visual dominance",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Adding Label Text Buffers (Halos)",
                "text": "When map backgrounds are complex (multi-colored layers, satellite backdrops), labels are difficult to read. In Labels -> Buffer tab, check 'Draw text buffer'. Set buffer size (e.g. 1.2mm) and color (e.g. white). This draws a halo boundary around letters.",
                "visual": "**Buffer Settings:**<br>• Check: 'Draw text buffer'<br>• Size: 1.0 to 1.5 millimeters<br>• Color: Contrast with text (e.g. White buffer for Black text)",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Setting Label Placement and Orientation",
                "text": "Under Labels -> Placement tab, you configure relative positions. For points, choose Cartographic (puts labels offset at top-right by default). For lines (rivers, roads), choose Curved or Parallel to follow the geometry alignment path.",
                "visual": "**Placement options:**<br>• Point: Cartographic offset (most aesthetic)<br>• Line: Curved (follows roads/rivers curvature)<br>• Polygon: Around centroid / Horizontal only",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Preventing Label Collisions and Overlaps",
                "text": "QGIS uses a sophisticated placement engine to prevent text overlaps. Under Labels -> Rendering tab, you can set label priorities, force drawing of all labels (which disables collision protection), or set maximum label scale visibility limits.",
                "visual": "**Rendering Engine Rules:**<br>• Priority slider: Move to 'High' to prioritize capitals or key features.<br>• Uncheck 'Show all labels' to keep maps readable.",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Scale-Dependent Symbology & Labeling",
                "text": "To avoid map clutter when zoomed out, configure scale limits. In Layer Properties -> Rendering tab, check 'Scale dependent rendering'. Set maximum and minimum scale denominators. At scales outside this range, the layer disappears.",
                "visual": "**Scale Denominators:**<br>• Minimum Visibility Scale: e.g. 1:50,000 (disappears when zoomed out)<br>• Maximum Visibility Scale: e.g. 1:1,000 (disappears when zoomed in too close)",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Working with Symbol Libraries & SVGs",
                "text": "QGIS comes with preloaded icons. To use custom markers, open Symbology, select Simple Marker, change Symbol Layer Type to SVG Marker. Navigate to your custom SVG directory and load markers like trees, tourist icons, or warning symbols.",
                "visual": "**Custom Icon Import:**<br>• Use SVG scale settings to prevent image pixelation<br>• Keep path vectors clean for fast viewport canvas redrawing",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Dynamic Map Legend Configuration",
                "text": "Legends explain map colors. In Layer Properties -> Legend tab, you can set legend placeholders. In Print Layout, legends update automatically, but you can uncheck 'Auto Update' to manually edit names and hide irrelevant background layers.",
                "visual": "**Legend Cleanliness:**<br>• Hide layers that do not add analytical value<br>• Rename raw database field labels to plain English/Sinhala titles",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Using Blending Modes for Visual Effects",
                "text": "Blending modes control how overlapping layers mix colors. Under Layer Properties -> Symbology -> Layer Rendering, select Blending Mode. Choose Multiply to blend dark borders, or Overlay to drape hillshades beneath elevation colors.",
                "visual": "**Draping Elevation Over Hillshade:**<br>1. Place elevation raster layer above hillshade layer<br>2. Set elevation layer Blending Mode to **Multiply**<br>3. Verify 3D texture rendering effect",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Using Geometry Generators for Styling",
                "text": "Geometry Generators allow you to create dynamic visual elements on-the-fly using expressions, without modifying raw database coordinates. For example, generating centroid points from polygons, or buffering lines dynamically on screen.",
                "visual": "**Generator Expression Examples:**<br>• Find center: <code>centroid($geometry)</code><br>• Draw dynamic buffer: <code>buffer($geometry, 100)</code>",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Creating Map Drop Shadows and Glows",
                "text": "To make key map features 'pop' off the screen, open Symbology, select Draw Effects at the bottom. Check Outer Glow or Drop Shadow. Adjust offset distances, blur radii, colors, and opacity parameters for a modern look.",
                "visual": "**Aesthetic Parameters:**<br>• Drop shadow offset: X=1.0mm, Y=1.0mm<br>• Shadow opacity: 40% (keep it subtle)",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Creating Flow and Direction Maps",
                "text": "To map transport directions, migration, or water flow vectors, style line layers using 'Arrow' or 'Line marker' symbology. You can place arrow indicators at start, end, or repeating intervals along the line coordinates.",
                "visual": "**Arrow Placement:**<br>• Geometry generator: Arrow line configuration<br>• Set arrows to display on last vertex only for direction pointers",
                "download": null
            },
            {
                "module": "Module 3",
                "moduleTitle": "Map Visualization, Cartography & Styling",
                "title": "Module 3 Practical Assignment",
                "text": "Using the local projection coordinates set up in Module 2, categorize land use layers, apply Jenks Natural Breaks to population census polygons, configure styled text labels with white buffers, and export styling templates as `.qml` files.",
                "visual": "**Assignment Goals:**<br>• Categorized soil/land-use vector style<br>• Graduated Jenks breaks on demographic polygons<br>• Export styled layers as `.qml` template files",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Introduction to Module 4",
                "text": "GIS is database-driven. In this module, you will learn to manage attribute tables, run mathematical expressions, perform spatial calculations, link tables, execute geoprocessing tasks, and build automated spatial workflows.",
                "visual": "**Key elements:**<br>• Field Calculator formulas<br>• Geoprocessing overlay tools<br>• Table joins",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Sorting and Filtering Attribute Tables",
                "text": "Attribute tables manage non-spatial data. Open the table, click column headers to sort ascending or descending. Use the Filter box at the bottom left to write basic queries, showing only features that meet criteria in active workspace.",
                "visual": "**Sorting Actions:**<br>• Left-click column header: Sort asc/desc<br>• Click 'Show Selected Features Only' to isolate items on canvas",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Selecting Features on Map Canvas",
                "text": "Selecting isolates data. QGIS provides: Selection by Rectangle (drag on screen), Selection by Polygon, Selection by Value (popup form matching), and Selection by Expression (building complex mathematical logic queries). Selected features turn yellow.",
                "visual": "**Selection Rules:**<br>• Select by Value: Match exact column values<br>• Clear Selection button on attributes toolbar restores default display state\n<div class=\"code-widget\" style=\"margin-top: 15px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-left: 3px solid var(--accent-emerald); padding: 10px; border-radius: 4px; font-family: monospace; font-size: 0.78rem; text-align: left;\">\n    <span style=\"color: #888; display: block; margin-bottom: 4px; font-family: var(--font-body); font-size: 0.75rem;\">Common Field Calculator Geometry Expressions:</span>\n    <code>$area / 10000</code> <span style=\"color: #666;\">-- Area in Hectares</span><br>\n    <code>$length / 1000</code> <span style=\"color: #666;\">-- Length in Kilometers</span><br>\n    <code>x($geometry)</code> <span style=\"color: #666;\">-- Retrieve Point X Coordinate</span><br>\n    <code>num_points($geometry)</code> <span style=\"color: #666;\">-- Count vertices in line/poly</span>\n</div>\n",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Spatial Selection (Select by Location)",
                "text": "Spatial Selection queries database elements based on geometric relationships (Contain, Intersect, Disjoint, Touch, Overlap). For example, selecting all schools located within a flood polygon, or identifying properties within 100m of a highway.",
                "visual": "**Spatial Relations:**<br>• Intersect: Shares coordinate space<br>• Within: Fully enclosed inside boundary<br>• Touch: Coordinates touch at boundaries only",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Select by Expression Syntax",
                "text": "Select by Expression uses SQL-like logic. Click the Expression button in the attribute toolbar. Use operators (`=`, `>`, `<`, `LIKE`, `AND`, `OR`) to construct filter criteria. Double-click fields and values to prevent query spelling mistakes.",
                "visual": "**Common Query Formats:**<br>• String Search: `\"NAME\" LIKE 'S%'` (starts with S)<br>• Numeric Range: `\"elev\" >= 500 AND \"elev\" <= 1000`",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Combining Queries using Boolean Logic",
                "text": "Boolean operators link multiple queries. `AND` requires all statements to be true; `OR` requires at least one to be true; `NOT` excludes features. Parentheses must be utilized to define exact calculation order in compound queries.",
                "visual": "**Order of Operations Query:**<br>• Expression: `(\"type\" = 'Forest' OR \"type\" = 'Wetland') AND \"area_ha\" > 10`",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "The Field Calculator: Safe Modes",
                "text": "The Field Calculator calculates values. Open Attribute Table, click the abacus icon. You can: Create a new field (defining type and length) or Update an existing field. Ensure you use Edit Mode safely to prevent data loss.",
                "visual": "**Field Calculator Rules:**<br>• Always specify correct Output field type (e.g. Double)<br>• Field name limits: Shapefiles limit column header length to 10 characters",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Field Calculator Mathematical Functions",
                "text": "The Field Calculator contains hundreds of built-in functions: Math (`abs`, `ceil`, `round`), String (`concat`, `upper`, `substr`), Date (calculate age from timestamps), and conversions to translate between string and numbers.",
                "visual": "**Useful Formulas:**<br>• Round decimal: `round(\"area_meters\", 2)`<br>• Combine text: `concat(\"City: \", \"NAME\")`",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Calculating Geometry: Area Formulas",
                "text": "Geometry functions start with `$`. To calculate polygon area in projected map units (e.g., square meters), write `$area`. To calculate in hectares, divide by 10,000. To calculate in square kilometers, divide by 1,000,000.",
                "visual": "**Area Geometry Logic:**<br>• Formula: `$area / 10000` (Hectares conversion)<br>• Note: Layer must be in Projected CRS (meters) for valid metric units.",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Calculating Line Lengths and Perimeters",
                "text": "For line layers, write `$length` in Field Calculator to compute coordinate segment lengths. For polygon layers, write `$perimeter` to calculate boundary lengths. QGIS reads CRS projection metadata to compute ellipsoidal parameters.",
                "visual": "**Length Calculations:**<br>• Formula: `$length / 1000` (Kilometers conversion)<br>• Ensure Layer Projected Coordinate system is active on calculation run.",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Extracting Coordinate Points ($x, $y)",
                "text": "For point vector layers, you can calculate and write geographic coordinate locations into new attribute columns. In Field Calculator, write `$x` to compute Easting or Longitude, and `$y` to compute Northing or Latitude values.",
                "visual": "**Easting / Northing Extraction:**<br>• Longitude column formula: `$x`<br>• Latitude column formula: `$y`",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Using CASE WHEN Conditional logic",
                "text": "To categorize numeric attributes into text categories (e.g. classifying elevations into Low, Medium, High), use CASE WHEN statements. The calculation evaluates rows sequentially and writes appropriate values.",
                "visual": "**Conditional Expression Syntax:**<br><code>CASE<br>  WHEN \"elevation\" < 100 THEN 'Low'<br>  WHEN \"elevation\" >= 100 AND \"elevation\" < 500 THEN 'Medium'<br>  ELSE 'High'<br>END</code>",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Geospatial Table Joins (Joins Tab)",
                "text": "A Join links spatial features with an external non-spatial table (e.g., matching county polygons with an Excel census sheet). Go to Layer Properties -> Joins tab. Click Add, select join field (unique common ID). Attributes append dynamically.",
                "visual": "**Join Prerequisites:**<br>• Both files must share a matching attribute column (Join Field)<br>• Data types of join columns must match exactly (e.g. both String or both Int)",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Spatial Joins (Join by Location)",
                "text": "Spatial Joins combine attributes based on overlapping location geometries. Go to Processing Toolbox -> Join attributes by location. Choose target layers. Attributes of overlapping features append without requiring common ID values.",
                "visual": "**Use Case Example:**<br>• Append District name attributes to local water well point layers overlapping that district polygon",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Data Aggregation and Summaries",
                "text": "To calculate stats across categories (e.g. finding average population per province), use Processing Toolbox -> Vector analysis -> Statistics by categories. Choose analysis field, classification field, and run to output tables.",
                "visual": "**Outputs Generated:**<br>• Sum, Mean, Min, Max, and Standard Deviation statistics for grouped categories",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Basic Geoprocessing: Vector Buffers",
                "text": "A Buffer creates proximity zones around features at defined distances (meters/kilometers). Go to Vector -> Geoprocessing Tools -> Buffer. Specify input layer, distance parameter, and toggle 'Dissolve result' to merge overlapping circles.",
                "visual": "**Buffer Parameters:**<br>• Distance: Proximity threshold (e.g. 50 meters)<br>• Segments: Smoothness of output circles<br>• Dissolve: Merges boundary intersections",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Vector Overlay: Clip and Difference",
                "text": "Clip isolates features inside boundary polygons (works like cookie cutter). Difference does the opposite: it cuts out geometry areas that overlap boundary features, isolating data outside target limits.",
                "visual": "**Overlay Tools:**<br>• Clip: Vector -> Geoprocessing -> Clip<br>• Difference: Vector -> Geoprocessing -> Difference",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Vector Overlay: Intersection and Union",
                "text": "Intersection keeps only overlapping geographic areas and combines attribute fields from both input layers. Union keeps all geometry areas from both input layers, merging attributes where features overlap and leaving nulls elsewhere.",
                "visual": "**Overlay Functions:**<br>• Intersection: AND logic on geometry space<br>• Union: OR logic on geometry space",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Vector Aggregation: Dissolve and Merge",
                "text": "Dissolve removes internal boundaries between polygons that share the same attribute value (e.g. dissolving county boundaries into state borders). Merge combines separate layers of the same geometry type into one single spatial file.",
                "visual": "**Aggregation Tools:**<br>• Dissolve: Vector -> Geoprocessing -> Dissolve<br>• Merge Vector Layers: Vector -> Data Management -> Merge",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Extracting and Splitting Spatial Parts",
                "text": "To separate multipart polygons (like islands) into individual singlepart polygons, run 'Multipart to singleparts'. To split a single layer into multiple distinct files based on attribute categories, run 'Split vector layer'.",
                "visual": "**Splitting Vector:**<br>• Run: Vector -> Data Management -> Split Vector Layer<br>• Select unique ID field (each value saves as a separate file)",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Centroid Calculations & Point-in-Polygon",
                "text": "Centroid calculations compute the geometric center point of polygon layers (Vector -> Geometry Tools -> Centroids). Point-in-polygon counts incident points inside boundaries (Vector -> Analysis -> Count points in polygon).",
                "visual": "**Incident Count:**<br>• Output: New polygon layer with an added column storing numeric count of point intersections",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Generating Distance Matrix Tables",
                "text": "To calculate linear distances between two point layers (e.g., finding the nearest hospital for every school in the province), go to Vector -> Analysis Tools -> Distance Matrix. It outputs a matrix table storing distance values.",
                "visual": "**Distance Matrix Setup:**<br>• Input layer: Schools<br>• Target layer: Hospitals<br>• Output: Linear distances table",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Introduction to the Raster Calculator",
                "text": "The Raster Calculator allows you to run map algebra expressions on raster pixels. Go to Raster -> Raster Calculator. You can calculate indices, multiply raster values by conversion constants, or overlay multiple grids with thresholds.",
                "visual": "**Raster Formulas:**<br>• Conversion: `\"raster@1\" * 3.2808` (Meters to Feet)<br>• Grid overlay boolean operators",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Computing NDVI Vegetation Index",
                "text": "Normalized Difference Vegetation Index (NDVI) measures vegetation health. Using Sentinel-2 or Landsat bands, write the formula in Raster Calculator: `(NIR - Red) / (NIR + Red)`. Healthy vegetation outputs positive values close to 1.0.",
                "visual": "**Sentinel-2 NDVI Bands:**<br>• Formula: `( \"sentinel@8\" - \"sentinel@4\" ) / ( \"sentinel@8\" + \"sentinel@4\" )`",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Raster Multi-Criteria Evaluation (MCE)",
                "text": "Multi-Criteria Evaluation (MCE) overlays multiple raster layers representing parameters (slope, soil depth, distance to roads) to identify optimal sites. You reclassify rasters, apply weights, and sum them in Raster Calculator.",
                "visual": "**MCE Overlay Formula:**<br>• Weighted Sum: `(\"slope@1\" * 0.4) + (\"road_dist@1\" * 0.3) + (\"soil@1\" * 0.3)`",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Topology Rules Configuration",
                "text": "Topology describes geometric relationships between features. In QGIS, use the Topology Checker plugin. Configure rules like 'Must not overlap' for parcels, or 'Must not have gaps' to identify digital errors on map borders.",
                "visual": "**Topology Checker Rules:**<br>• Rule: `[parcels] Must Not Overlap`<br>• Rule: `[boundaries] Must Not Have Gaps`",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Graphical Processing Modeler (Workflow Automation)",
                "text": "To automate repetitive operations, QGIS features a Graphical Processing Modeler (Project -> Model Designer). You drag inputs (vectors, numbers) and processing algorithms (buffer, clip) onto a workflow canvas, linking them sequentially.",
                "visual": "**Model Builder Elements:**<br>• Model Inputs: Vector layer parameters<br>• Model Algorithms: Sequential geoprocessing steps",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Running Batch Processes in Toolbox",
                "text": "To run one algorithm on hundreds of files (e.g. clipping 50 district layers by a provincial boundary), double-click the tool, click 'Run as Batch Process'. Input parameters as spreadsheet rows and execute to run concurrently.",
                "visual": "**Batch Entry:**<br>• Fill rows with target file paths<br>• autofill output naming parameters with prefix values",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Exporting Attribute Tables to CSV/Excel",
                "text": "Once calculations are complete, you can export non-spatial records. Right-click the vector layer, select Export -> Save Features As. Change format from GeoPackage to Comma Separated Value (CSV) or MS Office Open XML (XLSX).",
                "visual": "**Export Options:**<br>• Select columns to export<br>• Choose formatting: decimal points precision",
                "download": null
            },
            {
                "module": "Module 4",
                "moduleTitle": "Attribute Tables, Expressions & Spatial Queries",
                "title": "Module 4 Practical Assignment",
                "text": "Using the master repository dataset, run a select by expression query to isolate specific infrastructure features, compute their buffer zones, run a spatial clip overlay, calculate area fields in hectares, and save as `module4_analysis.qgz`.",
                "visual": "**Assignment Deliverables:**<br>• Select by expression formula code<br>• Calculated metric area column fields<br>• Dissolved boundary buffers layers",
                "download": {
                    "text": "Download Advanced Analysis GIS Layers (ZIP, 5.4 MB)",
                    "url": "https://github.com/qgis/QGIS-Sample-Data/archive/master.zip"
                }
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Introduction to Module 5",
                "text": "A map is only as good as its final layout. In this module, you will master the QGIS Print Layout composer. You will learn to add maps, legends, dynamic scale bars, north arrows, coordinates grids, and build automated map series templates.",
                "visual": "**Key metrics:**<br>• Map item layout properties<br>• Coordinates grid overlays<br>• QGIS Atlas mapbook serializing",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "The Print Layout Workspace Composer",
                "text": "To open the print layout workspace, go to Project -> New Print Layout. Give the layout a unique title. This opens a separate graphical interface dedicated to page layout design. You configure page size (e.g. A4, A3) and page orientation.",
                "visual": "**Page Settings:**<br>• Page Size: Standard ISO sheets (A4/A3)<br>• Page Orientation: Landscape / Portrait",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Layout Properties and Page Guides",
                "text": "Guides help align items. Right-click empty page space in the layout, choose Page Properties. Under guides, configure vertical and horizontal guide percentages. Snapping to guides ensures that legends and text boxes align perfectly.",
                "visual": "**Layout Grids and Snapping:**<br>• Snap tolerance: Set to 5 pixels<br>• Grid spacing parameters: e.g. 10mm intervals",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Adding the Main Map Item",
                "text": "To place the QGIS map onto the page, click the 'Add Map' button on the layout toolbar. Click and drag a rectangular bounding box on the layout canvas. QGIS renders your active desktop layers within this item border.",
                "visual": "**Map Item Parameters:**<br>• Set map scale (e.g. 10000)<br>• Click 'Update Preview' to redraw layers canvas in layout\n<div class=\"layout-widget\" style=\"margin-top: 15px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; text-align: left;\">\n    <span style=\"font-weight: 700; font-size: 0.85rem; color: var(--accent-emerald); display: block; margin-bottom: 6px;\"><i class=\"fa-solid fa-map\"></i> Mandatory Layout Elements</span>\n    <ul style=\"font-size: 0.76rem; margin: 0; padding-left: 15px; color: var(--text-secondary); line-height: 1.4;\">\n        <li><strong>Map Frame:</strong> Dynamic view with scale constraints.</li>\n        <li><strong>Scalebar:</strong> Configured in metric units (meters/km).</li>\n        <li><strong>Legend:</strong> Clean title with custom vector layer filters.</li>\n        <li><strong>North Arrow:</strong> Align map rotation angle.</li>\n    </ul>\n</div>\n",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Navigating Map Extent in Layouts",
                "text": "To move the map area visible inside the frame without moving the page layout elements, click the 'Move Item Content' tool (shortcut `C`). Drag inside the map box. Zoom with mouse scroll wheel to adjust scale value in Item Properties.",
                "visual": "**Scale Control:**<br>• Item Properties -> Scale<br>• Input direct numerical denominators (e.g. 25000 for 1:25,000)",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Saving and Using Layout Templates (.qpt)",
                "text": "If you design a beautiful layout with logo banners and title boxes, save it as a template via Layout -> Save as Template. It saves as a `.qpt` (XML) file, which can be imported into new projects to maintain visual consistency.",
                "visual": "**Load Template Path:**<br>• Project -> Layout Manager -> Specific layout templates selection",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Adding and Customizing the Map Legend",
                "text": "To show colors definitions, click Add Legend. Drag on canvas. In Item Properties, uncheck 'Auto Update'. Double-click text items to write descriptive labels. Group/ungroup items and check 'Only show items inside linked map'.",
                "visual": "**Legend Filters:**<br>• Toggle: 'Only show items inside linked map' (hides unused layer symbols)<br>• Customize font sizes for Title, Group, and Sub-group",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Adding and Styling Scale Bars",
                "text": "Click Add Scalebar, drag on page. In Item Properties, link it to the main map frame. Select scale bar style (Single Box, Double Box, Numeric, Ticks). Configure units to Kilometers or Miles, and specify segment multiplier values.",
                "visual": "**Scalebar segments:**<br>• Left segments: e.g. 2 (represents subdivisions)<br>• Right segments: e.g. 4 (represents major ticks)",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Inserting North Arrows",
                "text": "To show map orientation, click Add North Arrow, drag on canvas. Choose a north arrow marker from the SVG browser. In Item Properties, link it to the main map item so it rotates dynamically if you rotate the map canvas.",
                "visual": "**Dynamic Orientation Rotation:**<br>• Item Properties -> Map rotation sync: Sync with Map 1",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Adding Layout Titles and Text Annotations",
                "text": "To write map titles, metadata, or coordinates warnings, click Add Label. Write text inside Item Properties -> HTML/Text box. Configure font styles, borders, margins, alignments, and toggle HTML parsing if needed.",
                "visual": "**Aesthetic Alignment:**<br>• Center align title text boxes<br>• Enable border frames and background fills if text overlaps map edges",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Adding Corporate Logos and Images",
                "text": "To insert images, click Add Picture, drag on page. Select raster image paths (PNG, JPEG) or vector SVG files. Configure scaling options (Zoom, Stretch, Clip) to prevent distortion of company logos or north arrow vectors.",
                "visual": "**Image Scaling:**<br>• Use 'Zoom' scaling mode to maintain logo aspect ratio without distortions",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Adding Map Coordinate Grids (Graticules)",
                "text": "Grids show coordinates lines. In Item Properties of Map, expand Grids, click green plus. Select Grid Type (Solid, Cross, Ticks, Frame only). Set Grid CRS (often project GCS or PCS). Define Interval values (distance between lines).",
                "visual": "**Grid Intervals:**<br>• GCS grids (degrees): e.g. interval = 0.5 degrees<br>• PCS grids (meters): e.g. interval = 10000 meters",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Styling Grid Lines & Coordinate Ticks",
                "text": "Under Grid Item Properties, customize line styles (color, width, opacity). You can select 'Frame only' to display coordinate numbers around page margins without drawing grid lines across the main map canvas.",
                "visual": "**Grid Style Tips:**<br>• Use light grey lines (e.g. 30% opacity) to avoid obscuring geographical layers<br>• Use Tick marks for cleaner visual outputs",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Formatting Coordinates Labels around Margins",
                "text": "To draw coordinate coordinates numbers on layout borders, check 'Draw Coordinates' in Grid properties. Change format to 'Decimal with suffix' (e.g. 80.5 E, 6.2 N). Configure left, right, top, bottom styles to display horizontally or vertically.",
                "visual": "**Vertical Coordinates Layout:**<br>• Right/Left margins coordinate labels: Set to **Vertical Ascending / Descending** to save layout page width margins.",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Creating Map Overview / Key Map Insets",
                "text": "An overview map shows the location of your main study area within a larger region. Add a second smaller map item. Link it to the main map frame by checking 'Overview' and selecting 'Map 1' in the properties, which draws a red extent rectangle.",
                "visual": "**Inset Setup Steps:**<br>1. Draw small Map 2 in page corner<br>2. Properties -> Overviews -> Add overview -> Set frame map to Map 1<br>3. Style the outline rectangle with a transparent red fill",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Linking Map Views and Locking Layers",
                "text": "If you have inset maps, you must freeze the layers drawn. Select the map item, check 'Lock Layers' and 'Lock Styles for layers'. This prevents layout maps from updating when you toggle layer visibility in the main QGIS canvas.",
                "visual": "**Workflow Rule:**<br>• Freeze map items before changing symbology for other layout pages",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Designing Multi-Page layouts",
                "text": "QGIS Print Layout supports multi-page maps. Right-click empty page space, select Add Page. You can assign different layouts or print scales to different pages, enabling you to export a complete multi-sheet mapping portfolio.",
                "visual": "**Page Navigation:**<br>• Use layout page selector at bottom status bar to navigate page sheets",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "The QGIS Atlas Serializer Engine",
                "text": "The Atlas engine automates mapbook generation. Instead of manually exporting 50 maps for 50 districts, Atlas iterates through a vector boundary layer (coverage layer), centering the map canvas and exporting sheets automatically.",
                "visual": "**Atlas Components:**<br>• Coverage Layer: Boundary vector layer<br>• Output naming expressions based on attributes",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Setting Up Atlas Coverage Layers",
                "text": "To configure Atlas, open the Atlas panel in Layout view. Check 'Generate an Atlas'. Select the coverage layer (polygon layer with boundaries). Set output file names using expressions like `\"district_name\"` and configure margin percentages.",
                "visual": "**Atlas Margins:**<br>• Set margin around feature to 10% or 15% to keep boundary context visible",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Dynamic Atlas text labels parsing",
                "text": "To display dynamic titles that update with each Atlas page, add a standard text label. Write expression codes: `[% \"district_name\" %]`. During export, QGIS replaces these brackets with the current feature's attribute string.",
                "visual": "**Atlas Label Syntax:**<br>• Title: `\"District: \" || [% \"NAME_1\" %]`",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Exporting Layouts as Raster Images",
                "text": "To export your map as an image (PNG or JPEG), click Layout -> Export as Image. Select file path, click Save. The Image Export Options dialog opens where you configure the output width, height, and resolution (DPI).",
                "visual": "**DPI Rules:**<br>• Web preview: 72-150 DPI<br>• Print publication: 300 DPI (minimum standard)",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Understanding Export Resolutions (DPI)",
                "text": "Dots Per Inch (DPI) determines output crispness. Standard screen layouts use 72-96 DPI. Print journals and engineering drawings require 300 DPI. For large posters with fine details, 600 DPI ensures text and lines stay sharp when printed.",
                "visual": "**Resolution Scaling:**<br>• Higher DPI increases pixel count and file size, check system memory limit before exporting at 600 DPI",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Exporting Layouts as Vector Graphics (SVG)",
                "text": "To preserve vector paths (letting you edit boundaries and fonts in programs like Adobe Illustrator), export as SVG (Layout -> Export as SVG). SVG maintains clean geometric lines and editable text paths natively.",
                "visual": "**SVG Options:**<br>• Check 'Export map layers as groups'<br>• Check 'Export text as paths' if custom fonts are missing on target computers",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Exporting Layouts as PDF files",
                "text": "PDF is the standard format for sharing maps. Go to Layout -> Export as PDF. Choose destination. QGIS exports all vector geometries, styling layers, legends, and coordinate grids inside a single, scalable file.",
                "visual": "**PDF Advantages:**<br>• Universal format compatibility<br>• Maintains high-resolution vector text paths",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Generating Interactive GeoPDFs",
                "text": "QGIS allows you to export georeferenced PDFs. In PDF export options, check 'Create GeoPDF'. GeoPDFs contain coordinate systems and spatial layers inside the PDF file, allowing readers to toggle layers and read X/Y coordinates inside Adobe Reader.",
                "visual": "**GeoPDF Features:**<br>• Toggle map layers on/off inside PDF viewer<br>• Read real coordinates locations with Adobe measuring tools",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Preparing Web Maps (QGIS2Web plugin)",
                "text": "To publish maps to the web without coding, install the `qgis2web` plugin. Configure your map layers, set parameters, and click export. It generates a complete directory containing HTML, CSS, JavaScript, Leaflet, or OpenLayers libraries.",
                "visual": "**Web Map Export Steps:**<br>1. Plugins -> Manage -> Install `qgis2web`<br>2. Web -> QGIS2Web -> Create Web Map<br>3. Choose Leaflet -> Export to folder",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Packaging QGIS Project Files (.qgz)",
                "text": "Sharing projects with colleagues requires packaging. Save the project as a `.qgz` archive, which compresses the project XML with styles data. Make sure all referenced files utilize relative paths rather than absolute paths to prevent broken source paths on load.",
                "visual": "**Save Settings Check:**<br>• Project -> Properties -> General -> Save Paths: Set to **Relative**",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Cartographic Ethics and Copyright Citations",
                "text": "Always credit data sources. Ensure that copyrights for background tiles (e.g. OpenStreetMap contributors), satellite data (e.g. USGS), and national vectors are explicitly cited in your layout margins.",
                "visual": "**Copyright text example:**<br>• `Map Data © OpenStreetMap contributors, DEM courtesy of NASA SRTM`",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Adding and Styling Attribute Tables in Layouts",
                "text": "To display tabular descriptive data alongside your map, you can add an Attribute Table item (Add Item -> Add Attribute Table). In its properties, link it to a vector layer, select which columns to show, filter rows to only show features visible in the map canvas, and customize header fonts and grid line colors.",
                "visual": "**Table Properties:**<br>• Link to Layer: Vector boundary layers<br>• Check: 'Show only features intersecting map'<br>• Style grid colors and cell paddings",
                "download": null
            },
            {
                "module": "Module 5",
                "moduleTitle": "Designing Print Layouts & Map Exporting",
                "title": "Course Review & Examination Guide",
                "text": "Congratulations! You have completed all 150 slides. In this final step, review all modules' concepts: Coordinate projections, data classifications, SQL selections, geometry expressions, layout grids, and cartographic design principles before starting the exam.",
                "visual": "**Exam Checklist:**<br>• 40 Multiple choice questions<br>• 70% passing threshold<br>• Map assignment upload required for certificate\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/Phase_3__The_Advanced_QGIS_Data_Pipeline.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> Phase 3: The Advanced QGIS Data Pipeline\n    </div>\n</div>\n",
                "download": null
            }
        ],
        "flashcards": [
            {
                "q": "What is the difference between Vector and Raster data?",
                "a": "Vector data uses coordinates (points, lines, polygons) to represent discrete objects. Raster data uses continuous grid cell pixels to represent fields like elevation or temperature."
            },
            {
                "q": "Why is a Coordinate Reference System (CRS) critical in GIS?",
                "a": "A CRS projects the 3D Earth surface onto a 2D flat map. Selecting the wrong CRS leads to distorted map geometry, distance measurement errors, and incorrect area calculations."
            },
            {
                "q": "What EPSG code represents the global GPS WGS 84 geographic CRS?",
                "a": "EPSG:4326 is the standard code representing WGS 84 geographic coordinates, using latitude and longitude in degrees."
            },
            {
                "q": "How do you calculate area in hectares inside the Field Calculator?",
                "a": "Create a decimal column and write the expression '$area / 10000'. Ensure your layer is in a Projected CRS (e.g. UTM) so calculations are in meters."
            },
            {
                "q": "Which QGIS tool is used to compose and export high-quality publication maps?",
                "a": "The Print Layout (Project -> New Print Layout) is used to compose maps, legends, scale bars, north arrows, and export them as PDFs or images at 300 DPI."
            },
            {
                "q": "How do you resolve coordinate alignment mismatches in a project?",
                "a": "Go to Project Properties -> CRS, set a project-wide CRS, and let QGIS perform 'on-the-fly' projection. If spatial tools fail, use Vector General -> Reproject Layer."
            },
            {
                "q": "What is a spatial database index and why is it used?",
                "a": "A spatial index (like R-Tree) indexes bounding boxes of geometries. It speeds up rendering, spatial intersection queries, and geoprocessing operations on large layers."
            },
            {
                "q": "Explain the difference between Categorized and Graduated symbology styles.",
                "a": "Categorized styles color features by unique text names (zoning types). Graduated styles color features by splitting numeric ranges into classification bins (Jenks breaks)."
            },
            {
                "q": "What is the difference between WMS and WFS web mapping connections?",
                "a": "WMS (Web Map Service) renders static images on a server and displays them as read-only tiles. WFS (Web Feature Service) downloads the actual vector geometries."
            },
            {
                "q": "Why does a 100-meter buffer query output a massive circle covering the globe?",
                "a": "If your layer uses a geographic coordinate system (degrees, EPSG:4326), a buffer distance of 100 is computed as 100 degrees instead of 100 meters. Reproject to UTM."
            },
            {
                "q": "What is the primary function of the QGIS Atlas engine?",
                "a": "Atlas automates map page generation. It iterates through a 'coverage layer' (like district polygons) and exports a custom map view page for each feature."
            },
            {
                "q": "What is a Digital Elevation Model (DEM)?",
                "a": "A DEM is a raster grid where pixel values represent elevation above a vertical datum. QGIS can convert DEMs into contour lines, slope angles, or hillshades."
            },
            {
                "q": "What is georeferencing and how is it performed?",
                "a": "Georeferencing aligns unreferenced images (scanned maps, aerial photos) to geographic space by placing Ground Control Points (GCPs) on matching real-world coordinates."
            },
            {
                "q": "What are the core legacy limits of the ESRI Shapefile format?",
                "a": "Shapefiles require at least 3 companion files (.shp, .dbf, .shx), columns are capped at 10 characters, and file size cannot exceed 2 GB. GeoPackage is the modern replacement."
            },
            {
                "q": "What do the libraries GDAL and OGR do in the QGIS architecture?",
                "a": "GDAL is the core engine for reading and writing raster files, while OGR is the library for translating vector formats. They enable multi-format support."
            }
        ],
        "quiz": [
            {
                "q": "What is Geographic Information Systems (GIS)?",
                "o": [
                    "A software to browse local files",
                    "A system to capture, store, analyze, and present spatial data",
                    "A framework to download mobile games",
                    "A tool to calculate financial equations"
                ],
                "a": 1
            },
            {
                "q": "Which organization manages the development and core releases of QGIS?",
                "o": [
                    "ESRI Inc.",
                    "The OSGeo Foundation",
                    "Microsoft Corp.",
                    "Google Cloud Foundation"
                ],
                "a": 1
            },
            {
                "q": "What is the recommended version of QGIS for professional work and corporate deployments?",
                "o": [
                    "Point Release (PR)",
                    "Developer Build (Master)",
                    "Long Term Release (LTR)",
                    "Alpha release"
                ],
                "a": 2
            },
            {
                "q": "What does the Layers Panel display in the QGIS interface?",
                "o": [
                    "A list of web bookmarks",
                    "A list of loaded spatial layers in the active project",
                    "The coordinate output values",
                    "Application configuration logs"
                ],
                "a": 1
            },
            {
                "q": "What is the primary function of the QGIS Browser Panel?",
                "o": [
                    "To browse online web pages",
                    "To navigate and drag-and-drop local and databases datasets",
                    "To style vector points",
                    "To run python modeling scripts"
                ],
                "a": 1
            },
            {
                "q": "What coordinate system is the global standard for GPS data?",
                "o": [
                    "UTM zone 44N",
                    "WGS 84 Geographic",
                    "Web Mercator",
                    "Kandawala datum"
                ],
                "a": 1
            },
            {
                "q": "Which layer type represents continuous, grid-cell pixel data?",
                "o": [
                    "Point layer",
                    "Line layer",
                    "Raster layer",
                    "Polygon layer"
                ],
                "a": 2
            },
            {
                "q": "How do you restore a panel (like Layers or Browser) that has accidentally been closed?",
                "o": [
                    "Project -> Revert Project",
                    "View -> Panels -> Toggle checkmarks",
                    "Settings -> Reset options",
                    "Help -> Check updates"
                ],
                "a": 1
            },
            {
                "q": "What is a main file limitation of the legacy ESRI Shapefile?",
                "o": [
                    "Column names must exceed 20 characters",
                    "File size cannot exceed 2 GB",
                    "It is stored as a single zipped file",
                    "It does not support polygon geometry"
                ],
                "a": 1
            },
            {
                "q": "Which modern vector container stores multiple layers, styles, and rasters in a single SQLite file?",
                "o": [
                    "Shapefile",
                    "GeoJSON",
                    "GeoPackage (.gpkg)",
                    "KML file"
                ],
                "a": 2
            },
            {
                "q": "What does GCS stand for in coordinate reference systems?",
                "o": [
                    "Grid Coordinate System",
                    "Geographic Coordinate System",
                    "Geodetic Calculation Standard",
                    "Global Cartographic Structure"
                ],
                "a": 1
            },
            {
                "q": "Which EPSG code represents the standard WGS 84 geographic coordinate system?",
                "o": [
                    "EPSG:3857",
                    "EPSG:4326",
                    "EPSG:5224",
                    "EPSG:32644"
                ],
                "a": 1
            },
            {
                "q": "If you need to calculate distance in meters, which coordinate system should your layer use?",
                "o": [
                    "Geographic Coordinate System (degrees)",
                    "Projected Coordinate System (meters)",
                    "Spherical coordinate grid",
                    "Standard polar grid"
                ],
                "a": 1
            },
            {
                "q": "What UTM projection zone does Sri Lanka primarily fall into?",
                "o": [
                    "Zone 44N",
                    "Zone 43S",
                    "Zone 38N",
                    "Zone 48N"
                ],
                "a": 0
            },
            {
                "q": "What is the modern standard projected coordinate system for Sri Lanka?",
                "o": [
                    "Kandawala Datum / Ceylon Grid",
                    "SLD99 / Sri Lanka Grid (EPSG:5224)",
                    "WGS 84 UTM zone 44N",
                    "WGS 84 Web Mercator"
                ],
                "a": 1
            },
            {
                "q": "How do you permanently change the coordinate system projection of a vector file in QGIS?",
                "o": [
                    "Set Layer CRS in Properties",
                    "Right-click -> Export -> Save Features As with a new CRS",
                    "Change background project CRS",
                    "Rename file extension in file explorer"
                ],
                "a": 1
            },
            {
                "q": "Which color scheme type should you use to map quantitative, ordered data like population density?",
                "o": [
                    "Qualitative (different hues)",
                    "Sequential (single hue gradient)",
                    "Diverging (dual hue gradient)",
                    "Random colors"
                ],
                "a": 1
            },
            {
                "q": "Which classification method assigns an equal number of spatial features into each class range?",
                "o": [
                    "Equal Interval",
                    "Quantile",
                    "Jenks Natural Breaks",
                    "Standard Deviation"
                ],
                "a": 1
            },
            {
                "q": "Which classification method minimizes value variances within classes while maximizing differences between classes?",
                "o": [
                    "Equal Interval",
                    "Quantile",
                    "Jenks (Natural Breaks)",
                    "Logarithmic breaks"
                ],
                "a": 2
            },
            {
                "q": "In vector styling, which renderer is best for qualitative data like soil classes or landuse codes?",
                "o": [
                    "Graduated",
                    "Categorized",
                    "Single Symbol",
                    "Heatmap"
                ],
                "a": 1
            },
            {
                "q": "What does a Hillshade rendering simulate on a map canvas?",
                "o": [
                    "Continuous vegetation density",
                    "Terrain shadows cast by light source illumination",
                    "Water flow catchment boundaries",
                    "Road network traffic density"
                ],
                "a": 1
            },
            {
                "q": "Which contour line parameter determines the vertical elevation interval between lines?",
                "o": [
                    "Azimuth angle",
                    "Contour interval",
                    "RMS residual error",
                    "Scale factor"
                ],
                "a": 1
            },
            {
                "q": "To make map labels readable against multi-colored layer backdrops, you should apply a:",
                "o": [
                    "Draw Effect Drop Shadow",
                    "Text Buffer (Halo)",
                    "Geometry Generator",
                    "Blending Mode Multiply"
                ],
                "a": 1
            },
            {
                "q": "For line layers (like roads or rivers), which label placement setting aligns text following curves?",
                "o": [
                    "Cartographic Offset",
                    "Curved Placement",
                    "Centroid Horizontal",
                    "Over Point"
                ],
                "a": 1
            },
            {
                "q": "Which Field Calculator expression calculates the area of polygons in hectares (assuming metric CRS)?",
                "o": [
                    "$area / 1000",
                    "$area / 10000",
                    "$area * 10000",
                    "$area / 1000000"
                ],
                "a": 1
            },
            {
                "q": "What is the result of using the geometry function '$length' in the Field Calculator?",
                "o": [
                    "The perimeter of polygon boundary",
                    "The total length of line segments in map units",
                    "The latitude coordinate value",
                    "The distance to map origin"
                ],
                "a": 1
            },
            {
                "q": "Which geoprocessing tool creates proximity zones around features at defined distances?",
                "o": [
                    "Clip tool",
                    "Dissolve tool",
                    "Buffer tool",
                    "Merge tool"
                ],
                "a": 2
            },
            {
                "q": "Which overlay tool isolates features inside boundary polygons like a cookie cutter?",
                "o": [
                    "Difference",
                    "Union",
                    "Clip",
                    "Intersection"
                ],
                "a": 2
            },
            {
                "q": "What is the purpose of the 'Dissolve' tool in geoprocessing?",
                "o": [
                    "To split multi-part polygons into single parts",
                    "To remove internal boundaries between polygons sharing attributes",
                    "To export database records to Excel",
                    "To merge two layers of different geometry types"
                ],
                "a": 1
            },
            {
                "q": "To calculate the NDVI vegetation index using satellite imagery bands, what is the correct formula?",
                "o": [
                    "(Red - NIR) / (Red + NIR)",
                    "(NIR - Red) / (NIR + Red)",
                    "NIR / Red",
                    "(NIR * Red) / 100"
                ],
                "a": 1
            },
            {
                "q": "Which database join type appends attribute records based on geometric coordinates rather than database IDs?",
                "o": [
                    "Primary Join",
                    "Table Join",
                    "Spatial Join (Join by Location)",
                    "Excel VLOOKUP Join"
                ],
                "a": 2
            },
            {
                "q": "Which panel designer in QGIS allows analysts to automate spatial workflows by linking algorithms?",
                "o": [
                    "Symbology panel",
                    "Graphical Processing Modeler",
                    "Raster Calculator",
                    "Layout Composer"
                ],
                "a": 1
            },
            {
                "q": "Where in QGIS do you compose and add map components like legends, titles, and scale bars?",
                "o": [
                    "Browser panel",
                    "Modeler panel",
                    "Print Layout composer",
                    "Georeferencer window"
                ],
                "a": 2
            },
            {
                "q": "Which file format saves print layout arrangements as reusable templates?",
                "o": [
                    "XML style format (.qml)",
                    "QGIS Project format (.qgz)",
                    "Layout Template format (.qpt)",
                    "Shapefile shape format (.shp)"
                ],
                "a": 2
            },
            {
                "q": "What tool keeps a layout map frame frozen so it doesn't shift when styling layers in workspace?",
                "o": [
                    "Move Item Content",
                    "Lock Layers and Lock Styles",
                    "Auto-update legend",
                    "Scale lock setting"
                ],
                "a": 1
            },
            {
                "q": "Which engine automates mapbook series generation in QGIS Print Layout?",
                "o": [
                    "KDE Heatmap Engine",
                    "Processing Toolbox Engine",
                    "Atlas Engine",
                    "SpatiaLite Engine"
                ],
                "a": 2
            },
            {
                "q": "What is the minimum recommended resolution (DPI) when exporting final maps for print publications?",
                "o": [
                    "72 DPI",
                    "150 DPI",
                    "300 DPI",
                    "1200 DPI"
                ],
                "a": 2
            },
            {
                "q": "Which format preserves vector paths, letting you edit text and borders in Adobe Illustrator?",
                "o": [
                    "TIFF image",
                    "PDF or SVG vector export",
                    "JPEG image",
                    "XML file"
                ],
                "a": 1
            },
            {
                "q": "What does a GeoPDF file include natively?",
                "o": [
                    "Interactive layers and geographic coordinate coordinates metadata",
                    "A Python compiler",
                    "Only raster raster pixel data",
                    "A locked background sitemap"
                ],
                "a": 0
            },
            {
                "q": "Before sending a QGIS project file (.qgz) to a colleague, you must set project paths to:",
                "o": [
                    "Absolute paths",
                    "System temp directories",
                    "Relative paths",
                    "Network server paths"
                ],
                "a": 2
            }
        ]
    },
    "si": {
        "title": "QGIS මූලධර්ම: සම්පූර්ණ ආධුනික මාර්ගෝපදේශය",
        "agreement": "මා විසින් මෙම පාඨමාලා අන්තර්ගතය ඉෂාර තේෂාන්ගේ පූර්ණ අවසරයකින් තොරව පිටපත් කිරීම, නැවත බෙදාහැරීම හෝ නැවත ප්‍රකාශයට පත් නොකරන බවට එකඟ වෙමි.",
        "outcomesTitle": "පාඨමාලා ඉගෙනුම් ප්‍රතිඵල",
        "curriculumTitle": "පාඨමාලා විෂය නිර්දේශය (මොඩියුල 5)",
        "careersTitle": "පවතින අවස්ථා සහ වෘත්තීන්",
        "tabs": {
            "outcomes": "\n                <h4>පාඨමාලා ඉගෙනුම් ප්‍රතිඵල</h4>\n                <ul>\n                    <li>GIS හි මූලික කරුණු, vector සහ raster දත්ත ව්‍යුහයන් තේරුම් ගැනීම.</li>\n                    <li>QGIS අතුරු මුහුණත, පැනල සහ මෙවලම් තීරු පහසුවෙන් හැසිරවීම.</li>\n                    <li>ඛණ්ඩාංක පද්ධති (CRS) සහ UTM කලාප භාවිතය මඟින් දත්ත ගැළපුම් ගැටළු මඟහරවා ගැනීම.</li>\n                    <li>සරල, වර්ගීකරණ (Categorized), ශ්‍රේණිගත (Graduated) සහ රීති-පදනම් (Rule-based) සංකේත භාවිතයෙන් දත්ත හැඩතල ගැන්වීම.</li>\n                    <li>DEM රාස්ටර් දත්ත භාවිතයෙන් contours, hillshade සහ slope සිතියම් සැකසීම.</li>\n                    <li>Field Calculator හි ගණිතමය සහ ජ්‍යාමිතික ප්‍රකාශන භාවිතයෙන් දත්ත වගු සැකසීම.</li>\n                    <li>භූගෝලීය විශ්ලේෂණ මෙවලම් භාවිතය (Buffer, Clip, Intersection, Dissolve).</li>\n                    <li>Print Layout කවුළුව මඟින් සූචි, පරිමාණ සහ ඛණ්ඩාංක ජාල සහිත වෘත්තීය සිතියම් සැලසුම් කිරීම.</li>\n                    <li>QGIS Atlas එන්ජිම මඟින් සිතියම් පොත් ස්වයංක්‍රීයව ජනනය කිරීම.</li>\n                </ul>\n            ",
            "curriculum": "\n                <h4>පාඨමාලා විෂය නිර්දේශය (ස්ලයිඩ 150)</h4>\n                <ul>\n                    <li><strong>මොඩියුලය 1:</strong> QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු (ස්ලයිඩ 1 - 30)</li>\n                    <li><strong>මොඩියුලය 2:</strong> අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ CRS (ස්ලයිඩ 31 - 60)</li>\n                    <li><strong>මොඩියුලය 3:</strong> සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම් (ස්ලයිඩ 61 - 90)</li>\n                    <li><strong>මොඩියුලය 4:</strong> ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම් (ස්ලයිඩ 91 - 120)</li>\n                    <li><strong>මොඩියුලය 5:</strong> මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය (ස්ලයිඩ 121 - 150)</li>\n                </ul>\n            ",
            "careers": "\n                <h4>පවතින අවස්ථා සහ වෘත්තීන්</h4>\n                <p>මෙම පුළුල්, පැය 10 මට්ටමේ පාඨමාලාව සම්පූර්ණ කිරීමෙන් ඔබට පහත ක්ෂේත්‍රවල රැකියා සඳහා සුදුසුකම් ලැබේ:</p>\n                <ul>\n                    <li><strong>GIS විශේෂඥ / විශ්ලේෂක:</strong> අවකාශීය දත්ත සමුදායන් නිර්මාණය සහ වෙබ් සිතියම් ප්‍රකාශනය.</li>\n                    <li><strong>පරිසර අවකාශීය ආකෘතිකරණ ශිල්පී:</strong> යෝග්‍යතා සිතියම්කරණය, ජල විද්‍යාත්මක විශ්ලේෂණ සහ වනාන්තර අවදානම් ඇගයීම්.</li>\n                    <li><strong>නාගරික සැලසුම්කරු:</strong> ප්‍රවාහන මාර්ග, කලාපකරණ රීති සහ සේවා ප්‍රවේශ කලාප විශ්ලේෂණය.</li>\n                    <li><strong>ශාස්ත්‍රීය පර්යේෂණ උපදේශක:</strong> ජාත්‍යන්තර ප්‍රකාශන සඳහා සුදුසු වෘත්තීය මට්ටමේ සිතියම් සකසා දීම.</li>\n                </ul>\n            "
        },
        "slides": [
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Course දළ විශ්ලේෂණය & Learning Objectives",
                "text": "මෘදුකාංගය පිළිබඳ දළ විශ්ලේෂණයක් සහ පාඨමාලා අරමුණු. මෙම පාඨමාලාව සැලසුම් කර ඇත්තේ ආරම්භකයකුගේ සිට විශ්වාසදායක GIS පරිශීලකයෙකු දක්වා ඔබව රැගෙන යාමටයි. මෙහිදී ඛණ්ඩාංක පද්ධති, සිතියම් වර්ණ ගැන්වීම, අවකාශීය විශ්ලේෂණය සහ මුද්‍රණ සැලසුම් ඔබ ප්‍රගුණ කරනු ඇත.",
                "visual": "**Learning Paths:**<br>• Module 1-2: Interface & Projections<br>• Module 3-4: Cartography & Queries<br>• Module 5: Cartographic Output\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/QGIS_Quick_Start_–_The_Geographic_Foundation.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> QGIS Quick Start & Foundation (English)\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "What is GIS? Spatial Data Concepts",
                "text": "භූගෝලීය තොරතුරු පද්ධති (GIS) සහ අවකාශීය දත්ත සංකල්ප. GIS යනු භූගෝලීය දත්ත ග්‍රහණය කර ගැනීමට, ගබඩා කිරීමට, විශ්ලේෂණය කිරීමට සහ ඉදිරිපත් කිරීමට භාවිත වන පද්ධතියකි. අවකාශීය දත්ත සැබෑ ලෝකයේ ඛණ්ඩාංක සමඟ බැඳී පවතී.",
                "visual": "**Spatial Matrix:**<br>• Location: X, Y, Z coordinates<br>• Geometry: Points, Lines, Polygons<br>• Attributes: Non-spatial descriptive database columns",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "The Evolution of QGIS 3.44",
                "text": "QGIS 3.44 හි පරිණාමය. QGIS යනු 2002 දී ආරම්භ වූ සරල අවකාශීය දත්ත බලන මෘදුකාංගයකි. අද වන විට එය ලොව ප්‍රමුඛතම විවෘත කේත GIS මෘදුකාංගයක් බවට පත්ව ඇත.",
                "visual": "**Key Milestones:**<br>• 2002: Project founded by Gary Sherman<br>• 2013: QGIS 2.0 released<br>• 2026: QGIS 3.44 LTR with advanced 3D and processing models",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Desktop GIS vs Web GIS vs Mobile GIS",
                "text": "ඩෙස්ක්ටොප් GIS, වෙබ් GIS සහ මොබයිල් GIS. අවකාශීය තාක්ෂණයන් ආකාර තුනකින් ක්‍රියා කරයි: ඩෙස්ක්ටොප් (දත්ත සැකසීම සහ විශ්ලේෂණය), වෙබ් (අන්තර්ජාලය හරහා සිතියම් බෙදාහැරීම), සහ මොබයිල් (ක්ෂේත්‍ර දත්ත රැස්කිරීම).",
                "visual": "**Platform Uses:**<br>• Desktop: QGIS, ArcGIS Pro<br>• Web: QGIS2Web, Mapbox, ArcGIS Online<br>• Mobile: Input, QField, Mergin Maps",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Core Architectural Features of QGIS",
                "text": "QGIS හි ප්‍රධාන ගෘහ නිර්මාණ ලක්ෂණ. QGIS Qt රාමුව සහ C++ කේත මත පදනම් වී ඇති අතර Python සමඟ සම්බන්ධ කළ හැකිය. මෙහි මූලික පද්ධතිය දත්ත පෙන්වීමට ක්‍රියා කරන අතර ප්ලගීන මඟින් අමතර පහසුකම් සපයයි.",
                "visual": "**Core Tech Stack:**<br>• GUI Framework: Qt5 / Qt6<br>• Libraries: GDAL, OGR, GEOS, PROJ<br>• Scripting: Python 3 & PyQGIS bindings",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Downloading QGIS: LTR vs PR Releases",
                "text": "QGIS බාගත කිරීම: LTR සහ PR සංස්කරණ. QGIS වෙබ් අඩවියේ සංස්කරණ දෙකක් දැකිය හැකිය: LTR (දිගුකාලීන ස්ථාවර සංස්කරණය) සහ PR (නවීන අංග සහිත සංස්කරණය). වෘත්තීය කටයුතු සඳහා LTR නිර්දේශ කෙරේ.",
                "visual": "**Version Selection:**<br>• Stability Required: Choose LTR (Long Term Release)<br>• Cutting-edge features: Choose PR (Point Release / Latest Release)",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Installing QGIS on Windows",
                "text": "Windows මත QGIS ස්ථාපනය කිරීම. Windows පරිශීලකයින් සඳහා QGIS MSI ගොනුවක් ලෙස ලැබෙන අතර එය සාමාන්‍ය මෘදුකාංගයක් ස්ථාපනය කරන ආකාරයටම පරිගණකයට එක් කළ හැකිය.",
                "visual": "**Installation Check:**<br>1. Run standalone MSI<br>2. Select destination directory (e.g. `C:\\Program Files\\QGIS 3.44`)<br>3. Open QGIS Desktop from desktop shortcut",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Installing QGIS on macOS",
                "text": "macOS මත QGIS ස්ථාපනය කිරීම. macOS සඳහා QGIS DMG ගොනුවක් ලෙස පැමිණෙන අතර එය Applications වෙත drag කිරීමෙන් ස්ථාපනය කළ හැකිය. ආරක්ෂණ අවසරයන් ලබාදීම පළමු වරට විවෘත කිරීමේදී අවශ්‍ය වේ.",
                "visual": "**macOS Launch Tips:**<br>• Drag QGIS to /Applications<br>• If blocked: Go to System Settings -> Privacy & Security -> Open Anyway",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Installing QGIS on Linux (Ubuntu/Debian)",
                "text": "Linux (Ubuntu/Debian) මත QGIS ස්ථාපනය කිරීම. Linux සඳහා නිල QGIS repository එක apt sources වෙත එක්කර ස්ථාපනය කිරීමෙන් නවතම මෘදුකාංගය ලබාගත හැකිය.",
                "visual": "**Terminal Commands:**<br><code>sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable</code><br><code>sudo apt update</code><br><code>sudo apt install qgis qgis-plugin-grass</code>",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "The User Interface Layout දළ විශ්ලේෂණය",
                "text": "පරිශීලක අතුරු මුහුණතේ දළ විශ්ලේෂණය. QGIS විවෘත කළ විට ඉහළින් මෙනු තීරුවද, මෙවලම් තීරුද, දෙපසින් පැනලද, මැදින් සිතියම් තලයද පහළින් තත්ත්ව තීරුවද දැකිය හැකිය.",
                "visual": "**Workspace Control:**<br>• View -> Panels (Toggle panels visibility)<br>• View -> Toolbars (Toggle toolbar items)<br>• Right-click empty grey space on menus to toggle widgets\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/QGIS_ආරම්භය_සහ_අතුරුමුහුණත.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> QGIS ආරම්භය සහ අතුරුමුහුණත (Interface Overview)\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Managing Panels: Layers List Panel",
                "text": "Layers List පැනලය හැසිරවීම. Layers පැනලය මඟින් ව්‍යාපෘතියට ඇතුලත් කර ඇති සියලුම දත්ත ස්ථර පෙන්වන අතර එහි පිළිවෙල අනුව සිතියමේ දත්ත එකිනෙක මත දර්ශනය වේ.",
                "visual": "**Drawing Order Rule:**<br>• Points go to the top<br>• Lines in the middle<br>• Polygons / Rasters at the bottom to avoid occlusion",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Managing Panels: The Browser Panel",
                "text": "Browser පැනලය හැසිරවීම. මෙය QGIS මෘදුකාංගය තුල ඇති ගොනු ගවේෂකය වන අතර පරිගණකයේ ඇති ගොනු, දත්ත සමුදායන් සහ වෙබ් සේවාවන් පහසුවෙන් සිතියමට drag කිරීමට මඟ පාදයි.",
                "visual": "**Browser Features:**<br>• Drag-and-drop loading<br>• Manage database schemas<br>• Store Favorite folders for quick access\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/QGIS_දත්ත_ගවේෂක.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> QGIS දත්ත ගවේෂක (Data Explorer Guide)\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Toolbars & Navigation Controls",
                "text": "මෙවලම් තීරු සහ සිතියම හැසිරවීම. මෙවලම් තීරු මඟින් සිතියම විශාල කිරීම (Zoom In), කුඩා කිරීම (Zoom Out), සහ මාරු කිරීම (Pan) වැනි දේ ක්ලික් කිරීම් මඟින් සිදු කිරීමට ඉඩ සලසයි.",
                "visual": "**Navigation Shortcuts:**<br>• Scroll Wheel: Zoom In / Out<br>• Hold Wheel/Middle Button: Pan map canvas<br>• `Ctrl + Shift + F`: Zoom to full extent\n<div class=\"shortcut-widget\" style=\"margin-top: 15px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 8px;\">\n    <span style=\"font-weight: 700; font-size: 0.85rem; color: var(--accent-emerald); display: block; margin-bottom: 8px;\"><i class=\"fa-solid fa-keyboard\"></i> QGIS Navigation Cheat Sheet</span>\n    <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.78rem; text-align: left;\">\n        <div><kbd style=\"background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px; font-family: monospace;\">Ctrl + Shift + F</kbd> Zoom Full</div>\n        <div><kbd style=\"background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px; font-family: monospace;\">Spacebar</kbd> Toggle Pan Mode</div>\n        <div><kbd style=\"background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px; font-family: monospace;\">Middle Click + Drag</kbd> Pan canvas</div>\n        <div><kbd style=\"background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 3px; font-family: monospace;\">Ctrl + Shift + B</kbd> Show Browser</div>\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "The Map Canvas & Visual Rendering",
                "text": "සිතියම් තලය සහ දෘශ්‍ය පරිවර්තනය. සිතියම් තලය යනු දත්ත ස්ථර ඇඳෙන ප්‍රධාන කොටසයි. දත්ත ප්‍රමාණය විශාල නම් පහළ දකුණු කෙළවරේ ඇති 'Render' යන්න අක්‍රිය කිරීමෙන් මෘදුකාංගය ලැග් වීම වළක්වා ගත හැකිය.",
                "visual": "**Canvas Options:**<br>• Render checkbox toggle<br>• Set map rotation (degrees)<br>• Dynamic magnifying glass tool",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Setting Up Project Properties",
                "text": "ව්‍යාපෘති ගුණාංග සැකසීම. ව්‍යාපෘතියක් `.qgz` ගොනුවක් ලෙස සුරැකෙන අතර Project -> Properties මඟින් එහි මාතෘකාව, පසුබිම් වර්ණය සහ සම්මත ඛණ්ඩාංක පද්ධතිය සැකසිය හැකිය.",
                "visual": "**Project Properties Tabs:**<br>• General (Title, colors)<br>• Metadata (Author, organization)<br>• CRS (Project-wide map coordinate projection)\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/QGIS_ව්_යාපෘති_කළමනාකරණය.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> QGIS ව්‍යාපෘති කළමනාකරණය (Project Management)\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Customizing QGIS Options & User Interface",
                "text": "QGIS වින්‍යාස කිරීම. Settings -> Options මඟින් මෘදුකාංගයේ අකුරු වර්ග, භාෂාව, අන්තර්ජාල සම්බන්ධතා සහ නව ව්‍යාපෘති සඳහා පෙරනිමි ඛණ්ඩාංක පද්ධතිය වැනි පොදු සැකසුම් සැකසිය හැකිය.",
                "visual": "**Quick Tip:**<br>• Go to Settings -> Options -> General to change application language to English or other languages.",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "හඳුන්වාදීම to the Vector Data Model",
                "text": "දෛශික (Vector) දත්ත හඳුන්වාදීම. Vector දත්ත මඟින් පෘථිවියේ පිහිටීම් ඛණ්ඩාංක මඟින් නිරූපණය කරයි. ලක්ෂ්‍ය (Points), රේඛා (Lines) සහ බහුඅස්‍ර (Polygons) මඟින් සිතියම් අංග සලකුණු කෙරේ.",
                "visual": "**Vector Geometries:**<br>• Point: Single (X, Y) coordinate pair<br>• LineString: Sequence of connected coordinate points<br>• Polygon: Closed loop of boundary coordinate rings",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "හඳුන්වාදීම to the Raster Data Model",
                "text": "රාස්ටර් (Raster) දත්ත හඳුන්වාදීම. Raster දත්ත මඟින් දත්ත පෙන්වනුයේ කොටු ජාලයක් (pixels) ලෙසය. එක් පික්සෙලයක් තුල උන්නතාංශය, උෂ්ණත්වය වැනි අඛණ්ඩ අගයන් ගබඩා වේ.",
                "visual": "**Raster Structure:**<br>• Grid coordinates (Rows and Columns)<br>• Spatial Resolution (Pixel cell size, e.g. 30m Landsat)<br>• Bands (Spectral wavelengths)",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Understanding Attribute Tables",
                "text": "ආරෝපණ වගුව (Attribute Table) තේරුම් ගැනීම. Vector සිතියමක ඇති සෑම කොටසකටම අදාළ විස්තරාත්මක තොරතුරු Attribute Table හි ගබඩා වේ. එහි දත්ත වර්ග (ලියවිලි, සංඛ්‍යා) පැහැදිලිව වෙන් කර ඇත.",
                "visual": "**Attribute Properties:**<br>• Columns: Database fields (e.g. NAME, POP_EST)<br>• Rows: Features matching coordinates<br>• Field Types: Real (Float), Integer (Int), String (Text)",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Geospatial File Formats vs Database Storage",
                "text": "ගොනු සහ දත්ත සමුදායන් අතර වෙනස. අවකාශීය දත්ත shapefiles වැනි ගොනු ලෙස හෝ PostGIS වැනි දත්ත සමුදායන් තුල ගබඩා කළ හැකිය. දත්ත සමුදායන් විශාල දත්ත සහ බහු-පරිශීලක පද්ධති සඳහා යෝග්‍ය වේ.",
                "visual": "**Database Advantages:**<br>• Multi-user editing concurrency<br>• SQL Spatial index performance (R-Tree)<br>• Centralized database queries",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Managing Local Workspace Directories",
                "text": "ව්‍යාපෘති ගොනු කළමනාකරණය. සිතියම් ව්‍යාපෘතියක් ආරම්භ කිරීමට පෙර වෙනම ෆෝල්ඩරයක් සාදා, එහි `/raw_data`, `/output` ආදී ලෙස ගොනු වෙන්කර තැබීමෙන් වැඩ කටයුතු පහසු වේ.",
                "visual": "**Workspace Layout:**<br>• `/project_folder` -> Save `.qgz` here<br>• `/data` -> Place Shapefiles & DEMs here<br>• `/exports` -> Place final PDFs & images here",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Locating Free Open Geospatial Data",
                "text": "නොමිලේ අවකාශීය දත්ත ලබාගත හැකි ස්ථාන. සිතියම් සඳහා දත්ත ලබාගත හැකි ප්‍රධාන අඩවි ලෙස Natural Earth, USGS EarthExplorer, OpenStreetMap සහ දේශීය රාජ්‍ය වෙබ් අඩවි හැඳින්විය හැකිය.",
                "visual": "**Data Providers:**<br>• Natural Earth: `naturalearthdata.com`<br>• Satellite DEM: EarthExplorer / NASA ASTER<br>• Infrastructure: OSM Overpass API",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Metadata Standards in GIS Projects",
                "text": "GIS ව්‍යාපෘතිවල මෙටාදත්ත (Metadata). මෙටාදත්ත යනු දත්ත පිළිබඳ දත්තයි. එයින් දත්ත ලබාගත් ස්ථානය, නිවැරදිභාවය, සහ කර්තෘ අයිතිය ලේඛනගත කරයි.",
                "visual": "**Metadata Core Fields:**<br>• Abstract / Summary of layer purpose<br>• Coordinate projection lineage<br>• Usage restrictions & Citation rules",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Adding Your First Vector Layer (Shapefile)",
                "text": "පළමු Vector ස්ථරය (Shapefile) ඇතුලත් කිරීම. සිතියමකට Shapefile එකක් එක් කිරීමට Layer -> Add Layer -> Add Vector Layer වෙත ගොස් අදාළ `.shp` ගොනුව තෝරා Add ක්ලික් කරන්න.",
                "visual": "**Step-by-Step:**<br>1. Menu -> Layer -> Add Layer -> Add Vector Layer<br>2. Select File dataset type<br>3. Browse to `alaska.shp` -> Add -> Close",
                "download": {
                    "text": "ඇලස්කා නියැදි දත්ත කට්ටලය බාගන්න (ZIP, 3.2 MB)",
                    "url": "https://github.com/qgis/QGIS-Sample-Data/archive/master.zip"
                }
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Adding Your First Raster Layer (GeoTIFF)",
                "text": "පළමු Raster ස්ථරය (GeoTIFF) ඇතුලත් කිරීම. GeoTIFF රූපයක් සිතියමට එක් කිරීමට Layer -> Add Layer -> Add Raster Layer වෙත ගොස් අදාළ `.tif` ගොනුව තෝරාගන්න.",
                "visual": "**Optimizing Rasters:**<br>• Right-click raster -> Properties -> Pyramids<br>• Build pyramids to enable fast sub-sampling redraws at zoomed-out scales.",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "XYZ Tiles background connection (OSM)",
                "text": "පසුබිම් සිතියම් සබැඳි (OpenStreetMap XYZ). සිතියමට පසුබිම් වීදි සිතියමක් එක් කිරීමට Browser පැනලයේ XYZ Tiles මත right-click කර New Connection තෝරා OSM ලිපිනය ඇතුලත් කරන්න.",
                "visual": "**OSM XYZ Connection:**<br>• Name: OpenStreetMap<br>• URL: `https://tile.openstreetmap.org/{z}/{x}/{y}.png`",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Grouping Layers for Visual Cleanliness",
                "text": "දත්ත ස්ථර සමූහගත කිරීම (Grouping). Layers පැනලයේ ඇති දත්ත ප්‍රමාණය වැඩි වන විට ඒවා Group මඟින් වෙන් කර තැබීමෙන් පාලනය පහසු වේ.",
                "visual": "**Grouping Practice:**<br>1. Right-click Layers Panel -> Add Group<br>2. Label group 'Transport'<br>3. Drag highways and railways layers inside the group",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Measuring Distances and Areas in Map Canvas",
                "text": "දිග සහ වර්ගඵලය මැනීම. සිතියම් තලයේ ඇති වස්තූන් අතර දිග හෝ වර්ගඵලය මැනීමට Attributes මෙවලම් තීරුවේ ඇති Measure Tool එක භාවිත කරන්න.",
                "visual": "**Measurement Settings:**<br>• Distance units: Meters, Kilometers, Feet<br>• Ellipsoidal settings: Computes distances along Earth ellipsoid for accuracy",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Using Identify Features tool to inspect attributes",
                "text": "Identify Tool මඟින් තොරතුරු පරීක්ෂා කිරීම. සිතියමේ ඇති ඕනෑම වස්තුවක තොරතුරු බැලීමට Identify Features මෙවලම සක්‍රිය කර අදාළ වස්තුව මත ක්ලික් කරන්න.",
                "visual": "**Keyboard Shortcut:**<br>• Press `Ctrl + Shift + I`<br>• Select 'Auto-open form' to display attribute values in clean popups",
                "download": null
            },
            {
                "module": "මොඩියුලය 1",
                "moduleTitle": "QGIS හඳුන්වාදීම සහ GIS මූලික කරුණු",
                "title": "Module 1 Practical Assignment",
                "text": "මොඩියුලය 1 ප්‍රායෝගික පැවරුම. මොඩියුලය 1 සම්පූර්ණ කිරීමට ලබා දී ඇති ඇලස්කා දත්ත බාගත කර, OSM පසුබිම් සිතියම සමඟ සම්බන්ධ කර ව්‍යාපෘතිය `module1_setup.qgz` ලෙස සුරකින්න.",
                "visual": "**Assignment Goal:**<br>• Save project file with loaded shapefiles<br>• Setup OSM XYZ connection<br>• Ensure zero broken data paths on load",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "හඳුන්වාදීම to Module 2",
                "text": "මොඩියුලය 2 හඳුන්වාදීම. මෙම මොඩියුලයෙන් අපි දත්ත ගොනු වර්ග, අවකාශීය දත්ත සමුදායන්, වෙබ් සිතියම් සේවාවන් සහ ඛණ්ඩාංක පද්ධති පිළිබඳව අධ්‍යයනය කරමු.",
                "visual": "**Core focus:**<br>• Shapefiles vs GeoPackage<br>• Georeferencing maps<br>• Coordinate systems (CRS)",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "The ESRI Shapefile: Legacy and Limits",
                "text": "ESRI Shapefile ආකෘතියේ සීමාවන්. Shapefile යනු බහුලව භාවිත වන ආකෘතියක් වුවද එහි නම අකුරු 10 කට සීමා වීම සහ උපරිම ධාරිතාව 2 GB වීම වැනි සීමාවන් පවතී.",
                "visual": "**Shapefile Siblings:**<br>• `.shp`: Stores geometries<br>• `.dbf`: Stores attribute table databases<br>• `.shx`: Index file between geometry and attributes",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "The OGC GeoPackage: The Modern Standard",
                "text": "GeoPackage ආකෘතිය: නූතන සම්මතය. GeoPackage යනු තනි ගොනුවක් ලෙස සියලුම vector, raster සහ ව්‍යාපෘති තොරතුරු ගබඩා කළ හැකි නවීන විවෘත කේත ආකෘතියකි.",
                "visual": "**GeoPackage Benefits:**<br>• Single file container (.gpkg)<br>• Unlimited file size limits (relies on filesystem)<br>• Supports spatial indexes natively",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "The GeoJSON format for web mapping",
                "text": "වෙබ් සිතියම්කරණය සඳහා GeoJSON ආකෘතිය. GeoJSON යනු අන්තර්ජාල සිතියම් සඳහා භාවිත වන ලියවිලි (Text) මත පදනම් වූ දත්ත ආකෘතියකි.",
                "visual": "**Sample GeoJSON Element:**<br><code>{ \"type\": \"Feature\", \"geometry\": { \"type\": \"Point\", \"coordinates\": [80.1, 6.2] } }</code>",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "GPX Formats for GPS Track Logs",
                "text": "GPS දත්ත හුවමාරු (GPX) ආකෘතිය. GPX යනු GPS උපකරණ අතර මඟ සලකුණු (waypoints) සහ ගමන් මාර්ග (tracks) හුවමාරු කිරීමට භාවිත වන XML ආකෘතියකි.",
                "visual": "**Importing GPX:**<br>1. Menu -> Layer -> Add Layer -> Add Vector Layer<br>2. Select GPX file<br>3. Choose sub-layers: waypoints, tracks",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Connecting to Spatial Databases",
                "text": "අවකාශීය දත්ත සමුදායන් (Spatial Databases). PostGIS යනු PostgreSQL සමඟ ක්‍රියා කරන ප්‍රධාන අවකාශීය දත්ත සමුදායයි. එය මඟින් දත්ත කෝටි ගණනක් ක්ෂණිකව පෙරීමට හැකියාව ලැබේ.",
                "visual": "**Database Connection Steps:**<br>1. Browser panel -> Right-click PostgreSQL -> New Connection<br>2. Input Host, Port, Database name, Username, Password<br>3. Test connection -> Add to project",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Understanding SpatiaLite databases",
                "text": "SpatiaLite දත්ත සමුදාය. SpatiaLite යනු SQLite සඳහා වන අවකාශීය දිගුවයි. සර්වර් නොමැතිව පරිගණකය තුලම SQL කේත මඟින් දත්ත හැසිරවීමට මෙයින් මඟ පෑදේ.",
                "visual": "**SpatiaLite Practice:**<br>• Create SpatiaLite database directly via Browser panel<br>• Drag layers inside to perform SQL queries",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Web Map Services: WMS and WMTS",
                "text": "WMS සහ WMTS වෙබ් සිතියම් සේවා. WMS මඟින් සර්වරයක ඇති සිතියම් රූප (images) ලෙස QGIS වෙත එවන අතර WMTS මඟින් ඒවා කලින් සකසා වේගයෙන් ලබා දෙයි.",
                "visual": "**Connecting to WMS:**<br>• Browser -> WMS/WMTS -> New Connection<br>• Paste WMS URL -> Connect -> Add layer to canvas",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Web Feature Services: WFS and WCS",
                "text": "WFS සහ WCS වෙබ් දත්ත සේවා. WFS මඟින් සර්වරයේ ඇති සැබෑ Vector ඛණ්ඩාංක බාගත කිරීමට ඉඩ සලසන අතර WCS මඟින් Raster දත්තවල අගයන් එලෙසම ලබා දෙයි.",
                "visual": "**WFS Advantage:**<br>• Downloads real coordinates<br>• Allows attribute selection and local vector editing",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Importing Delimited Text Files (CSV)",
                "text": "CSV දත්ත ඇතුලත් කිරීම. X සහ Y ඛණ්ඩාංක සහිත CSV ගොනු ඇතුලත් කිරීමට Layer -> Add Layer -> Add Delimited Text Layer වෙත ගොස් X සඳහා Longitude ද Y සඳහා Latitude ද තෝරන්න.",
                "visual": "**CSV Import Check:**<br>• Geometry definition: Point coordinates<br>• Coordinate System: Typically EPSG:4326 (WGS 84 GPS)",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Geocoding Addresses into Spatial Points",
                "text": "ලිපිනයන් සිතියම්ගත කිරීම (Geocoding). Geocoding යනු ලිපිනයන් (Text) සිතියමේ පිහිටන ලක්ෂ්‍ය (X, Y) බවට හැරවීමේ ක්‍රියාවලියයි.",
                "visual": "**Geocoding Plugins:**<br>• MMQGIS (Uses Nominatim/OSM)<br>• OSM Place Search panel<br>• Google/Stripe API connectors",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "The Georeferencer Tool: Theory",
                "text": "භූ-සබැඳි කිරීම (Georeferencing) මූලධර්මය. Georeferencing යනු ඛණ්ඩාංක නොමැති පැරණි සිතියමක් හෝ රූපයක් සැබෑ ඛණ්ඩාංක පද්ධතියකට ගැලපීමේ ක්‍රියාවලියයි.",
                "visual": "**Warp Mechanics:**<br>• GCP (Ground Control Points) placement<br>• Coordinate matching with active reference base layers",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Georeferencer Transformation Settings",
                "text": "පරිවර්තන සැකසුම් (Transformation Settings). Georeferencing කිරීමේදී පරිවර්තන ක්‍රමය (Linear, Polynomial) සහ resampling ක්‍රමය තේරීම වැදගත් වේ.",
                "visual": "**Residual Error Check:**<br>• Target a low Target Mean Error (RMS)<br>• Add at least 4 GCPs for Linear, 6 for Polynomial 1",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Warping Georeferenced Rasters Practical",
                "text": "ප්‍රායෝගික Georeferencing පියවර. Layer -> Georeferencer වෙත ගොස් පින්තූරය එක්කර සැබෑ සිතියමේ ලක්ෂ්‍ය තෝරා ඛණ්ඩාංක ලබා දී Start ක්ලික් කරන්න.",
                "visual": "**Workflow Check:**<br>1. Add GCP control points<br>2. Select EPSG target system<br>3. Execute and verify alignment on map canvas",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "හඳුන්වාදීම to Geodesy",
                "text": "භූ-මිනුම් විද්‍යාව (Geodesy) හැඳින්වීම. පෘථිවිය පරිපූර්ණ ගෝලයක් නොවන බැවින් එහි හැඩය නිරූපණය කිරීමට ඉලිප්සයිඩ (ellipsoids) සහ දත්ත පදනම් (datums) භාවිත වේ.",
                "visual": "**Models of Earth:**<br>• Geoid: Actual gravitational shape of Earth<br>• Ellipsoid: Mathematical projection approximation (e.g. WGS 84)",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Geographic vs Projected CRS",
                "text": "භූගෝලීය සහ ප්‍රක්ෂේපිත ඛණ්ඩාංක පද්ධති. GCS මඟින් පිහිටීම් අංශක (degrees) වලින් මනින අතර PCS මඟින් තල මතුපිටක මීටර් (meters) වලින් මනිනු ලැබේ.",
                "visual": "**CRS Metric Units:**<br>• GCS: Latitude / Longitude (Angular degrees)<br>• PCS: Easting / Northing (Metric / Imperial linear measurements)",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Understanding Map Projections & Distortions",
                "text": "සිතියම් ප්‍රක්ෂේපණය සහ විකෘති වීම්. ත්‍රිමාණ පෘථිවිය ද්විමාන සිතියමකට හැරවීමේදී හැඩය, වර්ගඵලය, දුර හෝ දිශාව යන එකක් හෝ විකෘති වේ.",
                "visual": "**Conformal vs Equal Area:**<br>• Conformal: Preserves local shapes (e.g. Mercator)<br>• Equal Area: Preserves relative areas (e.g. Albers Equal Area)",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Demystifying EPSG Codes",
                "text": "EPSG කේත තේරුම් ගැනීම. EPSG කේත යනු විවිධ ඛණ්ඩාංක පද්ධති හඳුනා ගැනීමට භාවිත වන සම්මත අංකයන් වේ. එමඟින් CRS සැකසීම පහසු වේ.",
                "visual": "**Crucial Codes:**<br>• EPSG:4326 -> WGS 84 Geographic<br>• EPSG:3857 -> WGS 84 Web Mercator",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Universal Transverse Mercator (UTM)",
                "text": "UTM (Universal Transverse Mercator) පද්ධතිය. UTM මඟින් ලෝකය අංශක 6 බැගින් වූ කලාප (Zones) 60 කට බෙදා මීටර් වලින් මිනුම් ලබා ගැනීමට ඉඩ සලසයි.",
                "visual": "**Sri Lanka UTM Zone:**<br>• Sri Lanka falls into **UTM Zone 44N** (Northern Hemisphere)<br>• Standard projected system for local metric tasks",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Sri Lankan Local Projections",
                "text": "ශ්‍රී ලංකාවේ දේශීය ප්‍රක්ෂේපණ පද්ධති. ශ්‍රී ලංකාවේ මිනුම් කටයුතු සඳහා Kandawala datum සහ නවීන ශ්‍රී ලංකා Datum 1999 (SLD99 - EPSG:5224) භාවිත වේ.",
                "visual": "**EPSG Codes for Sri Lanka:**<br>• SLD99 / Sri Lanka Grid (EPSG:5224)<br>• Kandawala / Sri Lanka Grid (EPSG:5223)\n<div class=\"table-widget\" style=\"margin-top: 15px; overflow-x: auto;\">\n    <table style=\"width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: left; border: 1px solid rgba(255,255,255,0.06);\">\n        <thead>\n            <tr style=\"background: rgba(16, 185, 129, 0.08); border-bottom: 1px solid rgba(16, 185, 129, 0.2);\">\n                <th style=\"padding: 6px;\">EPSG Code</th>\n                <th style=\"padding: 6px;\">CRS Name</th>\n                <th style=\"padding: 6px;\">Units</th>\n                <th style=\"padding: 6px;\">Type</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr style=\"border-bottom: 1px solid rgba(255,255,255,0.03);\">\n                <td style=\"padding: 6px; font-weight:700; color: var(--accent-emerald);\">4326</td>\n                <td style=\"padding: 6px;\">WGS 84 Geographic</td>\n                <td style=\"padding: 6px;\">Degrees</td>\n                <td style=\"padding: 6px;\">GPS Standard</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid rgba(255,255,255,0.03);\">\n                <td style=\"padding: 6px; font-weight:700; color: var(--accent-emerald);\">3857</td>\n                <td style=\"padding: 6px;\">WGS 84 / Web Mercator</td>\n                <td style=\"padding: 6px;\">Meters</td>\n                <td style=\"padding: 6px;\">Web Tiles (OSM)</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid rgba(255,255,255,0.03);\">\n                <td style=\"padding: 6px; font-weight:700; color: var(--accent-emerald);\">32644</td>\n                <td style=\"padding: 6px;\">UTM Zone 44N</td>\n                <td style=\"padding: 6px;\">Meters</td>\n                <td style=\"padding: 6px;\">Projected (Local)</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Project CRS vs Layer CRS",
                "text": "ව්‍යාපෘති CRS සහ ස්ථර CRS. දත්ත ස්ථරවලට තමන්ගේම ඛණ්ඩාංක පද්ධතියක් (Layer CRS) ඇති අතර, ව්‍යාපෘතියටද ඛණ්ඩාංක පද්ධතියක් (Project CRS) ඇත.",
                "visual": "**OTF Rendering:**<br>• On-the-fly projection aligns layers visually<br>• Does NOT modify the raw coordinate values in the file database",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "How to permanently reproject layers",
                "text": "ස්ථරයක CRS පද්ධතිය ස්ථිරවම වෙනස් කිරීම. විශ්ලේෂණ කටයුතු සඳහා දත්ත එකම CRS එකකට තිබිය යුතුය. මේ සඳහා Export -> Save Features As මඟින් වෙනස් කළ යුතුය.",
                "visual": "**Reprojection Steps:**<br>1. Right-click layer -> Export -> Save Features As<br>2. Select GeoPackage format<br>3. Set CRS to UTM Zone 44N (EPSG:32644) or SLD99 (EPSG:5224)",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Troubleshooting Coordinate Misalignments",
                "text": "ඛණ්ඩාංක නොගැලපීම් නිරාකරණය. දත්ත ස්ථරයක් වැරදි ස්ථානයක පෙන්වන්නේ නම් එහි CRS සැකසුම් වැරදිය. Layer CRS -> Set Layer CRS මඟින් නිවැරදි CRS එක ලබා දෙන්න.",
                "visual": "**Correction Rule:**<br>• Use **Set Layer CRS** to assign missing metadata coordinates<br>• Use **Reproject Layer** to calculate new coordinates on map projection change",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Converting Vector to Raster (Rasterize)",
                "text": "Vector දත්ත Raster බවට හැරවීම (Rasterize). Vector දත්ත (ලක්ෂ්‍ය, රේඛා) Raster පික්සෙල් බවට හැරවීමට Raster -> Conversion -> Rasterize වෙත යන්න.",
                "visual": "**Parameter Check:**<br>• Output raster resolution units: Georeferenced units (meters)<br>• Select attribute field containing numerical values for raster values",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Converting Raster to Vector (Polygonize)",
                "text": "Raster දත්ත Vector බවට හැරවීම (Polygonize). Raster පික්සෙල් බහුඅස්‍ර (Polygons) බවට හැරවීමට Raster -> Conversion -> Polygonize වෙත යන්න.",
                "visual": "**Execution Parameters:**<br>• Input raster band (e.g. Band 1)<br>• Output field name (typically 'DN')",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Working with Digital Elevation Models (DEM)",
                "text": "ඩිජිටල් උන්නතාංශ ආකෘති (DEM) සමඟ වැඩ කිරීම. DEM යනු පොළවේ උස මට්ටම නිරූපණය කරන Raster දත්ත වර්ගයකි. බෑවුම් (Slope) සහ සමෝච්ඡ රේඛා (Contours) සෑදීමට මෙය භාවිත වේ.",
                "visual": "**DEM Datasets:**<br>• SRTM (Shuttle Radar Topography Mission, 30m resolution)<br>• ASTER Global DEM",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Multi-band Remote Sensing Imagery",
                "text": "බහු-කලාපීය චන්ද්‍රිකා රූප (Multi-band Imagery). චන්ද්‍රිකා රූප විවිධ ආලෝක කලාප (bands) ලෙස ගබඩා වේ. properties -> Symbology හිදී මේවා රතු, කොළ, නිල් (RGB) ලෙස සංකලනය කළ හැකිය.",
                "visual": "**Band Configurations (Sentinel-2):**<br>• Natural Color (True Color): Red=Band 4, Green=Band 3, Blue=Band 2<br>• False Color (Vegetation): Red=Band 8, Green=Band 4, Blue=Band 3",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Downloading Satellite Data from USGS EarthExplorer",
                "text": "USGS EarthExplorer වෙතින් දත්ත බාගත කිරීම. චන්ද්‍රිකා රූප නොමිලේ බාගත කිරීමට `earthexplorer.usgs.gov` වෙත ගොස්, ප්‍රදේශය සහ කාලසීමාව තෝරා Landsat හෝ Sentinel දත්ත බාගත කරන්න.",
                "visual": "**Search Filters:**<br>• Date Range: Seasonal filters<br>• Cloud Cover: Lower than 10% to ensure image clarity",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Fixing Invalid Geometry Errors",
                "text": "දෛශික ජ්‍යාමිතික දෝෂ නිරාකරණය. බහුඅස්‍ර එකිනෙක ඡේදනය වන විට දෝෂ ඇති විය හැකිය. Processing Toolbox හි ඇති **Fix Geometries** මෙවලම මඟින් ඒවා ස්වයංක්‍රීයව නිවැරදි කරයි.",
                "visual": "**Topology Errors:**<br>• Self-intersection (polygon boundary crosses itself)<br>• Duplicate nodes and duplicate segments",
                "download": null
            },
            {
                "module": "මොඩියුලය 2",
                "moduleTitle": "අවකාශීය දත්ත මූලාශ්‍ර, ආකෘති සහ ඛණ්ඩාංක පද්ධති",
                "title": "Module 2 Practical Assignment",
                "text": "මොඩියුලය 2 ප්‍රායෝගික පැවරුම. ලබා දී ඇති CSV දත්ත ඇතුලත් කර OSM සිතියම සමඟ ගලපන්න. ඉන්පසු එම දත්ත ස්ථරය UTM zone 44N (EPSG:32644) පද්ධතියට reproject කර `module2_crs.qgz` ලෙස සුරකින්න.",
                "visual": "**Assignment Checklist:**<br>• Load CSV point data successfully<br>• Convert GCS coordinates to PCS meters projection<br>• Export reprojected layer as GeoPackage",
                "download": {
                    "text": "ප්‍රායෝගික පරිපාලන සීමා දත්ත කට්ටලය බාගන්න (ZIP, 1.8 MB)",
                    "url": "https://github.com/qgis/QGIS-Sample-Data/archive/master.zip"
                }
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "හඳුන්වාදීම to Module 3",
                "text": "මොඩියුලය 3 හඳුන්වාදීම. සිතියම් නිර්මාණය යනු විද්‍යාව සහ කලාව යන දෙකෙහිම එකතුවකි. මෙම මොඩියුලයෙන් සිතියම් වර්ණ ගැන්වීම්, උන්නතාංශ දෘශ්‍යකරණය සහ පැහැදිලි ලේබල් එකතු කිරීම ඉගෙන ගනිමු.",
                "visual": "**Key topics:**<br>• Symbology classification<br>• Raster rendering (DEMs)<br>• Map labeling engine\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/QGIS_සිතියම්_දෘශ්_යකරණය.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> QGIS සිතියම් දෘශ්‍යකරණය (Map Visualization & Symbology)\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Principles of Cartographic Design",
                "text": "සිතියම් විද්‍යාත්මක සැලසුම් මූලධර්ම. සිතියම කියවන කෙනෙකුට එහි අරමුණ වහාම වැටහෙන සේ සැලසුම් කළ යුතුය. මේ සඳහා වර්ණ ගැලපීම, අකුරු ප්‍රමාණයන් සහ දෘශ්‍ය ශ්‍රේණිගත කිරීම් භාවිත කළ යුතුය.",
                "visual": "**Cartographic Design Rules:**<br>• Visual Hierarchy: High-priority data stands out<br>• Simplicity: Avoid background clutter<br>• Color Harmony: Match colors to thematic meanings (e.g. blue for water)\n<div class=\"palette-widget\" style=\"margin-top: 15px; background: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.04); padding: 12px; border-radius: 8px; text-align: left;\">\n    <span style=\"font-weight: 700; font-size: 0.85rem; color: var(--accent-emerald); display: block; margin-bottom: 8px;\"><i class=\"fa-solid fa-palette\"></i> Cartographic Symbology Types</span>\n    <div style=\"display: flex; gap: 8px; flex-wrap: wrap;\">\n        <div style=\"flex: 1; min-width: 80px; background: rgba(29, 191, 115, 0.1); border: 1px solid rgba(29, 191, 115, 0.2); padding: 6px; border-radius: 4px; font-size: 0.72rem; text-align: center;\">\n            <strong>Single Symbol</strong><br>Uniform styling\n        </div>\n        <div style=\"flex: 1; min-width: 80px; background: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.2); padding: 6px; border-radius: 4px; font-size: 0.72rem; text-align: center;\">\n            <strong>Categorized</strong><br>Qualitative columns\n        </div>\n        <div style=\"flex: 1; min-width: 80px; background: rgba(255, 179, 0, 0.1); border: 1px solid rgba(255, 179, 0, 0.2); padding: 6px; border-radius: 4px; font-size: 0.72rem; text-align: center;\">\n            <strong>Graduated</strong><br>Quantitative bins\n        </div>\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Configure Layer Symbology",
                "text": "ස්ථර වර්ණ ගැන්වීම් (Symbology). Layer Properties හි ඇති Symbology ටැබය මඟින් වර්ණ ගැන්වීමට අවශ්‍ය ක්‍රම (Single Symbol, Categorized, Graduated) තෝරාගත හැකිය.",
                "visual": "**Symbology Path:**<br>• Right-click Layer -> Properties -> Symbology<br>• Toggle render options based on field columns",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Color Theory in Cartography",
                "text": "සිතියම්කරණයේ වර්ණ භාවිතය. සිතියම් සඳහා ප්‍රධාන වර්ණ රටා තුනක් භාවිත වේ: Qualitative (විවිධ වර්ග සඳහා විවිධ වර්ණ), Sequential (අගය වැඩි වන විට වර්ණය තද වීම), සහ Diverging (මධ්‍යස්ථ අගයකින් දෙපසට වර්ණ බෙදී යාම).",
                "visual": "**Theme Matching:**<br>• Soil / Geology: Qualitative colors<br>• Population / Income: Sequential gradients<br>• Temperature anomaly / Election: Diverging color ramps",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "ColorBrewer integration in QGIS",
                "text": "QGIS හි ColorBrewer භාවිතය. QGIS හි ඇති ColorBrewer මඟින් සිතියම් වර්ණ ගැන්වීම සඳහා විවිධ වර්ණ රටාවන් (Color Ramps) පහසුවෙන් තෝරා ගැනීමට ඉඩ සලසයි.",
                "visual": "**Selecting Color Ramp:**<br>• Properties -> Symbology -> Color Ramp -> ColorBrewer options<br>• Filter for Colorblind-friendly palettes",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Categorized Symbology for Nominal Data",
                "text": "කාණ්ඩ අනුව වර්ණ ගැන්වීම (Categorized Symbology). ගුණාත්මක දත්ත (soil types, landuse) සඳහා මෙය භාවිත වේ. properties -> Symbology හිදී Categorized තෝරා, තීරුව (column) ලබා දී Classify ක්ලික් කරන්න.",
                "visual": "**Categorized Styling Practice:**<br>1. Value: `landuse`<br>2. Color Ramp: Random Colors / Pastel<br>3. Click Classify -> Click Apply",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Graduated Symbology for Quantitative Data",
                "text": "පන්ති අනුව වර්ණ ගැන්වීම (Graduated Symbology). සංඛ්‍යාත්මක දත්ත (ජනගහනය, ආදායම) සඳහා මෙය භාවිත වේ. properties -> Symbology හිදී Graduated තෝරා, තීරුව (column) ලබා දී වර්ණ රටාවක් තෝරන්න.",
                "visual": "**Graduated Configuration:**<br>• Value: `pop_density`<br>• Color Ramp: Oranges / Viridis<br>• Choose classification method and classes (e.g. 5 classes)",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Data Classification: Equal Interval & Quantiles",
                "text": "සංඛ්‍යාත්මක දත්ත බෙදීමේ ක්‍රම: Equal Interval සහ Quantile. Equal Interval මඟින් පන්ති පරාස සමානව බෙදන අතර Quantile මඟින් එක් පන්තියක තිබිය යුතු වස්තූන් ප්‍රමාණය සමානව බෙදා දක්වයි.",
                "visual": "**Comparison:**<br>• Equal Interval: Classes are mathematically uniform but features may gather in single classes.<br>• Quantile: Visually balanced map, but features with huge difference in values are grouped together.",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Data Classification: Jenks Natural Breaks",
                "text": "Jenks Natural Breaks වර්ගීකරණ ක්‍රමය. මෙය සිතියම්කරණයේ බහුලව භාවිත වන ක්‍රමයයි. එය මඟින් දත්ත විසිරීම් සලකා බලා පන්ති අතර වෙනස උපරිම වන ලෙසත් පන්තිය තුල ඇති වෙනස අවම වන ලෙසත් දත්ත පන්ති සාදයි.",
                "visual": "**Jenks Rule of Thumb:**<br>• Select Natural Breaks (Jenks) for general population or economic datasets.<br>• Keep class count to 5 or 6 for human scanning legibility.",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Rule-Based Symbology for Complex Styling",
                "text": "කොන්දේසි මත පදනම්ව වර්ණ ගැන්වීම (Rule-Based Symbology). මෙය මඟින් ප්‍රකාශන (expressions) ලියා විවිධ කොන්දේසි යටතේ වස්තූන් වර්ණ ගැන්විය හැකිය (උදා. ජනගහනය > 100,000 සහ අවදානම ඉහළ නම් රතු පැහැයෙන්).",
                "visual": "**Rule-based Example:**<br>• Rule 1: `\"risk\" = 'High' AND \"population\" > 50000` -> Red color<br>• Rule 2: `\"risk\" = 'Low'` -> Green color",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Point Displacement and Point Cluster Styles",
                "text": "ලක්ෂ්‍ය විස්ථාපනය සහ සමූහගත කිරීම (Point Displacement & Clustering). ලක්ෂ්‍ය කිහිපයක් එකම ස්ථානයක පිහිටන විට ඒවා පැහැදිලිව පෙන්වීමට Point Displacement (වටකුරුව පැතිරවීම) හෝ Clustering (ලක්ෂ්‍ය ගණන ලේබල් කිරීම) භාවිත කරයි.",
                "visual": "**Clustering Setup:**<br>• Symbology drop-down -> Point Cluster<br>• Style center marker and configure the count font size",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Creating Map Heatmaps (Kernel Density)",
                "text": "උණුසුම් කලාප සිතියම්කරණය (Heatmaps). ලක්ෂ්‍ය බහුලව ඇති ස්ථාන (crime hotspots) දෘශ්‍යමාන කිරීමට Heatmap ක්‍රමය භාවිත වේ. මෙහිදී සෙවුම් අරය (radius) සහ වර්ණ රටාව සැකසිය යුතුය.",
                "visual": "**Heatmap Configuration:**<br>• Symbology -> Heatmap<br>• Radius: 15 millimeters (Map canvas scale-dependent)<br>• Color Ramp: Magma / Inferno",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Styling Singleband Gray Raster Layers",
                "text": "රාස්ටර් Grayscale වර්ණ ගැන්වීම. ඩිජිටල් උන්නතාංශ සිතියම් (DEM) සාමාන්‍යයෙන් කළු සහ සුදු (grayscale) ලෙස පැමිණේ. මෙහි properties -> Symbology හිදී Min/Max අගයන් සකසා වෙනස (contrast) වැඩි කළ හැකිය.",
                "visual": "**Grayscale settings:**<br>• Color gradient: Black to White / White to Black<br>• Contrast Enhancement: Stretch to MinMax",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Styling Singleband Pseudocolor Raster Layers",
                "text": "රාස්ටර් Pseudocolor වර්ණ ගැන්වීම. DEM සිතියම් වර්ණවත් ලෙස පෙන්වීමට Singleband pseudocolor ක්‍රමය තෝරා Terrain වැනි වර්ණ රටාවක් භාවිත කළ හැකිය.",
                "visual": "**Step-by-Step:**<br>1. Properties -> Symbology -> Change dropdown to 'Singleband pseudocolor'<br>2. Select 'Terrain' from Color Ramp dropdown<br>3. Click Classify -> Click Apply",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Generating Terrain Hillshade Views",
                "text": "ත්‍රිමාණ කඳු සෙවණැලි දෘශ්‍යකරණය (Hillshade). මතුපිට කඳු හෙල්වල සෙවණැලි පෙන්වීමට Hillshade ක්‍රමය භාවිත වේ. මෙහිදී සූර්ය කෝණය (Azimuth) සහ උස (Altitude) සැකසිය හැකිය.",
                "visual": "**Standard Illumination Parameters:**<br>• Azimuth: 315 degrees (North-West light source matches human vision)<br>• Altitude: 45 degrees",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Generating Raster Contour Lines",
                "text": "සමෝච්ඡ රේඛා (Contours) ජනනය කිරීම. DEM රූපයකින් සමෝච්ඡ රේඛා සෑදීමට Raster -> Extraction -> Contour වෙත ගොස් පරතරය (interval) මීටර් 10 ක් හෝ 50 ක් ලෙස ලබා දෙන්න.",
                "visual": "**Contour Parameters:**<br>• Interval between contour lines: 20 meters<br>• Attribute field name: 'ELEV' (stores height values)",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Visualizing 3D Map views in QGIS",
                "text": "QGIS හි ත්‍රිමාණ (3D) සිතියම්කරණය. ත්‍රිමාණ දර්ශනයක් ලබා ගැනීමට View -> 3D Map Views -> New 3D Map View වෙත යන්න. එහිදී Terrain සඳහා උන්නතාංශ DEM ස්ථරය ලබා දී සිතියම ඇල කරන්න (Tilt).",
                "visual": "**3D Scene Settings:**<br>• Terrain type: DEM raster layer<br>• Vertical exaggeration: 1.5 (enhances terrain peaks visually)",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Adding Text Labels to Map Features",
                "text": "ලේබල් (Labels) එකතු කිරීම. සිතියමේ වස්තූන්වල නම් පෙන්වීමට properties -> Labels වෙත ගොස් Single Labels තෝරා, අදාළ දත්ත තීරුව (Value) ලබා දෙන්න.",
                "visual": "**Standard Label Setup:**<br>• Label dropdown: Single Labels<br>• Value field: `\"NAME\"` or `\"city_name\"`",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Formatting Label Font and Style",
                "text": "ලේබල් අකුරු හැඩතල ගැන්වීම. ලේබල් පැහැදිලිව පෙනීම සඳහා Labels -> Text වෙත ගොස් අකුරු වර්ගය (Font), ප්‍රමාණය (Size) සහ වර්ණය (Color) වෙනස් කරන්න.",
                "visual": "**Typography Tips:**<br>• Use sans-serif fonts for web layouts<br>• Bold key labels like cities or capitals for visual dominance",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Adding Label Text Buffers (Halos)",
                "text": "ලේබල් පසුබිම් වළලු (Buffers). සිතියමක පසුබිම වර්ණවත් වන විට ලේබලයට පසුබිම් වළල්ලක් (Buffer) එක් කිරීමෙන් අකුරු කියවීම පහසු වේ.",
                "visual": "**Buffer Settings:**<br>• Check: 'Draw text buffer'<br>• Size: 1.0 to 1.5 millimeters<br>• Color: Contrast with text (e.g. White buffer for Black text)",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Setting Label Placement and Orientation",
                "text": "ලේබල් පිහිටීම් සැකසීම. Labels -> Placement වෙත ගොස් ලේබල් පිහිටන ස්ථානය සකසන්න. රේඛා (rivers) සඳහා Curved (වක්‍රව) හෝ Parallel (සමාන්තරව) තෝරාගත හැකිය.",
                "visual": "**Placement options:**<br>• Point: Cartographic offset (most aesthetic)<br>• Line: Curved (follows roads/rivers curvature)<br>• Polygon: Around centroid / Horizontal only",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Preventing Label Collisions and Overlaps",
                "text": "ලේබල් ගැටීම් වැළැක්වීම. QGIS හි ඇති ලේබල් එන්ජිම මඟින් නම් එකිනෙක මත වැටීම වළක්වයි. Labels -> Rendering වෙතින් ලේබල් කිරීමේ ප්‍රමුඛතා (Priority) සකස් කළ හැකිය.",
                "visual": "**Rendering Engine Rules:**<br>• Priority slider: Move to 'High' to prioritize capitals or key features.<br>• Uncheck 'Show all labels' to keep maps readable.",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Scale-Dependent Symbology & Labeling",
                "text": "පරිමාණය මත පදනම්ව දත්ත දර්ශනය කිරීම. සිතියම කුඩා (zoom out) කළ විට අනවශ්‍ය දත්ත සැඟවීමට properties -> Rendering හිදී පරිමාණ සීමාවන් (Scale limits) සැකසිය හැකිය.",
                "visual": "**Scale Denominators:**<br>• Minimum Visibility Scale: e.g. 1:50,000 (disappears when zoomed out)<br>• Maximum Visibility Scale: e.g. 1:1,000 (disappears when zoomed in too close)",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Working with Symbol Libraries & SVGs",
                "text": "සංකේත පුස්තකාලය සහ SVG භාවිතය. QGIS හි ඇති සරල සංකේත වෙනුවට Properties -> Symbology -> Simple Marker වෙතින් SVG Marker තෝරා බාහිර පින්තූර සිතියම් ලකුණු ලෙස භාවිත කළ හැකිය.",
                "visual": "**Custom Icon Import:**<br>• Use SVG scale settings to prevent image pixelation<br>• Keep path vectors clean for fast viewport canvas redrawing",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Dynamic Map Legend Configuration",
                "text": "සිතියම් සූචි (Legend) සැකසීම. properties -> Legend වෙතින් සූචියේ පෙන්වන ලේබල සැකසිය හැකිය. Print Layout හිදී 'Auto Update' අක්‍රිය කර අනවශ්‍ය සූචි කොටස් ඉවත් කිරීමටද හැකිය.",
                "visual": "**Legend Cleanliness:**<br>• Hide layers that do not add analytical value<br>• Rename raw database field labels to plain English/Sinhala titles",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Using Blending Modes for Visual Effects",
                "text": "ස්ථර මිශ්‍රණ මාදිලි (Blending Modes). ස්ථර දෙකක වර්ණ එකිනෙක මිශ්‍ර කර පෙන්වීමට Layer Rendering -> Blending Mode වෙත යන්න (උදා. Multiply, Overlay).",
                "visual": "**Draping Elevation Over Hillshade:**<br>1. Place elevation raster layer above hillshade layer<br>2. Set elevation layer Blending Mode to **Multiply**<br>3. Verify 3D texture rendering effect",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Using Geometry Generators for Styling",
                "text": "Geometry Generators භාවිතය. සැබෑ ඛණ්ඩාංක වෙනස් නොකර සිතියමේ වස්තූන් මඟින් නව ජ්‍යාමිතික හැඩතල (buffers, centroids) සාදා වර්ණ ගැන්වීමට මෙය භාවිත වේ.",
                "visual": "**Generator Expression Examples:**<br>• Find center: <code>centroid($geometry)</code><br>• Draw dynamic buffer: <code>buffer($geometry, 100)</code>",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Creating Map Drop Shadows and Glows",
                "text": "සිතියම් අංග සඳහා සෙවණැලි එකතු කිරීම (Draw Effects). සිතියමක ප්‍රධාන සීමාවන් කැපී පෙනීමට Symbology හි ඇති **Draw Effects** වෙතින් සෙවණැලි (Drop Shadow) හෝ බාහිර දීප්තියක් (Outer Glow) එක් කරන්න.",
                "visual": "**Aesthetic Parameters:**<br>• Drop shadow offset: X=1.0mm, Y=1.0mm<br>• Shadow opacity: 40% (keep it subtle)",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Creating Flow and Direction Maps",
                "text": "ගමනාගමන සහ දිශා සිතියම් (Flow Maps). ජල ගැලීම් හෝ ප්‍රවාහන දිශාවන් පෙන්වීමට රේඛීය ස්ථර (lines) සඳහා Arrow හෝ Line marker වර්ණ ගැන්වීම් භාවිත කරන්න.",
                "visual": "**Arrow Placement:**<br>• Geometry generator: Arrow line configuration<br>• Set arrows to display on last vertex only for direction pointers",
                "download": null
            },
            {
                "module": "මොඩියුලය 3",
                "moduleTitle": "සිතියම් දෘශ්‍යකරණය, සිතියම් විද්‍යාව සහ වර්ණ ගැන්වීම්",
                "title": "Module 3 Practical Assignment",
                "text": "මොඩියුලය 3 ප්‍රායෝගික පැවරුම. මොඩියුලය 2 හි සැකසූ දත්ත භාවිතයෙන්, භූමි පරිහරණ කාණ්ඩ වර්ණ ගන්වන්න, ජනගහන දත්ත සඳහා Jenks වර්ගීකරණය යොදන්න, ලේබල් සඳහා white buffer එක්කර ව්‍යාපෘතිය සුරකින්න.",
                "visual": "**Assignment Goals:**<br>• Categorized soil/land-use vector style<br>• Graduated Jenks breaks on demographic polygons<br>• Export styled layers as `.qml` template files",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "හඳුන්වාදීම to Module 4",
                "text": "මොඩියුලය 4 හඳුන්වාදීම. GIS යනු දත්ත සමුදායකි. මෙම මොඩියුලයෙන් අපි Attribute Tables කළමනාකරණය, ගණිතමය ප්‍රකාශන ලිවීම, වගු එකිනෙක සම්බන්ධ කිරීම, සහ අවකාශීය විශ්ලේෂණ ක්‍රමවේද අධ්‍යයනය කරමු.",
                "visual": "**Key elements:**<br>• Field Calculator formulas<br>• Geoprocessing overlay tools<br>• Table joins\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/QGIS_ප්_රකාශන_භාවිතය.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> QGIS ප්‍රකාශන භාවිතය (Attributes & Expressions)\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Sorting and Filtering Attribute Tables",
                "text": "දත්ත වගු වර්ග කිරීම සහ පෙරීම. Attribute Table එක විවෘත කර, තීරු මාතෘකා මත ක්ලික් කිරීමෙන් දත්ත ආරෝහණ හෝ අවරෝහණ ක්‍රමයට සකසා ගත හැකි අතර පෙරහන් (Filter) භාවිතයෙන් අවශ්‍ය කොටස් පමණක් තෝරාගත හැකිය.",
                "visual": "**Sorting Actions:**<br>• Left-click column header: Sort asc/desc<br>• Click 'Show Selected Features Only' to isolate items on canvas",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Selecting Features on Map Canvas",
                "text": "සිතියම් අංග තේරීම (Selection). සිතියමක අවශ්‍ය කොටස් තේරීමට QGIS හි Selection by Rectangle, Value, හෝ Expression භාවිත කළ හැකිය. තේරූ වස්තූන් කහ පැහැයෙන් දිස් වේ.",
                "visual": "**Selection Rules:**<br>• Select by Value: Match exact column values<br>• Clear Selection button on attributes toolbar restores default display state\n<div class=\"code-widget\" style=\"margin-top: 15px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-left: 3px solid var(--accent-emerald); padding: 10px; border-radius: 4px; font-family: monospace; font-size: 0.78rem; text-align: left;\">\n    <span style=\"color: #888; display: block; margin-bottom: 4px; font-family: var(--font-body); font-size: 0.75rem;\">Common Field Calculator Geometry Expressions:</span>\n    <code>$area / 10000</code> <span style=\"color: #666;\">-- Area in Hectares</span><br>\n    <code>$length / 1000</code> <span style=\"color: #666;\">-- Length in Kilometers</span><br>\n    <code>x($geometry)</code> <span style=\"color: #666;\">-- Retrieve Point X Coordinate</span><br>\n    <code>num_points($geometry)</code> <span style=\"color: #666;\">-- Count vertices in line/poly</span>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Spatial Selection (Select by Location)",
                "text": "අවකාශීය තේරීම් (Select by Location). භූගෝලීය පිහිටීම් සලකා බලා දත්ත තේරීමට මෙය භාවිත වේ (උදා. ගංවතුර කලාපය තුල පිහිටන සියලුම පාසල් සෙවීම).",
                "visual": "**Spatial Relations:**<br>• Intersect: Shares coordinate space<br>• Within: Fully enclosed inside boundary<br>• Touch: Coordinates touch at boundaries only",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Select by Expression Syntax",
                "text": "ප්‍රකාශන මඟින් තේරීම් කිරීම (Select by Expression). SQL වැනි කේත ක්‍රම භාවිතයෙන් දත්ත පෙරීමට attributes toolbar හි ඇති Select by Expression විවෘත කර කොන්දේසි ලියන්න.",
                "visual": "**Common Query Formats:**<br>• String Search: `\"NAME\" LIKE 'S%'` (starts with S)<br>• Numeric Range: `\"elev\" >= 500 AND \"elev\" <= 1000`",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Combining Queries using Boolean Logic",
                "text": "බූලීය තර්කන (Boolean Logic) භාවිතය. `AND`, `OR`, `NOT` ක්‍රියාකාරක ව්‍යාපෘති කොන්දේසි සම්බන්ධ කිරීමට භාවිත කරයි. සංකීර්ණ විමසුම් ලිවීමේදී වරහන් (parentheses) නිවැරදිව භාවිත කරන්න.",
                "visual": "**Order of Operations Query:**<br>• Expression: `(\"type\" = 'Forest' OR \"type\" = 'Wetland') AND \"area_ha\" > 10`",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "The Field Calculator: Safe Modes",
                "text": "Field Calculator ක්‍රියාකාරීත්වය. දත්ත වගුවල ගණනය කිරීම් සඳහා මෙය භාවිත වේ. මෙහිදී නව තීරුවක් (new field) සෑදීම හෝ පවතින තීරුවක් යාවත්කාලීන කිරීම කළ හැකිය.",
                "visual": "**Field Calculator Rules:**<br>• Always specify correct Output field type (e.g. Double)<br>• Field name limits: Shapefiles limit column header length to 10 characters",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Field Calculator Mathematical Functions",
                "text": "ගණිතමය සහ පෙළ ශ්‍රිත (Math & String Functions). Field Calculator හි math, string සහ date වැනි විවිධ ශ්‍රිත රාශියක් ගොනු කර ඇත.",
                "visual": "**Useful Formulas:**<br>• Round decimal: `round(\"area_meters\", 2)`<br>• Combine text: `concat(\"City: \", \"NAME\")`",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Calculating Geometry: Area Formulas",
                "text": "ජ්‍යාමිතික ගණනය කිරීම්: වර්ගඵලය (Area). Geometry ශ්‍රිත සලකුණු කරනුයේ `$` ලකුණෙනි. වර්ගඵලය මීටර් වලින් සෙවීමට `$area` ද හෙක්ටයාර සඳහා `$area / 10000` ද ලියන්න.",
                "visual": "**Area Geometry Logic:**<br>• Formula: `$area / 10000` (Hectares conversion)<br>• Note: Layer must be in Projected CRS (meters) for valid metric units.",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Calculating Line Lengths and Perimeters",
                "text": "රේඛීය දිග සහ පරිමිතිය මැනීම. රේඛාවල (lines) දිග සෙවීමට `$length` ද බහුඅස්‍රවල (polygons) පරිමිතිය සෙවීමට `$perimeter` ද Field Calculator හි ලියන්න.",
                "visual": "**Length Calculations:**<br>• Formula: `$length / 1000` (Kilometers conversion)<br>• Ensure Layer Projected Coordinate system is active on calculation run.",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Extracting Coordinate Points ($x, $y)",
                "text": "ඛණ්ඩාංක (X, Y) ලබා ගැනීම. ලක්ෂ්‍යවල (points) පිහිටීම් දත්ත වගුවේ සටහන් කර ගැනීමට X අගය සඳහා `$x` ද Y අගය සඳහා `$y` ද ලියා ගණනය කරන්න.",
                "visual": "**Easting / Northing Extraction:**<br>• Longitude column formula: `$x`<br>• Latitude column formula: `$y`",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Using CASE WHEN Conditional logic",
                "text": "CASE WHEN කොන්දේසි භාවිතය. සංඛ්‍යාත්මක අගයන් කාණ්ඩ කිරීමට (උදා. උස මට්ටම අඩු, මධ්‍යම, ඉහළ ලෙස) CASE WHEN කේත භාවිත කළ හැකිය.",
                "visual": "**Conditional Expression Syntax:**<br><code>CASE<br>  WHEN \"elevation\" < 100 THEN 'Low'<br>  WHEN \"elevation\" >= 100 AND \"elevation\" < 500 THEN 'Medium'<br>  ELSE 'High'<br>END</code>",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Geospatial Table Joins (Joins Tab)",
                "text": "දත්ත වගු සම්බන්ධ කිරීම (Table Joins). Vector ස්ථරයක් වෙනත් Excel හෝ CSV වගුවක් සමඟ සම්බන්ධ කිරීමට properties -> Joins වෙත ගොස් පොදු හඳුනාගැනීමේ අංකය (ID) මඟින් සම්බන්ධ කරන්න.",
                "visual": "**Join Prerequisites:**<br>• Both files must share a matching attribute column (Join Field)<br>• Data types of join columns must match exactly (e.g. both String or both Int)",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Spatial Joins (Join by Location)",
                "text": "අවකාශීය සම්බන්ධ කිරීම් (Spatial Joins). පිහිටීම සලකා බලා දත්ත වගු එකතු කිරීමට Processing Toolbox හි ඇති **Join attributes by location** භාවිත කරන්න (පොදු ID අවශ්‍ය නොවේ).",
                "visual": "**Use Case Example:**<br>• Append District name attributes to local water well point layers overlapping that district polygon",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Data Aggregation and Summaries",
                "text": "දත්ත සමුච්චිත විශ්ලේෂණ (Data Aggregations). කාණ්ඩ අනුව සංඛ්‍යාලේඛන සෙවීමට (පළාත් අනුව සාමාන්‍ය ජනගහනය) **Statistics by categories** මෙවලම භාවිත කරන්න.",
                "visual": "**Outputs Generated:**<br>• Sum, Mean, Min, Max, and Standard Deviation statistics for grouped categories",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Basic Geoprocessing: Vector Buffers",
                "text": "ප්‍රථමික අවකාශීය විශ්ලේෂණ: බෆර (Buffers). ලක්ෂ්‍ය හෝ රේඛාවලට වටින් නිශ්චිත දුරකින් (meters) කලාප සෑදීමට Vector -> Geoprocessing -> Buffer වෙත යන්න.",
                "visual": "**Buffer Parameters:**<br>• Distance: Proximity threshold (e.g. 50 meters)<br>• Segments: Smoothness of output circles<br>• Dissolve: Merges boundary intersections",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Vector Overlay: Clip and Difference",
                "text": "ස්ථර කපා වෙන් කිරීම (Clip සහ Difference). Clip මඟින් නිශ්චිත සීමාවක් තුල ඇති දත්ත පමණක් කපා ගන්නා අතර, Difference මඟින් සීමාවෙන් පිටත ඇති දත්ත ඉතිරි කරයි.",
                "visual": "**Overlay Tools:**<br>• Clip: Vector -> Geoprocessing -> Clip<br>• Difference: Vector -> Geoprocessing -> Difference",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Vector Overlay: Intersection and Union",
                "text": "ස්ථර ඒකාබද්ධ කිරීම (Intersection සහ Union). Intersection මඟින් එකිනෙක මත වැටෙන ප්‍රදේශ පමණක් ඉතිරි කර දත්ත වගු ඒකාබද්ධ කරයි. Union මඟින් සියලුම ප්‍රදේශ ඉතිරි කරයි.",
                "visual": "**Overlay Functions:**<br>• Intersection: AND logic on geometry space<br>• Union: OR logic on geometry space",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Vector Aggregation: Dissolve and Merge",
                "text": "මායිම් දිය කිරීම සහ ස්ථර ඒකාබද්ධය. Dissolve මඟින් සමාන අගයන් ඇති බහුඅස්‍ර අතර ඇති මායිම් ඉවත් කරයි. Merge මඟින් එකම වර්ගයේ ස්ථර කිහිපයක් එකක් බවට පත් කරයි.",
                "visual": "**Aggregation Tools:**<br>• Dissolve: Vector -> Geoprocessing -> Dissolve<br>• Merge Vector Layers: Vector -> Data Management -> Merge",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Extracting and Splitting Spatial Parts",
                "text": "බහු-කොටස් වෙන් කිරීම සහ ස්ථර වෙන් කිරීම. Multipart to singleparts මඟින් දූපත් වැනි කොටස් කිහිපයකින් යුත් බහුඅස්‍ර තනි බහුඅස්‍ර බවට පත් කරයි. Split vector layer මඟින් කාණ්ඩ අනුව ගොනු වෙන් කරයි.",
                "visual": "**Splitting Vector:**<br>• Run: Vector -> Data Management -> Split Vector Layer<br>• Select unique ID field (each value saves as a separate file)",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Centroid Calculations & Point-in-Polygon",
                "text": "මධ්‍ය ලක්ෂ්‍යය සෙවීම සහ ලක්ෂ්‍ය ගණනය. Centroids මඟින් බහුඅස්‍රයක මැද ලක්ෂ්‍යය සොයන අතර Count points in polygon මඟින් සීමාවන් තුල ඇති ලක්ෂ්‍ය ගණන මනිනු ලැබේ.",
                "visual": "**Incident Count:**<br>• Output: New polygon layer with an added column storing numeric count of point intersections",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Generating Distance Matrix Tables",
                "text": "දුර ප්‍රමාණ වගු ජනනය (Distance Matrix). ලක්ෂ්‍ය දෙකක් අතර ඇති දුර ගණනය කර වගුවක් ලෙස ලබා ගැනීමට Vector -> Analysis -> Distance Matrix වෙත යන්න.",
                "visual": "**Distance Matrix Setup:**<br>• Input layer: Schools<br>• Target layer: Hospitals<br>• Output: Linear distances table",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "හඳුන්වාදීම to the Raster Calculator",
                "text": "රාස්ටර් ගණකය (Raster Calculator). Raster පික්සෙල් අගයන් මත ගණිතමය සමීකරණ යෙදීමට Raster -> Raster Calculator වෙත යන්න (උදා. NDVI ගණනය කිරීම).",
                "visual": "**Raster Formulas:**<br>• Conversion: `\"raster@1\" * 3.2808` (Meters to Feet)<br>• Grid overlay boolean operators",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Computing NDVI Vegetation Index",
                "text": "NDVI වෘක්ෂලතා දර්ශකය ගණනය කිරීම. ශාකවල සෞඛ්‍ය සම්පන්න බව මැනීමට Raster Calculator හි `(NIR - Red) / (NIR + Red)` යන සමීකරණය ලියන්න.",
                "visual": "**Sentinel-2 NDVI Bands:**<br>• Formula: `( \"sentinel@8\" - \"sentinel@4\" ) / ( \"sentinel@8\" + \"sentinel@4\" )`",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Raster Multi-Criteria Evaluation (MCE)",
                "text": "බහු-නිර්ණායක ඇගයීම (MCE). විවිධ රාස්ටර් ස්ථර (බෑවුම, මාර්ගවලට දුර) නැවත වර්ගීකරණය කර, බර තැබීම් (weights) යොදා යෝග්‍යතම ස්ථාන සෙවීම මෙයින් සිදු කෙරේ.",
                "visual": "**MCE Overlay Formula:**<br>• Weighted Sum: `(\"slope@1\" * 0.4) + (\"road_dist@1\" * 0.3) + (\"soil@1\" * 0.3)`",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Topology Rules Configuration",
                "text": "ටොපොලොජි රීති සැකසීම (Topology). සිතියම් මායිම් අතර හිඩැස් (gaps) හෝ එකිනෙක මත වැටීම් (overlaps) සෙවීමට Topology Checker භාවිත කෙරේ.",
                "visual": "**Topology Checker Rules:**<br>• Rule: `[parcels] Must Not Overlap`<br>• Rule: `[boundaries] Must Not Have Gaps`",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Graphical Processing Modeler (Workflow Automation)",
                "text": "ක්‍රියාවලි ආකෘතිකරණය (Model Designer). නැවත නැවත සිදු කරන විශ්ලේෂණ ස්වයංක්‍රීයව සිදු වන සේ මෘදුකාංග සැලසුමක් (workflow model) නිර්මාණය කිරීමට Model Designer භාවිත කරයි.",
                "visual": "**Model Builder Elements:**<br>• Model Inputs: Vector layer parameters<br>• Model Algorithms: Sequential geoprocessing steps",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Running Batch Processes in Toolbox",
                "text": "කාණ්ඩ ක්‍රියාවලි (Batch Processing). ගොනු සිය ගණනක් එකවර කපා ගැනීමට (clip) Processing Toolbox හි ඇති 'Run as Batch Process' භාවිත කරන්න.",
                "visual": "**Batch Entry:**<br>• Fill rows with target file paths<br>• autofill output naming parameters with prefix values",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Exporting Attribute Tables to CSV/Excel",
                "text": "දත්ත වගු අපනයනය (CSV/Excel). ගණනය කළ දත්ත වගු පරිගණකයට සුරැකීමට Layer මත right-click කර Export -> Save Features As ගොස් CSV හෝ XLSX ආකෘතිය තෝරන්න.",
                "visual": "**Export Options:**<br>• Select columns to export<br>• Choose formatting: decimal points precision",
                "download": null
            },
            {
                "module": "මොඩියුලය 4",
                "moduleTitle": "ආරෝපණ වගු, ප්‍රකාශන සහ අවකාශීය විමසුම්",
                "title": "Module 4 Practical Assignment",
                "text": "මොඩියුලය 4 ප්‍රායෝගික පැවරුම. ලබා දී ඇති දත්ත වලින් නිශ්චිත වස්තූන් පෙරන්න, බෆර සකසන්න, වර්ගඵලය හෙක්ටයාර වලින් ගණනය කර ව්‍යාපෘතිය `module4_analysis.qgz` ලෙස සුරකින්න.",
                "visual": "**Assignment Deliverables:**<br>• Select by expression formula code<br>• Calculated metric area column fields<br>• Dissolved boundary buffers layers",
                "download": {
                    "text": "විශ්ලේෂණ කටයුතු සඳහා වන උසස් GIS දත්ත බාගන්න (ZIP, 5.4 MB)",
                    "url": "https://github.com/qgis/QGIS-Sample-Data/archive/master.zip"
                }
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "හඳුන්වාදීම to Module 5",
                "text": "මොඩියුලය 5 හඳුන්වාදීම. සිතියමක සාර්ථකත්වය එහි අවසන් මුද්‍රණ සැලසුම මත රඳා පවතී. මෙම මොඩියුලයෙන් Print Layout භාවිතය, සූචි, මායිම් ඛණ්ඩාංක සහ සිතියම් පොත් (Atlas) නිර්මාණය ඉගෙන ගනිමු.",
                "visual": "**Key metrics:**<br>• Map item layout properties<br>• Coordinates grid overlays<br>• QGIS Atlas mapbook serializing\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/QGIS_සැකසුම්_සහ_වාර්තා.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> QGIS සැකසුම් සහ වාර්තා (Settings & Layout Composer)\n    </div>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "The Print Layout Workspace Composer",
                "text": "මුද්‍රණ සැලසුම් කවුළුව (Print Layout). සිතියම සකස් කිරීම ඇරඹීමට Project -> New Print Layout වෙත ගොස් නමක් දෙන්න. මෙහිදී පිටුවේ ප්‍රමාණය (A4, A3) සහ දිශාව (Landscape) සකසන්න.",
                "visual": "**Page Settings:**<br>• Page Size: Standard ISO sheets (A4/A3)<br>• Page Orientation: Landscape / Portrait",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Layout Properties and Page Guides",
                "text": "පිටු මාර්ගෝපදේශ (Guides) සැකසීම. සූචි සහ සිතියම් නිසි පෙළගැස්මකට තැබීම සඳහා පිටුවේ properties වෙත ගොස් Guides (තිරස්/සිරස් රේඛා) සකසා, snap-to-guides සක්‍රිය කරන්න.",
                "visual": "**Layout Grids and Snapping:**<br>• Snap tolerance: Set to 5 pixels<br>• Grid spacing parameters: e.g. 10mm intervals",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Adding the Main Map Item",
                "text": "ප්‍රධාන සිතියම එක් කිරීම. Print Layout එකට සිතියම එක් කිරීමට පැති තීරුවේ ඇති Add Map ක්ලික් කර පිටුව තුල සෘජුකෝණාස්‍රයක් ඇඳ ගන්න.",
                "visual": "**Map Item Parameters:**<br>• Set map scale (e.g. 10000)<br>• Click 'Update Preview' to redraw layers canvas in layout\n<div class=\"layout-widget\" style=\"margin-top: 15px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; text-align: left;\">\n    <span style=\"font-weight: 700; font-size: 0.85rem; color: var(--accent-emerald); display: block; margin-bottom: 6px;\"><i class=\"fa-solid fa-map\"></i> Mandatory Layout Elements</span>\n    <ul style=\"font-size: 0.76rem; margin: 0; padding-left: 15px; color: var(--text-secondary); line-height: 1.4;\">\n        <li><strong>Map Frame:</strong> Dynamic view with scale constraints.</li>\n        <li><strong>Scalebar:</strong> Configured in metric units (meters/km).</li>\n        <li><strong>Legend:</strong> Clean title with custom vector layer filters.</li>\n        <li><strong>North Arrow:</strong> Align map rotation angle.</li>\n    </ul>\n</div>\n",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Navigating Map Extent in Layouts",
                "text": "සිතියමේ දිශාව සහ සීමාවන් සකස් කිරීම. සිතියම් රාමුව තුල ඇති සිතියම එහා මෙහා කිරීමට 'Move Item Content' මෙවලම (shortcut `C`) භාවිත කර drag කරන්න.",
                "visual": "**Scale Control:**<br>• Item Properties -> Scale<br>• Input direct numerical denominators (e.g. 25000 for 1:25,000)",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Saving and Using Layout Templates (.qpt)",
                "text": "සැලසුම් අච්චු (.qpt Templates) භාවිතය. ඔබ සකස් කළ මුද්‍රණ සැලසුම් රටාව වෙනත් ව්‍යාපෘති සඳහා භාවිත කිරීමට Layout -> Save as Template ගොස් `.qpt` ගොනුවක් ලෙස සුරකින්න.",
                "visual": "**Load Template Path:**<br>• Project -> Layout Manager -> Specific layout templates selection",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Adding and Customizing the Map Legend",
                "text": "සිතියම් සූචිය (Legend) සැකසීම. Add Legend ක්ලික් කර පිටුවට එක්කර Item Properties හි 'Auto Update' අක්‍රිය කර අවශ්‍ය පරිදි වෙනස් කරන්න.",
                "visual": "**Legend Filters:**<br>• Toggle: 'Only show items inside linked map' (hides unused layer symbols)<br>• Customize font sizes for Title, Group, and Sub-group",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Adding and Styling Scale Bars",
                "text": "පරිමාණ තීරු (Scale Bars) සැකසීම. Add Scalebar ක්ලික් කර පිටුවට එක්කර, Item Properties හි style එක (Single Box, Double Box) සහ ඒකකය (Kilometers) සකසන්න.",
                "visual": "**Scalebar segments:**<br>• Left segments: e.g. 2 (represents subdivisions)<br>• Right segments: e.g. 4 (represents major ticks)",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Inserting North Arrows",
                "text": "උතුරු ඊතලය (North Arrow) එක් කිරීම. දිශාව පෙන්වීමට Add North Arrow ක්ලික් කර, SVG ලැයිස්තුවෙන් කැමති ඊතල සලකුණක් තෝරා සිතියම් රාමුව සමඟ සම්බන්ධ කරන්න.",
                "visual": "**Dynamic Orientation Rotation:**<br>• Item Properties -> Map rotation sync: Sync with Map 1",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Adding Layout Titles and Text Annotations",
                "text": "මාතෘකා සහ ලේඛන එකතු කිරීම. සිතියම් මාතෘකාව හෝ විස්තර ලේබල් කිරීමට Add Label ක්ලික් කර, Item Properties හි අදාළ විස්තර ලියන්න.",
                "visual": "**Aesthetic Alignment:**<br>• Center align title text boxes<br>• Enable border frames and background fills if text overlaps map edges",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Adding Corporate Logos and Images",
                "text": "පින්තූර සහ ලාංඡන (Logos) එක් කිරීම. සිතියමට ආයතනික ලාංඡන එක් කිරීමට Add Picture ක්ලික් කර පින්තූරය (PNG/SVG) තෝරාගන්න.",
                "visual": "**Image Scaling:**<br>• Use 'Zoom' scaling mode to maintain logo aspect ratio without distortions",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Adding Map Coordinate Grids (Graticules)",
                "text": "සිතියම් ඛණ්ඩාංක ජාල (Map Grids) සැකසීම. සිතියමට අක්ෂාංශ/දේශාංශ රේඛා එක් කිරීමට Map Item -> Properties -> Grids වෙත ගොස් interval අගයන් සකසන්න.",
                "visual": "**Grid Intervals:**<br>• GCS grids (degrees): e.g. interval = 0.5 degrees<br>• PCS grids (meters): e.g. interval = 10000 meters",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Styling Grid Lines & Coordinate Ticks",
                "text": "ඛණ්ඩාංක ජාල හැඩතල ගැන්වීම. ඛණ්ඩාංක රේඛාවල වර්ණය සහ පළල වෙනස් කළ හැකි අතර සිතියම මැදින් රේඛා නොමැතිව Frame එකෙහි පමණක් සලකුණු (Frame and Ticks) තැබිය හැකිය.",
                "visual": "**Grid Style Tips:**<br>• Use light grey lines (e.g. 30% opacity) to avoid obscuring geographical layers<br>• Use Tick marks for cleaner visual outputs",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Formatting Coordinates Labels around Margins",
                "text": "මායිම් ඛණ්ඩාංක ලේබල් කිරීම. මායිම්වල අගයන් පෙන්වීමට Grid Properties හි 'Draw Coordinates' සක්‍රිය කර එය 'Decimal with suffix' ලෙස සකසන්න.",
                "visual": "**Vertical Coordinates Layout:**<br>• Right/Left margins coordinate labels: Set to **Vertical Ascending / Descending** to save layout page width margins.",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Creating Map දළ විශ්ලේෂණය / Key Map Insets",
                "text": "ප්‍රදේශ සිතියම (Key Maps / Inset Maps). ප්‍රධාන අධ්‍යයන ප්‍රදේශය පිහිටන විශාල කලාපය පෙන්වීමට දෙවන කුඩා සිතියමක් (Map 2) එක්කර Overview ලෙස Map 1 තෝරන්න.",
                "visual": "**Inset Setup Steps:**<br>1. Draw small Map 2 in page corner<br>2. Properties -> Overviews -> Add overview -> Set frame map to Map 1<br>3. Style the outline rectangle with a transparent red fill",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Linking Map Views and Locking Layers",
                "text": "ස්ථර අගුළු දැමීම (Lock Layers). Inset සිතියමේ දත්ත ස්ථාවරව තබා ගැනීමට Map Item -> **Lock Layers** සහ **Lock Styles** සක්‍රිය කරන්න.",
                "visual": "**Workflow Rule:**<br>• Freeze map items before changing symbology for other layout pages",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Designing Multi-Page layouts",
                "text": "බහු-පිටු සිතියම් පොත් සැකසීම. QGIS Print Layout හි පිටු කිහිපයක් සෑදීමට පිටුව මත right-click කර **Add Page** තෝරන්න.",
                "visual": "**Page Navigation:**<br>• Use layout page selector at bottom status bar to navigate page sheets",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "The QGIS Atlas Serializer Engine",
                "text": "QGIS Atlas සිතියම් පොත් ස්වයංක්‍රීයකරණය. ප්‍රාන්ත හෝ දිස්ත්‍රික්ක 50 ක සිතියම් 50 ක් අතින් අපනයනය කරනු වෙනුවට, Atlas එන්ජිම මඟින් ඒවා ස්වයංක්‍රීයව ජනනය කරයි.",
                "visual": "**Atlas Components:**<br>• Coverage Layer: Boundary vector layer<br>• Output naming expressions based on attributes",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Setting Up Atlas Coverage Layers",
                "text": "Atlas සැකසුම් සැකසීම. Print Layout හි ඇති Atlas පැනලය විවෘත කර 'Generate an Atlas' සක්‍රිය කර සීමා මායිම් ස්ථරය (Coverage layer) ලබා දෙන්න.",
                "visual": "**Atlas Margins:**<br>• Set margin around feature to 10% or 15% to keep boundary context visible",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Dynamic Atlas text labels parsing",
                "text": "ගතික සිතියම් මාතෘකා (Dynamic Labels). සිතියමෙන් සිතියමට මාතෘකාව ස්වයංක්‍රීයව වෙනස් වීමට text label එක තුල `[% \"district_name\" %]` ලෙස ලියන්න.",
                "visual": "**Atlas Label Syntax:**<br>• Title: `\"District: \" || [% \"NAME_1\" %]`",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Exporting Layouts as Raster Images",
                "text": "රූප ගොනු ලෙස අපනයනය කිරීම (Export as Image). සිතියම රූපයක් ලෙස සුරැකීමට Layout -> Export as Image ගොස් ගොනු නාමය සහ DPI අගය ලබා දෙන්න.",
                "visual": "**DPI Rules:**<br>• Web preview: 72-150 DPI<br>• Print publication: 300 DPI (minimum standard)",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Understanding Export Resolutions (DPI)",
                "text": "DPI ධාරිතාව තේරුම් ගැනීම. DPI මඟින් සිතියමේ පැහැදිලි බව (resolution) තීරණය වේ. වෙබ් සඳහා 150 DPI ද, ප්‍රකාශන සඳහා 300 DPI ද භාවිත වේ.",
                "visual": "**Resolution Scaling:**<br>• Higher DPI increases pixel count and file size, check system memory limit before exporting at 600 DPI",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Exporting Layouts as Vector Graphics (SVG)",
                "text": "දෛශික ගොනු ලෙස අපනයනය කිරීම (Export as SVG). සිතියමේ හැඩතල Illustrator වැනි මෘදුකාංගයකින් වෙනස් කිරීමට Layout -> Export as SVG ගොස් සුරකින්න.",
                "visual": "**SVG Options:**<br>• Check 'Export map layers as groups'<br>• Check 'Export text as paths' if custom fonts are missing on target computers",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Exporting Layouts as PDF files",
                "text": "PDF ගොනු ලෙස අපනයනය කිරීම (Export as PDF). සිතියම් බෙදාහැරීමේ ප්‍රධාන ආකෘතිය මෙය වන අතර Layout -> Export as PDF ගොස් පහසුවෙන් සුරැකිය හැකිය.",
                "visual": "**PDF Advantages:**<br>• Universal format compatibility<br>• Maintains high-resolution vector text paths",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Generating Interactive GeoPDFs",
                "text": "GeoPDF ගොනු ජනනය කිරීම. ඛණ්ඩාංක සහිත අන්තර්ක්‍රියාකාරී PDF සෑදීමට PDF අපනයන සැකසුම්වල ඇති **Create GeoPDF** සක්‍රිය කරන්න.",
                "visual": "**GeoPDF Features:**<br>• Toggle map layers on/off inside PDF viewer<br>• Read real coordinates locations with Adobe measuring tools",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Preparing Web Maps (QGIS2Web plugin)",
                "text": "වෙබ් සිතියම් සැකසීම (QGIS2Web). වෙබ් අඩවිවල සිතියම් පෙන්වීමට qgis2web ප්ලගීනය භාවිත කර Leaflet හෝ OpenLayers කේත ස්වයංක්‍රීයව සාදාගත හැකිය.",
                "visual": "**Web Map Export Steps:**<br>1. Plugins -> Manage -> Install `qgis2web`<br>2. Web -> QGIS2Web -> Create Web Map<br>3. Choose Leaflet -> Export to folder",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Packaging QGIS Project Files (.qgz)",
                "text": "ව්‍යාපෘති ගොනු ඇසුරුම් කිරීම (Packaging). QGIS ව්‍යාපෘතියක් `.qgz` ලෙස සුරැකීමේදී සියලුම ගොනු සබැඳි (paths) සාපේක්ෂව (relative) තැබීම වැදගත් වේ.",
                "visual": "**Save Settings Check:**<br>• Project -> Properties -> General -> Save Paths: Set to **Relative**",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Cartographic Ethics and Copyright Citations",
                "text": "සිතියම්කරණ ආචාරධර්ම සහ හිමිකම්. සිතියමක් සෑදීමේදී පසුබිම් සිතියම් (OSM) සහ දත්ත ලබාගත් ආයතනවලට (USGS) අදාළ කෘතඥතාව සිතියමේ කෙළවරක සටහන් කළ යුතුය.",
                "visual": "**Copyright text example:**<br>• `Map Data © OpenStreetMap contributors, DEM courtesy of NASA SRTM`",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Adding and Styling Attribute Tables in Layouts",
                "text": "මුද්‍රණ සැලසුම් සඳහා දත්ත වගු (Attribute Tables) ඇතුලත් කිරීම. සිතියම සමඟ දත්ත වගු දර්ශනය කිරීම. සිතියම් පත්‍රයට දත්ත වගුවක් එක් කිරීමට Add Attribute Table ක්ලික් කර පිටුවට එක් කරන්න. මෙහිදී අදාළ vector ස්ථරය තෝරා, අවශ්‍ය තීරු පමණක් වෙන්කර පෙන්විය හැකිය.",
                "visual": "**Table Properties:**<br>• Link to Layer: Vector boundary layers<br>• Check: 'Show only features intersecting map'<br>• Style grid colors and cell paddings",
                "download": null
            },
            {
                "module": "මොඩියුලය 5",
                "moduleTitle": "මුද්‍රණ සැලසුම් නිර්මාණය සහ සිතියම් අපනයනය",
                "title": "Course Review & Examination Guide",
                "text": "පාඨමාලා සමාලෝචනය සහ විභාග මාර්ගෝපදේශය. සුභ පැතුම්! ඔබ ස්ලයිඩ 150 ම අධ්‍යයනය කර ඇත. විභාගය ඇරඹීමට පෙර ඛණ්ඩාංක පද්ධති, වර්ණ ගැන්වීම්, දත්ත වගු ගණනය කිරීම් සහ මුද්‍රණ සැලසුම් නැවත වරක් මතක් කර ගන්න.",
                "visual": "**Exam Checklist:**<br>• 40 Multiple choice questions<br>• 70% passing threshold<br>• Map assignment upload required for certificate\n<div class=\"video-container\" style=\"margin-top: 15px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);\">\n    <video controls style=\"width: 100%; display: block; background: #000;\">\n        <source src=\"assets/videos/Phase_3__The_Advanced_QGIS_Data_Pipeline.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div style=\"background: rgba(255,255,255,0.02); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); text-align: left;\">\n        <i class=\"fa-solid fa-circle-play\" style=\"color: var(--accent-emerald);\"></i> <strong>Video Lesson:</strong> Phase 3: The Advanced QGIS Data Pipeline (English)\n    </div>\n</div>\n",
                "download": null
            }
        ],
        "flashcards": [
            {
                "q": "Vector සහ Raster දත්ත අතර වෙනස කුමක්ද?",
                "a": "Vector දත්ත ලක්ෂ්‍ය, රේඛා, බහුඅස්‍ර ලෙස දත්ත ගබඩා කරන අතර Raster දත්ත පික්සෙල් ජාල (pixels) ලෙස අඛණ්ඩ අගයන් ගබඩා කරයි."
            },
            {
                "q": "ඛණ්ඩාංක පද්ධතියක් (CRS) වැදගත් වන්නේ ඇයි?",
                "a": "ත්‍රිමාණ පෘථිවිය ද්විමාන තලයකට හැරවීමේදී සිදුවන හැඩය, දුර සහ වර්ගඵල විකෘති වීම් වළක්වා ගැනීමට නිවැරදි CRS පද්ධතියක් අවශ්‍ය වේ."
            },
            {
                "q": "WGS 84 භූගෝලීය CRS එක නියෝජනය කරන EPSG කේතය කුමක්ද?",
                "a": "EPSG:4326 යනු GPS සහ පොදු භූගෝලීය ඛණ්ඩාංක සඳහා භාවිත වන සම්මත EPSG කේතයයි."
            },
            {
                "q": "Field Calculator මඟින් වර්ගඵලය හෙක්ටයාර වලින් සොයන්නේ කෙසේද?",
                "a": "decimal වර්ගයේ තීරුවක් සාදා '$area / 10000' යන සමීකරණය ලියන්න. ස්ථරය Projected CRS එකක තිබීම අනිවාර්ය වේ."
            },
            {
                "q": "උසස් තත්ත්වයේ සිතියම් අපනයනය කිරීමට QGIS හි ඇති මෙවලම කුමක්ද?",
                "a": "Print Layout (Project -> New Print Layout) මෙවලම භාවිතයෙන් සිතියම්, පරිමාණ තීරු සහ සූචි සකසා අපනයනය කළ හැකිය."
            },
            {
                "q": "ව්‍යාපෘතියක දත්ත ගැලපීම් ගැටලු නිරාකරණය කරන්නේ කෙසේද?",
                "a": "Project Properties -> CRS වෙත ගොස් ව්‍යාපෘතියට පොදු CRS එකක් සකසන්න. මෙවලම් ක්‍රියා නොකරන්නේ නම් Vector General -> Reproject Layer කරන්න."
            },
            {
                "q": "Spatial index එකක් යනු කුමක්ද සහ එය භාවිත කරන්නේ ඇයි?",
                "a": "R-Tree වැනි අවකාශීය දර්ශක මඟින් ජ්‍යාමිතික සීමා සලකුණු කරයි. එමඟින් විශාල දත්ත ස්ථරවල සිතියම් ඇඳීම සහ විශ්ලේෂණයන් වේගවත් කරයි."
            },
            {
                "q": "Categorized සහ Graduated සංකේත ක්‍රම අතර වෙනස පැහැදිලි කරන්න.",
                "a": "Categorized ක්‍රමයෙන් පෙළ දත්ත (නගර නාම) අනුව වර්ණ ගන්වන අතර Graduated ක්‍රමයෙන් සංඛ්‍යාත්මක දත්ත පන්තිවලට (Jenks breaks) බෙදා වර්ණ ගන්වයි."
            },
            {
                "q": "WMS සහ WFS සේවාවන් අතර වෙනස කුමක්ද?",
                "a": "WMS මඟින් සිතියම් ස්ථිතික රූප (images) ලෙස ලබා දෙන අතර WFS මඟින් සිතියමේ සැබෑ දෛශික ඛණ්ඩාංක (vector geometries) බාගත කිරීමට ඉඩ සලසයි."
            },
            {
                "q": "මීටර් 100 ක buffer කලාපයක් ඉතා විශාල රවුමක් ලෙස සිතියමේ ඇඳෙන්නේ ඇයි?",
                "a": "දත්ත ස්ථරය geographic CRS (EPSG:4326) පද්ධතියක තිබේ නම් buffer දුර මීටර් වෙනුවට අංශක (degrees) වලින් ගණනය වේ. එය Projected CRS වෙත Reproject කරන්න."
            },
            {
                "q": "QGIS Atlas එන්ජිමේ ප්‍රධාන කාර්යය කුමක්ද?",
                "a": "Atlas මඟින් සිතියම් පිටු විශාල ප්‍රමාණයක් සකසයි. එය දිස්ත්‍රික් සීමා වැනි ස්ථරයක් භාවිතයෙන් එක් එක් සීමාව සඳහා සිතියම් පිටුව බැගින් අපනයනය කරයි."
            },
            {
                "q": "Digital Elevation Model (DEM) එකක් යනු කුමක්ද?",
                "a": "DEM යනු පික්සෙල් අගයන් මඟින් භූමියේ උස නිරූපණය කරන රාස්ටර් දත්තයකි. QGIS මඟින් contours, slope සිතියම් සැකසීමට DEM භාවිත කරයි."
            },
            {
                "q": "Georeferencing යනු කුමක්ද සහ එය කරන්නේ කෙසේද?",
                "a": "භූගෝලීය ඛණ්ඩාංක නොමැති සිතියම් හෝ ගුවන් ඡායාරූප සැබෑ ලෝකයේ පිහිටීම්වලට (GCPs) අනුකූලව සිතියම් තලය මත ක්‍රමාංකනය කිරීම මෙයින් සිදු වේ."
            },
            {
                "q": "ESRI Shapefile ආකෘතියේ ඇති ප්‍රධාන සීමාවන් මොනවාද?",
                "a": "Shapefiles සඳහා අවම වශයෙන් ගොනු 3ක් (.shp, .dbf, .shx) අවශ්‍ය වන අතර, තීරු නාම අකුරු 10කට සීමා වේ. උපරිම ධාරිතාව 2 GB වේ."
            },
            {
                "q": "GDAL සහ OGR පුස්තකාල මඟින් QGIS තුල සිදු කරන්නේ කුමක්ද?",
                "a": "GDAL යනු raster දත්ත කියවීමට සහ ලිවීමට භාවිත වන පුස්තකාලය වන අතර OGR මඟින් vector දත්ත කියවීම සහ පරිවර්තනය සිදු කරයි."
            }
        ],
        "quiz": [
            {
                "q": "භූගෝලීය තොරතුරු පද්ධති (GIS) යනු කුමක්ද?",
                "o": [
                    "පරිගණකයේ ඇති ගොනු සෙවීමේ මෘදුකාංගයකි",
                    "අවකාශීය දත්ත ග්‍රහණය, ගබඩා, විශ්ලේෂණ සහ ඉදිරිපත් කරන පද්ධතියකි",
                    "ජංගම ක්‍රීඩා බාගත කරන මෘදුකාංගයකි",
                    "මූල්‍ය ගණනය කිරීම් සිදු කරන මෙවලමකි"
                ],
                "a": 1
            },
            {
                "q": "QGIS සංවර්ධන කටයුතු සහ මෘදුකාංග සංස්කරණ පාලනය කරනු ලබන්නේ කුමන ආයතනය මඟින්ද?",
                "o": [
                    "ESRI සමාගම",
                    "OSGeo පදනම",
                    "Microsoft සමාගම",
                    "Google Cloud පදනම"
                ],
                "a": 1
            },
            {
                "q": "වෘත්තීය කටයුතු සහ ආයතනික භාවිතයන් සඳහා වඩාත් නිර්දේශිත QGIS සංස්කරණය කුමක්ද?",
                "o": [
                    "Point Release (PR)",
                    "Developer Build (Master)",
                    "Long Term Release (LTR)",
                    "Alpha release"
                ],
                "a": 2
            },
            {
                "q": "QGIS අතුරු මුහුණතේ ඇති Layers Panel එකෙන් පෙන්වනුයේ කුමක්ද?",
                "o": [
                    "වෙබ් අඩවි සබැඳි ලැයිස්තුවක්",
                    "ව්‍යාපෘතියට ඇතුලත් කර ඇති දත්ත ස්ථර ලැයිස්තුව",
                    "ඛණ්ඩාංක අගයන්",
                    "මෘදුකාංග ක්‍රියාකාරී සටහන්"
                ],
                "a": 1
            },
            {
                "q": "QGIS Browser පැනලයේ ප්‍රධාන කාර්යය කුමක්ද?",
                "o": [
                    "අන්තර්ජාල වෙබ් අඩවි බැලීම",
                    "පරිගණකයේ සහ දත්ත සමුදායන්හි ඇති ගොනු සෙවීම සහ එක් කිරීම",
                    "Vector ලක්ෂ්‍ය වර්ණ ගැන්වීම",
                    "Python ක්‍රමලේඛ ක්‍රියාත්මක කිරීම"
                ],
                "a": 1
            },
            {
                "q": "GPS දත්ත සඳහා භාවිත වන ලෝක සම්මත ඛණ්ඩාංක පද්ධතිය කුමක්ද?",
                "o": [
                    "UTM zone 44N",
                    "WGS 84 Geographic",
                    "Web Mercator",
                    "Kandawala datum"
                ],
                "a": 1
            },
            {
                "q": "පික්සෙල් කොටු ජාලයකින් සමන්විත දත්ත ස්ථර වර්ගය කුමක්ද?",
                "o": [
                    "ලක්ෂ්‍ය ස්ථරය (Point)",
                    "රේඛා ස්ථරය (Line)",
                    "රාස්ටර් ස්ථරය (Raster)",
                    "බහුඅස්‍ර ස්ථරය (Polygon)"
                ],
                "a": 2
            },
            {
                "q": "අහම්බෙන් වැසුණු පැනලයක් (Layers / Browser) නැවත ලබා ගන්නේ කෙසේද?",
                "o": [
                    "Project -> Revert Project",
                    "View -> Panels -> අදාළ පැනලය සලකුණු කිරීම",
                    "Settings -> Reset options",
                    "Help -> Check updates"
                ],
                "a": 1
            },
            {
                "q": "පැරණි ESRI Shapefile ආකෘතියේ ඇති ප්‍රධාන සීමාවක් වන්නේ:",
                "o": [
                    "තීරුවල නම් අකුරු 20 කට වඩා තිබිය යුතුය",
                    "ගොනුවේ ධාරිතාව 2 GB නොඉක්මවිය යුතුය",
                    "එය තනි සිප් ගොනුවක් ලෙස පවතී",
                    "එය බහුඅස්‍ර හැඩතල සඳහා සහාය නොදක්වයි"
                ],
                "a": 1
            },
            {
                "q": "Vector ස්ථර, වර්ණ ගැන්වීම් සහ rasters එකම SQLite ගොනුවක් ලෙස ගබඩා කරන නවීන ආකෘතිය කුමක්ද?",
                "o": [
                    "Shapefile",
                    "GeoJSON",
                    "GeoPackage (.gpkg)",
                    "KML file"
                ],
                "a": 2
            },
            {
                "q": "ඛණ්ඩාංක පද්ධතිවල GCS යන්නෙහි තේරුම කුමක්ද?",
                "o": [
                    "Grid Coordinate System",
                    "Geographic Coordinate System (භූගෝලීය ඛණ්ඩාංක පද්ධතිය)",
                    "Geodetic Calculation Standard",
                    "Global Cartographic Structure"
                ],
                "a": 1
            },
            {
                "q": "WGS 84 භූගෝලීය ඛණ්ඩාංක පද්ධතිය නියෝජනය කරන EPSG කේතය කුමක්ද?",
                "o": [
                    "EPSG:3857",
                    "EPSG:4326",
                    "EPSG:5224",
                    "EPSG:32644"
                ],
                "a": 1
            },
            {
                "q": "දුර ප්‍රමාණය මීටර් වලින් මැනීමට නම්, ඔබගේ දත්ත ස්ථරය භාවිත කළ යුත්තේ කුමන පද්ධතියක්ද?",
                "o": [
                    "Geographic Coordinate System (අංශක ඒකකය සහිත)",
                    "Projected Coordinate System (මීටර් ඒකකය සහිත)",
                    "ගෝලීය ජාල පද්ධතියක්",
                    "ධ්‍රැවීය ජාල පද්ධතියක්"
                ],
                "a": 1
            },
            {
                "q": "ශ්‍රී ලංකාව ප්‍රධාන වශයෙන් අයත් වන UTM කලාපය (zone) කුමක්ද?",
                "o": [
                    "Zone 44N",
                    "Zone 43S",
                    "Zone 38N",
                    "Zone 48N"
                ],
                "a": 0
            },
            {
                "q": "ශ්‍රී ලංකාව සඳහා වන නවීන සම්මත ප්‍රක්ෂේපිත ඛණ්ඩාංක පද්ධතිය (projected CRS) කුමක්ද?",
                "o": [
                    "Kandawala Datum / Ceylon Grid",
                    "SLD99 / Sri Lanka Grid (EPSG:5224)",
                    "WGS 84 UTM zone 44N",
                    "WGS 84 Web Mercator"
                ],
                "a": 1
            },
            {
                "q": "QGIS හි දෛශික ගොනුවක ඛණ්ඩාංක පද්ධතිය ස්ථිරවම වෙනස් කරන්නේ කෙසේද?",
                "o": [
                    "Properties හි Set Layer CRS ලබාදීමෙන්",
                    "Right-click -> Export -> Save Features As හි නව CRS එකක් ලබාදීමෙන්",
                    "ව්‍යාපෘතියේ Project CRS වෙනස් කිරීමෙන්",
                    "ගොනුවේ extension එක අතින් වෙනස් කිරීමෙන්"
                ],
                "a": 1
            },
            {
                "q": "ජනගහන ඝනත්වය වැනි සංඛ්‍යාත්මක අඛණ්ඩ දත්ත පෙන්වීමට සුදුසුම වර්ණ රටාව කුමක්ද?",
                "o": [
                    "Qualitative (විවිධ වර්ණ රටා)",
                    "Sequential (එකම වර්ණය තද වන රටාව)",
                    "Diverging (වර්ණ දෙකක් දෙපසට යන රටාව)",
                    "අහඹු වර්ණ රටා"
                ],
                "a": 1
            },
            {
                "q": "එක් පන්තියකට (class) සමාන වස්තූන් ප්‍රමාණයක් ඇතුලත් වන සේ දත්ත බෙදන ක්‍රමය කුමක්ද?",
                "o": [
                    "Equal Interval",
                    "Quantile",
                    "Jenks Natural Breaks",
                    "Standard Deviation"
                ],
                "a": 1
            },
            {
                "q": "පන්ති තුල විචලනය අවම කරමින්, පන්ති අතර වෙනස උපරිම වන සේ දත්ත කාණ්ඩ කරන ක්‍රමය කුමක්ද?",
                "o": [
                    "Equal Interval",
                    "Quantile",
                    "Jenks (Natural Breaks)",
                    "ලඝුගණක පන්ති බෙදීම"
                ],
                "a": 2
            },
            {
                "q": "පස වර්ග (soil types) හෝ භූමි පරිහරණය වැනි ගුණාත්මක දත්ත සඳහා සුදුසුම වර්ණ ගැන්වීම් ක්‍රමය කුමක්ද?",
                "o": [
                    "Graduated",
                    "Categorized (වර්ගීකරණය)",
                    "Single Symbol",
                    "Heatmap"
                ],
                "a": 1
            },
            {
                "q": "Contour සිතියමක Contours Interval එකෙන් පෙන්වනුයේ කුමක්ද?",
                "o": [
                    "සූර්යයාගේ ආලෝක කෝණය",
                    "සමෝච්ඡ රේඛා දෙකක් අතර සිරස් උස පරතරය",
                    "RMS මධ්‍යන්‍ය දෝෂය",
                    "පරිමාණ සාධකය"
                ],
                "a": 1
            },
            {
                "q": "සිතියමක කඳු සෙවණැලි පෙන්වීම (Hillshade) මඟින් සිදු කරන්නේ කුමක්ද?",
                "o": [
                    "වෘක්ෂලතා ඝනත්වය පෙන්වීම",
                    "ආලෝක ප්‍රභවය නිසා කඳු මත ඇති වන සෙවණැලි නිරූපණය",
                    "ජල ගැලීම් සීමා පෙන්වීම",
                    "මාර්ගවල වාහන තදබදය පෙන්වීම"
                ],
                "a": 1
            },
            {
                "q": "වර්ණවත් පසුබිම් මත ලේබල් අකුරු පැහැදිලිව කියවීමට ලේබලයට එක් කළ යුත්තේ කුමක්ද?",
                "o": [
                    "Drop Shadow සෙවණැල්ලක්",
                    "Text Buffer (පසුබිම් වළල්ලක්/Halo)",
                    "Geometry Generator හැඩයක්",
                    "Blending Mode Multiply මාදිලියක්"
                ],
                "a": 1
            },
            {
                "q": "ගංගා හෝ මාර්ග ලේබල් කිරීමේදී රේඛාව ඔස්සේ වක්‍රව ලේබලය තැබීමට භාවිත කරන ක්‍රමය කුමක්ද?",
                "o": [
                    "Cartographic Offset",
                    "Curved Placement (වක්‍රව තැබීම)",
                    "Centroid Horizontal",
                    "Over Point"
                ],
                "a": 1
            },
            {
                "q": "Field Calculator මඟින් වර්ගඵලය හෙක්ටයාර වලින් සෙවීමට ලියන සමීකරණය කුමක්ද (Projected CRS)?",
                "o": [
                    "$area / 100",
                    "$area / 10000",
                    "$area * 10000",
                    "$area / 1000000"
                ],
                "a": 1
            },
            {
                "q": "Field Calculator හි `$length` ශ්‍රිතය මඟින් ගණනය කරන්නේ කුමක්ද?",
                "o": [
                    "බහුඅස්‍රයේ මායිම්වල දිග",
                    "රේඛීය ස්ථරවල දිග සිතියම් ඒකක වලින්",
                    "දේශාංශ අගය",
                    "ව්‍යාපෘතියේ ආරම්භක ලක්ෂ්‍යයට ඇති දුර"
                ],
                "a": 1
            },
            {
                "q": "වස්තුවක් වටා නිශ්චිත දුරකින් කලාප සෑදීමට භාවිත කරන අවකාශීය විශ්ලේෂණ මෙවලම කුමක්ද?",
                "o": [
                    "Clip මෙවලම",
                    "Dissolve මෙවලම",
                    "Buffer (බෆර) මෙවලම",
                    "Merge මෙවලම"
                ],
                "a": 2
            },
            {
                "q": "වෙනත් සීමා මායිම් ස්ථරයක් භාවිතයෙන් අවශ්‍ය කොටස පමණක් කපා ගැනීමට භාවිත කරන්නේ කුමක්ද?",
                "o": [
                    "Difference",
                    "Union",
                    "Clip (කැපීම)",
                    "Intersection"
                ],
                "a": 2
            },
            {
                "q": "භූගෝලීය විශ්ලේෂණයේදී 'Dissolve' මෙවලමෙහි ප්‍රධාන කාර්යය කුමක්ද?",
                "o": [
                    "බහු-කොටස් තනි කොටස් බවට හැරවීම",
                    "සමාන ලක්ෂණ ඇති බහුඅස්‍ර අතර ඇති මායිම් ඉවත් කිරීම",
                    "දත්ත වගු Excel වෙත යැවීම",
                    "විවිධ හැඩතල ඇති ස්ථර දෙකක් එකතු කිරීම"
                ],
                "a": 1
            },
            {
                "q": "චන්ද්‍රිකා රූප භාවිතයෙන් NDVI වෘක්ෂලතා දර්ශකය සෙවීමට ලියන නිවැරදි සූත්‍රය කුමක්ද?",
                "o": [
                    "(Red - NIR) / (Red + NIR)",
                    "(NIR - Red) / (NIR + Red)",
                    "NIR / Red",
                    "(NIR * Red) / 100"
                ],
                "a": 1
            },
            {
                "q": "පොදු ID එකක් නොමැතිව, පිහිටීම මත පදනම්ව දත්ත වගු සම්බන්ධ කරන ක්‍රමය කුමක්ද?",
                "o": [
                    "Primary Join",
                    "Table Join",
                    "Spatial Join (අවකාශීය සම්බන්ධය)",
                    "Excel VLOOKUP Join"
                ],
                "a": 2
            },
            {
                "q": "QGIS හි අවකාශීය ක්‍රියාවලීන් එකිනෙක සම්බන්ධ කර ස්වයංක්‍රීයව ක්‍රියාත්මක කිරීමට භාවිත කරන සැලසුම්කරණය කුමක්ද?",
                "o": [
                    "Symbology panel",
                    "Graphical Processing Modeler (ක්‍රියාවලි ආකෘතිකරණය)",
                    "Raster Calculator",
                    "Layout Composer"
                ],
                "a": 1
            },
            {
                "q": "සූචි, මාතෘකා සහ පරිමාණ තීරු සකසා සිතියම අපනයනය කිරීමට භාවිත කරන කවුළුව කුමක්ද?",
                "o": [
                    "Browser panel",
                    "Modeler panel",
                    "Print Layout (මුද්‍රණ සැලසුම් කවුළුව)",
                    "Georeferencer window"
                ],
                "a": 2
            },
            {
                "q": "මුද්‍රණ සැලසුම් නැවත භාවිත කළ හැකි අච්චු (templates) ලෙස සුරැකෙන ගොනු ආකෘතිය කුමක්ද?",
                "o": [
                    "XML style format (.qml)",
                    "QGIS Project format (.qgz)",
                    "Layout Template format (.qpt)",
                    "Shapefile shape format (.shp)"
                ],
                "a": 2
            },
            {
                "q": "සිතියමේ Symbology වෙනස් වන විට Layout සිතියම වෙනස් වීම වැළැක්වීමට භාවිත කරන මෙවලම කුමක්ද?",
                "o": [
                    "Move Item Content",
                    "Lock Layers සහ Lock Styles සක්‍රිය කිරීම",
                    "Auto-update legend",
                    "Scale lock setting"
                ],
                "a": 1
            },
            {
                "q": "මුද්‍රණ සැලසුම්වල සිතියම් පොත් මාලාවන් (mapbook series) ස්වයංක්‍රීයව ජනනය කිරීමට භාවිත කරන එන්ජිම කුමක්ද?",
                "o": [
                    "KDE Heatmap Engine",
                    "Processing Toolbox Engine",
                    "Atlas Engine",
                    "SpatiaLite Engine"
                ],
                "a": 2
            },
            {
                "q": "සිතියම් මුද්‍රණය සඳහා අපනයනය කිරීමේදී නිර්දේශිත අවම ධාරිතාවය (DPI) කොපමණද?",
                "o": [
                    "72 DPI",
                    "150 DPI",
                    "300 DPI",
                    "1200 DPI"
                ],
                "a": 2
            },
            {
                "q": "Illustrator වැනි මෘදුකාංග මඟින් සිතියම් සීමා සහ අකුරු වෙනස් කිරීමට අපනයනය කළ යුතු ආකෘතිය කුමක්ද?",
                "o": [
                    "TIFF image",
                    "PDF හෝ SVG දෛශික අපනයනය",
                    "JPEG image",
                    "XML file"
                ],
                "a": 1
            },
            {
                "q": "GeoPDF ගොනුවක අඩංගු වන්නේ කුමක්ද?",
                "o": [
                    "අන්තර්ක්‍රියාකාරී ස්ථර සහ භූගෝලීය ඛණ්ඩාංක තොරතුරු",
                    "Python compiler එකක්",
                    "පික්සෙල් රූප දත්ත පමණක්",
                    "අගුළු දැමූ පසුබිම් සිතියමක්"
                ],
                "a": 0
            },
            {
                "q": "QGIS ව්‍යාපෘති ගොනුවක් වෙනත් අයෙකුට යැවීමට පෙර සබැඳි (paths) සැකසිය යුත්තේ:",
                "o": [
                    "Absolute paths (නිරපේක්ෂ සබැඳි)",
                    "System temp directories",
                    "Relative paths (සාපේක්ෂ සබැඳි)",
                    "Network server paths"
                ],
                "a": 2
            }
        ]
    }
};