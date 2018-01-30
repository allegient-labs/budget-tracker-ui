import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      <div className="projects">
        <div>ActualAllocation: {this.props.thing.actualAllocation}</div>
        <div>ActualHours: {this.props.thing.actualHours}</div>
        <div>ActualRevenue: {this.props.thing.actualRevenue}</div>
        <div>BaselineAllocation: {this.props.thing.baselineAllocation}</div>
        <div>BaselineHours: {this.props.thing.baselineHours}</div>     
        <div>BaselineRevenue: {this.props.thing.baselineRevenue}</div>        
        <div>Client: {this.props.thing.client}</div>        
        <div>ClientName: {this.props.thing.clientName}</div>        
        <div>Date: {this.props.thing.date}</div>        
        <div>DateString: {this.props.thing.dateString}</div>        
        <div>Day: {this.props.thing.day}</div>        
        <div>InvoiceDate: {this.props.thing.invoiceDate}</div>        
        <div>Month: {this.props.thing.month}</div>        
        <div>Month_name: {this.props.thing.month_name}</div>        
        <div>NetsuiteCode: {this.props.thing.netsuiteCode}</div>        
        <div>Notes: {this.props.thing.notes}</div>        
        <div>PersonName: {this.props.thing.personName}</div>        
        <div>PracticeName: {this.props.thing.practiceName}</div>        
        <div>ProjectName: {this.props.thing.projectName}</div>        
        <div>Quarter: {this.props.thing.quarter}</div>        
        <div>Rate: {this.props.thing.rate}</div>        
        <div>Role: {this.props.thing.role}</div>        
        <div>Week: {this.props.thing.week}</div>        
        <div>Year: {this.props.thing.year}</div>
        <br/>
      </div>
    );
  }
}

export default ProjectCard;
