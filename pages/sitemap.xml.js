import React from 'react'
import * as fs from 'fs'
import axiosInstance from '../components/axios';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'http://ziniamlaminates.com';
    
    const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
        "search.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });


    const getAllProducts = () => {

        return axiosInstance
            .get(`/product/`)
            .then((response) => {
                return response.data
            })
            .catch(response => {
                if (response.response != undefined) {
                    response = {
                        "data": null,
                    }
                    return response.data
                }
                else {
                    response = {
                        "data": null,
                    }
                }
                return response.data
            });
        }

    const products = await getAllProducts()

    let sitemap

    // check if there is any response
    if(products){

        const dynamicPaths = products.map( singleProduct => {
    
            return `${BASE_URL}/products/${singleProduct.name_slug}`
        
        })
    
        // const allPaths =[ ...staticPaths , ...dynamicPaths ]
        const allPaths =[ ...dynamicPaths ]
    
        sitemap = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>http://ziniamlaminates.com/</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>http://ziniamlaminates.com/products/</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>http://ziniamlaminates.com/visualizer/</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>http://ziniamlaminates.com/contact/</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
                ${allPaths
                    .map((url) => {
                    return `
                        <url>
                            <loc>${url}</loc>
                            <lastmod>${new Date().toISOString()}</lastmod>
                            <changefreq>monthly</changefreq>
                            <priority>0.9</priority>
                        </url>
                    `;
                })
                .join("")}
            </urlset>
        `;

    }else{

        sitemap = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>http://ziniamlaminates.com/</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>http://ziniamlaminates.com/products/</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>http://ziniamlaminates.com/visualizer/</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>http://ziniamlaminates.com/contact/</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
            </urlset>
        `;

    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;