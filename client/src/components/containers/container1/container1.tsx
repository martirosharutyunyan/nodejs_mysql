import React, { useState, useEffect, useMemo, useRef, memo, FC } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../redux/actions/action";
// import Media from '../../media';
import "./container1.scss";
import axios from "axios";
import "react-scroll";
//types
import { dataFromNodeType, dataType, input, Redux } from "../../types/types";

let Container1: FC = () => {
    const [state, setState] = useState<dataType>({
        email: "",
        password: "",
    });
    const [array, setarray] = useState<dataFromNodeType[]>([]);
    const [load, setload] = useState<boolean>(true);
    const getUsers = async (): Promise<void> => {
        let postToBack = await axios.post("/getUsers");
        setarray(postToBack.data);
    };
    const change = (e: input): void => {
        setState({ ...state, [e.target.id]: e.target.value });
    };
    const click = async (): Promise<void> => {
        setload(false)
        let postToBack = await axios.post("/sendUser", {
            email: state.email,
            password: state.password,
        });
        setload(true)
        console.log(postToBack.data)
    };
    const deleteItem = async (e: dataFromNodeType): Promise<void> => {
        setload(false)
        await axios.post("/delete", {
            id: e.id,
        });
        setload(true)
    };
    const tests =async ():Promise<void> => {
        let postToBack = await axios.post('/test')
        console.log(postToBack.data)
        console.log(postToBack.data.length)
    }
    useEffect((): void => {
        getUsers();
    }, [load]);
    if (!load) {
        return (
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }
    return (
        <>
            <section className="container1">
                <input
                    onChange={change}
                    value={state.email}
                    placeholder="email"
                    id="email"
                    type="text"
                />
                <input
                    onChange={change}
                    value={state.password}
                    placeholder="password"
                    id="password"
                    type="text"
                />
                <button onClick={click}>click</button>
            </section>
            {array.map(
                (elem: dataFromNodeType, i: number): JSX.Element => {
                    return (
                        <div key={elem.id} style={{border:'1px solid black'}}>
                            <p className='p'>{elem.id}</p>
                            <p className='p'>{elem.email}</p>
                            <button onClick={deleteItem.bind(null, elem)}>
                                click for delete
                            </button>
                        </div>
                    );
                },
            )}
        </>
    );
};

export default Container1 = memo(Container1);
