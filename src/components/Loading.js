import  React from 'react'
import { Row, Col } from 'react-bootstrap'

export default class Loading extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props)

        this.state = {
            content: props.text
        }
    }

    componentDidMount () {
        this._isMounted = true;

        const { text } = this.props

        window.setInterval(() => {
            if(this._isMounted) {
                console.log('here')
                this.state.content === text + '...'
                    ? this.setState({ content: text })
                    : this.setState(prevState => ({
                        content: prevState.content + '.'
                    }))
            }}, 300)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <Row>
                <Col>
                    <p className='loading'>
                        {this.state.content}
                    </p>
                </Col>
            </Row>
        )
    }
}

Loading.defaultProps = {
    text: 'Loading'
}