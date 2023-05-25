export default function playersInfo({ players }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Nacionalidade</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map((player, index) => (
              <tr key={ `${index} - ${player.name}` }>
                {
                  Object.values(player).map((value, ind) => (
                    <td key={ `${ind} - ${value}` }>
                      { value }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
