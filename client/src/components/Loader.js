import React from 'react';
import './Loader.css';

const TIMER = 150; // Milliseconds between moving the next block
const TRANSITION = 0.5; // Seconds to actually move one block
const GUTTER = 5; // Spacing in percentage between tiles
const DEF_SIZE = 60; // Pixels height/width

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: {
                1: 'alpha',
                2: 'bravo',
                3: 'charlie',
                4: null,
                5: 'delta',
                6: 'echo',
                7: 'foxtrot'
            },
            stateNumber: 0
        };
        this.setTimer = this.setTimer.bind(this);
        this.setNextState = this.setNextState.bind(this);
    }

    componentDidMount() {
        this.setTimer(TIMER);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    setTimer(time) {
        this.timer = setInterval(this.setNextState, time);
    }

    setNextState() {
        const { positions, stateNumber } = this.state;
        const emptyIndex = Object.values(positions).indexOf(null);
        const indexToMove = this.tileIndexToMove();
        const newPositions = { ...positions };

        newPositions[indexToMove] = null;
        newPositions[emptyIndex + 1] = positions[indexToMove];

        const nextState = stateNumber === 7 ? 0 : stateNumber + 1;

        this.setState({ stateNumber: nextState, positions: newPositions });
    }

    tileIndexToMove() {
        const { stateNumber } = this.state;
        const order = [7, 6, 5, 4, 3, 2, 1, 4];
        return order[stateNumber];
    }

    renderTiles() {
        const { positions } = this.state;

        return ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'].map((radioCommand, index) => {
            const pos = Object.keys(positions).find(key => positions[key] === radioCommand);
            const styles = {
                WebkitClipPath: this.clipPathForPosition(pos),
                transition: TRANSITION + 's cubic-bezier(0.86, 0, 0.07, 1)',
            };

            return <div key={`rect-${index}`} style={styles} className={`rect ${radioCommand}`} />;
        });
    }


    clipPathForPosition(position) {
        const SIZE = (100 - 2 * GUTTER) / 3;
        const VAR0 = '0% ';
        const VAR1 = `${SIZE + GUTTER}% `;
        const VAR2 = `${2 * SIZE + 2 * GUTTER}% `;

        switch (position) {
            case '1': return `inset(${VAR1}${VAR2}${VAR1}${VAR0} round 5%)`;
            case '2': return `inset(${VAR0}${VAR2}${VAR2}${VAR0} round 5%)`;
            case '3': return `inset(${VAR0}${VAR1}${VAR2}${VAR1} round 5%)`;
            case '4': return `inset(${VAR1}${VAR1}${VAR1}${VAR1} round 5%)`;
            case '5': return `inset(${VAR2}${VAR1}${VAR0}${VAR1} round 5%)`;
            case '6': return `inset(${VAR2}${VAR0}${VAR0}${VAR2} round 5%)`;
            case '7': return `inset(${VAR1}${VAR0}${VAR1}${VAR2} round 5%)`;
            default: return '';
        }
    }

    render() {
        const { size, center } = this.props;
        const wrapperClass = center ? 'sw-loader__wrapper sw-loader__wrapper--center' : 'sw-loader__wrapper';
        const styles = {
            width: size ? `${size}px` : `${DEF_SIZE}px`,
            height: size ? `${size}px` : `${DEF_SIZE}px`,
        };

        return (
            <div className='loaderContainer'>
                <div style={styles} className={wrapperClass}>
                    <div className="sw-loader__holder">
                        {this.renderTiles()}
                    </div>
                </div>
                {/* <h2>Loading Records ...</h2> */}
            </div>

        );
    }
}

export default Loader;
