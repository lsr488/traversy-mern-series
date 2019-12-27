// this is a container, essentially a component that's hooked to redux
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModel extends Component {

}

export default connect()(ItemModal);