import React, { Component } from 'react'
import Lead from './lead'
import './home.css';
import leads from './leads.json'

class Home extends Component {

    constructor () {
        super();

        this.onDrop = this.onDrop.bind(this)
        this.allowDrop = this.allowDrop.bind(this)
        this.searchByKeyword = this.searchByKeyword.bind(this)

        this.state = {
            leads,
            leads_search_keyword: '',
            calls_search_keyword: '',
            recalls_search_keyword: '',
            meetings_search_keyword: '',
            reload: Math.random()
        }

    }


    searchByKeyword (e) {
        let value = e.target.value;
        let type = e.target.dataset.type;
        
        switch(type) {
            case "leads":
                this.setState({
                    ...this.state,
                    leads_search_keyword: value,
                })
                break;
            case "calls":
                this.setState({
                    ...this.state,
                    calls_search_keyword: value,
                })
                break;
            case "recalls":
                this.setState({
                    ...this.state,
                    recalls_search_keyword: value,
                })
                break;
            case "meetings":
                this.setState({
                    ...this.state,
                    meetings_search_keyword: value,
                })
                break;
            default:
                return false;
        }
    }

    changeLead (id, target) {
        // muveqqeti olaraq state-i bir basha deyishirem. Normalda ajax sorgusu gedecey servere, gelen cavab state-e yigilacaq

        let leads = this.state.leads;
        let found_lead;

        id = id.slice(5)

        target = target.className.match(/leads|calls|recalls|meetings|trash/i)

        if (!target.length) {
            return false;
        } else {
            target = target[0]
        }

        if (target === 'trash' && !window.confirm("Are you sure to block this lead?")) {
            return false;
        }

        let filter = l => {
            if (l.id.toString() === id.toString()) {
                found_lead = l
            }

            return l.id.toString() !== id.toString()
        }

        leads.leads = leads.leads.filter(filter)
        leads.calls = leads.calls.filter(filter)
        leads.recalls = leads.recalls.filter(filter)
        leads.meetings = leads.meetings.filter(filter)

        if (target === 'trash') {
            leads[found_lead.type] = leads[found_lead.type].filter(l => l.id.toString() !== id.toString())
        } else {
            found_lead.type = target
            leads[target].push(found_lead)
        }


        this.setState({
            ...this.state,
            leads,
            reload: Math.random()
        })
    }

    allowDrop (e) {
        e.preventDefault()
    }

    onDrop (e) {
        let id = e.dataTransfer.getData('id')
        let p = e.target;

        if (!e.target.className.match('column')) {
            p = e.target.parentNode;
            for (let i = 0; i < 2; i++) {
                if (p.className.match('column')) {
                    break;
                }

                p = p.parentNode
            }
        }

        this.changeLead(id, p)
    }

    separate_leads () {

        let result = {
            leads: [],
            calls: [],
            recalls: [],
            meetings: [],
        }

        
        for (let key in this.state.leads) {

            result[key] = this.state.leads[key].filter(item => {
                if (!this.state[`${key}_search_keyword`].match(/^[\r\n\s\t]*$/)) {
                    return item.full_name.toLowerCase().match(this.state[`${key}_search_keyword`].toLowerCase())
                } else {
                    return true;
                }
            })

            result[key] = result[key].map((item, index) => <Lead data={item} phone={item.phone} id={item.id} key={`lead_${index}`} />)
        }

        return result
    }

    render () {
        let leads = this.separate_leads()

        return (<div className="container">
            <div className="row">
                <div className="col-lg-12 column trash" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                    <div className="btn btn-danger" style={{width: '100%'}}>TRASH</div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 column leads" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                    <h2>Leads</h2>

                    <div className="form-group search-input-wrapper">
                        <input data-type="leads" type="text" placeholder="search by keywords..." className="form-control" onChange={this.searchByKeyword} />
                    </div>

                    <div className="leads-wrapper">
                        {leads.leads}
                    </div>
                </div>
                <div className="col-lg-3 column calls" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                    <h2>Calls</h2>

                    <div className="form-group search-input-wrapper">
                        <input data-type="calls" type="text" placeholder="search by keywords..." className="form-control" onChange={this.searchByKeyword} />
                    </div>
                    
                    <div className="leads-wrapper">
                        {leads.calls}
                    </div>
                </div>
                <div className="col-lg-3 column recalls" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                    <h2>Re-calls</h2>

                    <div className="form-group search-input-wrapper">
                        <input data-type="recalls" type="text" placeholder="search by keywords..." className="form-control" onChange={this.searchByKeyword} />
                    </div>

                    <div className="leads-wrapper">
                        {leads.recalls}
                    </div>
                </div>
                <div className="col-lg-3 column meetings" onDrop={this.onDrop} onDragOver={this.allowDrop}>
                    <h2>Meetings</h2>

                    <div className="form-group search-input-wrapper">
                        <input data-type="meetings" type="text" placeholder="search by keywords..." className="form-control" onChange={this.searchByKeyword} />
                    </div>

                    <div className="leads-wrapper">
                        {leads.meetings}
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Home;