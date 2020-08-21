import  React from 'react'

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
            <p className='loading'>
                {this.state.content}
            </p>
        )

    }
}

Loading.defaultProps = {
    text: 'Loading'
}