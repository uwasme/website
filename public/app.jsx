var panels = {};

var TabPanel=React.createClass({
	getInitialState: function() {
		return { visible: this.props.visible || false };
	},
	componentDidMount: function() {
		panels[this.props.tabID] = this;
	},
	render: function() {
		return (
			<div className={this.state.visible ? '' : 'hidden'}>
				{this.props.children}
			</div>
		);
	}
});

var TabLink = React.createClass({
	render: function() {
		return (<a onClick={this.props.onClick} href="#">{this.props.children}</a>);
	}
});

var TabNav = React.createClass({
	show: function(id) {
		Object.keys(panels).forEach(function(key) {
			panels[key].setState({visible: id == key});
		});
	},
	render: function() {
		var tabData = this.props.tabData;
	
		return (
			<ol>
				{Object.keys(tabData).map(function(key) { 
					return (<li><TabLink onClick={this.show.bind(this, key)} tabID={key}>{tabData[key]}</TabLink></li>);
				}, this)}
			</ol>
		);
	}
});


var TabPanelContainer = React.createClass({
	render: function() {
		return (
			<div>
				<TabPanel tabID='overview' visible={true}>
					<p className='blurb'>Welcome to the ASME website! We are a multidisciplinary group of student volunteers dedicated to promoting student leadership, career development, and engineering innovation on campus.</p>
				</TabPanel>
				<TabPanel tabID='team'>
					<p>Here is some stuff about our team</p>
				</TabPanel>
				<TabPanel tabID='join'>
					<form>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
						</div>
						<button type="submit" className="btn btn-default">Submit</button>
					</form>
				</TabPanel>
				<TabPanel tabID='site'>
					<a href="demo/index.html">Link to the new website</a>
				</TabPanel>
			</div>
		);
	}
});

React.render(
	<TabNav tabData={{'overview': "Overview", 'team': "Our Team", 'join': "Get Involved", 'site': "New Website"}} />, document.getElementById('nav')
);

React.render(
	<TabPanelContainer />, document.getElementById('tab-content')
);