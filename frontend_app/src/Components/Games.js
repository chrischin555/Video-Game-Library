import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Games = () => {
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://localhost:8081/games");
            //console.log(result);
            setGameData(result.data)
        } catch (err) {
            console.log("Error: " + err);
        }
    }

    {
        return (
            <div className="container">
                <h1>Games</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Game Title</th>
                            <th>Category</th>
                            <th>Date Released</th>
                            <th>Platform</th>
                            <th>Publisher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            gameData.map((game, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <Link to={`/games/${game.GameTitle.toLowerCase().replace(/\s/g, '')}`}>
                                                {game.GameTitle}
                                            </Link>
                                        </td>
                                        <td>{game.Category}</td>
                                        <td>{game.DateReleased}</td>
                                        <td>{game.Platform}</td>
                                        <td>{game.Publisher}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Games;