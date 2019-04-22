import React, {Component} from 'react';
import './lead.css'

class Lead extends Component {

    constructor () {
        super()

        this.onDragStart = this.onDragStart.bind(this)
        this.onDragEnd = this.onDragEnd.bind(this)
        this.openLeadInfo = this.openLeadInfo.bind(this)
    }

    componentDidUpdate () {
        
    }

    openLeadInfo (e) {

    }

    onDragStart (e) {
        e.target.classList.add('dragging')
        e.dataTransfer.setData('id', e.target.id)
    }

    onDragEnd (e) {
        e.target.classList.remove('dragging')
    }

    get_form () {
        switch (this.props.data.type) {
            case "calls":
                return (
                    <div className="input-group">
                        <input type="datetime-local" id={`schedule_inp_${this.props.data.id}`} placeholder="Call date" style={{width: '70%', fontSize: '0.6em'}} className="form-control datetimepicker" />
                        <button className="btn btn-primary form-control" onClick={e => {
                            console.log(document.getElementById(`schedule_inp_${this.props.data.id}`).value)
                        }}>OK</button>
                    </div>
                )
                break;
            default:
                return "";
        }
    }

    render () {

        return (
            <div className="lead" id={`lead_${this.props.data.id}`} draggable="true" onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                <div className="lead-info" onClick={this.openLeadInfo}>
                    <div className="full-name">{this.props.data.full_name}</div>
                    <div className="phone">{this.props.data.phone}</div>
                    <div className="social">{this.props.data.social}</div>
                </div>
                {this.get_form()}
            </div>
        )
    }
}

export default Lead;