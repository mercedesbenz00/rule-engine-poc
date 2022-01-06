export function configureFakeMainBackend() {
    let enterprises = [
        {
            id: 1,
            name: '云浮市云城区云丰南药发展有限公',
            property: 1,
            type: 2,
            town: '云城街',
            establish_date: '2010-03-21',
            corporation: '黎新志',
            plant_area: 157,
            factory_area: 157,
            storage_area: 157,
            state: 1,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 2,
            name: '云浮市南领药业有限公司',
            property: 1,
            type: 1,
            town: '云城街',
            establish_date: '2013-05-11',
            corporation: '大番薯',
            plant_area: 246,
            factory_area: 157,
            storage_area: 157,
            state: 1,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 3,
            name: '瑞庆隆南药有限公司',
            property: 0,
            type: 0,
            town: '园区2镇1',
            establish_date: '2014-07-28',
            corporation: '撒大声地',
            plant_area: 376,
            factory_area: 157,
            storage_area: 157,
            state: 0,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 4,
            name: '云浮市南浚中药材种植有限公司',
            property: 0,
            type: 3,
            town: '龙口镇',
            establish_date: '2011-01-19',
            corporation: '撒大声地',
            plant_area: 56,
            factory_area: 157,
            storage_area: 157,
            state: 0,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 5,
            name: '云浮市云安区镇安镇石坳肉桂专业',
            property: 0,
            type: 1,
            town: '龙口镇',
            establish_date: '2012-11-21',
            corporation: '撒大声地',
            plant_area: 337,
            factory_area: 157,
            storage_area: 157,
            state: 0,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 6,
            name: '云浮小桔农业科技有限公司',
            property: 0,
            type: 2,
            town: '龙口镇',
            establish_date: '2010-03-21',
            corporation: '黎新志',
            plant_area: 482,
            factory_area: 157,
            storage_area: 157,
            state: 0,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 7,
            name: '大沥山种植农民专业合作社',
            property: 0,
            type: 3,
            town: '沙坪街道',
            establish_date: '2010-03-21',
            corporation: '黎新志',
            plant_area: 436,
            factory_area: 157,
            storage_area: 157,
            state: 0,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 8,
            name: '佛山市顺德区友诺动物药业有限公',
            property: 0,
            type: 0,
            town: '沙坪街道',
            establish_date: '2010-03-21',
            corporation: '黎新志',
            plant_area: 304,
            factory_area: 157,
            storage_area: 157,
            state: 0,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 9,
            name: '云浮市永尚沉香农民专业合作社',
            property: 0,
            type: 2,
            town: '沙坪街道',
            establish_date: '2010-03-21',
            corporation: '黎新志',
            plant_area: 197,
            factory_area: 157,
            storage_area: 157,
            state: 0,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
        {
            id: 10,
            name: '云富种养殖农民专业合作社',
            property: 0,
            type: 2,
            town: '龙口镇',
            establish_date: '2010-03-21',
            corporation: '黎新志',
            plant_area: 472,
            factory_area: 157,
            storage_area: 157,
            state: 0,
            address:'云浮市云城接道园林路8号农捡办公楼3楼',
            telephone:'180*****250',
            contact:'180*****250'
        },
    ];
    let managers = [
        { id: 1, name: '李*婉', sex: 0, phone_number: 136085212, company_name: "云浮市永尚沉香农民专业合作社", state:1, hobby: 'basketball'},
        { id: 2, name: '武*东', sex: 1, phone_number: 133085333, company_name: "云浮小桔农业科技有限公司", state:1, hobby: 'music'},
        { id: 3, name: '李*浩', sex: 0, phone_number: 133085444, company_name: "瑞庆隆南药有限公司", state:1, hobby: 'reading'},
        { id: 4, name: '卫*姐', sex: 0, phone_number: 170085731, company_name: "云浮市云城区云丰南药发展有限公司", state:0, hobby: 'program'},
        { id: 5, name: '黎*志', sex: 1, phone_number: 180085250, company_name: "云浮市云城区云丰南药发展有限公司", state:0, hobby: 'dance'},
        { id: 6, name: '李*民', sex: 1, phone_number: 180085250, company_name: "云浮市南领药业有限公司", state:0, hobby: 'football'},
    ];

    let audits = [
        {
            id: 1,
            code: '502020000191',
            source: '移动端采集',
            name: '云浮市云城区云丰南药发展有限公司',
            property: 1,
            type: 2,
            town: '云城街',
            establish_date: '2010-03-21',
            corporation: '黎新志',
            state: 1,
            sponsor: '采集b',
            start_time: '2020-04-24 10:10',
            review_time: '2020-04-24 11:51',
            audit_opinion: '通过',
        },
        {
            id: 2,
            code: '502020000190',
            source: '移动端采集',
            name: '云浮市南领药业有限公司',
            property: 1,
            type: 2,
            town: '云城街',
            establish_date: '2010-03-21',
            corporation: '大番薯',
            state: 1,
            sponsor: '采集b',
            start_time: '2020-04-24 10:10',
            review_time: '2020-04-24 11:51',
            audit_opinion: '通过',
        },
    ];

    let advertisements = [
        {
            id: 1,
            name: 'Sport',
            content: 'This is sport advertisement'
        },
        {
            id: 2,
            name: 'Science',
            content: 'This is science advertisement'
        },
        {
            id: 3,
            name: 'Entertainment',
            content: 'This is entertainment advertisement'
        }
    ]

    let realFetch = window.fetch;

    window.fetch = function(url, opts) {

        return new Promise((resolve, reject) => {
                // wrap in timeout to simulate server api call
            setTimeout(() => {
                ////////////////////////////////////////////////////////////
                //////               ENTERPRISE INTO               /////////
                ////////////////////////////////////////////////////////////
                // GET ENTERPRISE INFO
                if (url.endsWith('/main/enterprise') && opts.method === 'GET') {
                    
                    let params = JSON.parse(opts.body);                     
                    let filteredEnterprises = enterprises.filter(enterprise => {
                        return params.name === '' || enterprise.name.search(params.name) >= 0;
                    });
                    if (filteredEnterprises.length) {
                        resolve({ ok: true, json: () => filteredEnterprises });
                    } else {                    
                        reject('ENTERPRISE INFO EMPTY');
                    }
                    return;
                    
                }

                // ADD ENTERPRISE INFO
                if (url.endsWith('/main/enterprise') && opts.method === 'POST') {
                    
                    let params = JSON.parse(opts.body);            
                    let newEnterprise = {
                        id: enterprises.length + 1,
                        name: params.enterprise.name,
                        property: params.enterprise.property,
                        type: params.enterprise.type,
                        town: params.enterprise.town,
                        establish_date: params.enterprise.establish_date,
                        corporation: params.enterprise.corporation,
                        plant_area: params.enterprise.plant_area,
                        factory_area: params.enterprise.factory_area,
                        storage_area: params.enterprise.storage_area,
                        state: params.enterprise.state,
                        address:params.enterprise.address,
                        telephone:params.enterprise.telephone,
                        contact:params.enterprise.contact                     
                    };        
                    enterprises.push(newEnterprise);
                    resolve({ ok: true, json: () => enterprises });
                    return;
                }

                // UPDATE ENTERPRISE INFO
                if (url.endsWith('/main/enterprise') && opts.method === 'PUT') {
                    
                    let params = JSON.parse(opts.body);  
                    let tmp = []                  
                    enterprises.map(enterprise => {
                        if (enterprise.name === params.enterprise.name) {
                            enterprise = params.enterprise
                        }
                        tmp.push(enterprise)
                    })
                    enterprises = tmp
                    resolve({ ok: true, json: () => enterprises });
                    return;
                }

                // DELETE ENTERPRISE INFO
                if (url.endsWith('/main/enterprise') && opts.method === 'DELETE') {                    
                    
                    let params = JSON.parse(opts.body);
                    let data = []
                    enterprises.map(enterprise => {
                        var filter = params.enterprise.filter(e => {return e.id === enterprise.id})
                        if (filter.length === 0) {
                            data.push(enterprise)
                        }
                    })
                    enterprises = data
                    resolve({ok: true, json: () => enterprises})
                    return;
                }

                // ACTIVE ENTERPRISE INFO
                if (url.endsWith('/main/enterprise/active') && opts.method === 'PUT') {
                    
                    let params = JSON.parse(opts.body);
                    enterprises.map(enterprise => {
                        let filter = params.enterprise.filter(e => {return e.id === enterprise.id})
                        if (filter.length !== 0) {
                            enterprise.state = 0
                        }
                    })
                    resolve({ ok: true, json: () => enterprises });
                    return;
                }

                // PASSIVE ENTERPRISE INFO
                if (url.endsWith('/main/enterprise/passive') && opts.method === 'PUT') {
                    
                    let params = JSON.parse(opts.body);
                    enterprises.map(enterprise => {
                        let filter = params.enterprise.filter(e => {return e.id === enterprise.id})
                        if (filter.length !== 0) {
                            enterprise.state = 1
                        }
                    })
                    resolve({ ok: true, json: () => enterprises });
                    return;
                }

                ////////////////////////////////////////////////////////////
                //////                 MANAGER INFO                /////////
                ////////////////////////////////////////////////////////////
                // ADD MANAGER INFO
                if (url.endsWith('/main/managers') && opts.method === 'POST') {
                    
                    let params = JSON.parse(opts.body);  
                    let newManager = {
                        id: managers.length + 1,
                        name: params.manager.name,
                        sex: params.manager.sex,
                        phone_number: params.manager.phone_number,
                        company_name: params.manager.company_name,
                        state : params.manager.state,
                        hobby : params.manager.hobby
                    };
                    managers.push( newManager );                                                            
                    resolve({ ok: true, json: () => managers });
                    return;
                    
                }

                // GET MANAGER INFO
                if (url.endsWith('/main/managers') && opts.method === 'GET') {                      
                    
                    let params = JSON.parse(opts.body);                                  
                    let filteredManager = managers.filter(manager => {
                        return params.name === '' || manager.company_name.search(params.name) >= 0;
                    });  
                    if (filteredManager.length) {
                        resolve({ ok: true, json: () => filteredManager });
                    } else {                       
                        reject('MANAGER INFO EMPTY');                        
                    }
                    return;
                }

                // UPDATE MANAGER INFO
                if (url.endsWith('/main/managers') && opts.method === 'PUT') {
                    
                    let params = JSON.parse(opts.body);    
                    let tmp = []                
                    managers.map(manager => {
                        if (manager.id === params.manager.id) {
                            manager = params.manager
                        }
                        tmp.push(manager)
                    })
                    managers = tmp
                    resolve({ ok: true, json: () => managers });
                    return;
                }
                
                // DELETE MANAGER INFO
                if (url.endsWith('/main/managers') && opts.method === 'DELETE') {
                    
                    let params = JSON.parse(opts.body);
                    let data = []  
                    managers.map(manager => {
                        var filter = params.manager.filter(p => {return p.id === manager.id})
                        if (filter.length === 0) {
                            data.push(manager)
                        }
                    })
                    managers = data
                    resolve({ok: true, json: () => managers})
                    return;
                }

                if (url.endsWith('/main/advertisement') && opts.method === 'GET') {
                    
                    let params = JSON.parse(opts.body);                     
                    let advertisement = advertisements.find(ad => {
                        return params.type === '' || ad.name.search(params.type) >= 0;
                    });
                    if (advertisement) {
                        resolve({ ok: true, json: () => advertisement });
                    } else {                    
                        reject('ENTERPRISE INFO EMPTY');
                    }
                    return;
                    
                }


                ////////////////////////////////////////////////////////////
                //////               AUDIT INTO               /////////
                ////////////////////////////////////////////////////////////
                // GET AUDIT
                if (url.endsWith('/main/audit') && opts.method === 'GET') {
                    
                    let params = JSON.parse(opts.body);                     
                    let filteredAudits = audits.filter(audit => {
                        return params.name === '' || audit.name.search(params.name) >= 0;
                    });
                    if (filteredAudits.length) {
                        resolve({ ok: true, json: () => filteredAudits });
                    } else {                    
                        reject('AUDIT INFO EMPTY');
                    }
                    return;
                    
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));
            }, 100);
        });
    };
}
