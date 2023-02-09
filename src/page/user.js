import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {Pagination} from 'antd';
import {showInfo} from "../service/userService";

const User = () => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    let dataUser = useSelector(state => {
        return state.user.infoProfile.results
    })
    let chosePage = async (number) => {
        await setPage(number)
        await dispatch(showInfo(number))
    }
    useEffect(async () => {
        await dispatch(showInfo())
    }, [])
    return (
        <>
            <div>
                <center>
                    <h3>Profile</h3>
                </center>
                <table className="table">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Thumbnail Icon</th>
                    </tr>
                    </thead>
                    {dataUser && dataUser.map((item, index) => (
                        <tbody key={index}>
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{item.name.title} {item.name.first} {item.name.last}</td>
                            <td>{item.login.username}</td>
                            <td><img src={item.picture.thumbnail}/></td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <center>
                <Pagination defaultCurrent={6}
                            total={100}
                            defaultPageSize={10}
                            onChange={(page) => chosePage(page)}
                />
            </center>
        </>
    )
}
export default User;