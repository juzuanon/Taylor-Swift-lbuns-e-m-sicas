let dados = [
    {
        titulo: "Taylor Swift (2006)",
        descricao: "O álbum de estreia de Taylor Swift, lançado em 2006, foi um marco na carreira da cantora e compositora. Nele, encontramos uma jovem Taylor, com apenas 16 anos, explorando temas como amor, desilusão e as complexidades dos relacionamentos adolescentes.",
        link: "https://open.spotify.com/intl-pt/album/5eyZZoQEFQWRHkV2xgAeBw?si=xvVlNStdQ6aFqUpVLQpPjQ",
        tags: "tim mcgraw picture to burn teardrops on my guitar place in this world cold as you the outside tied together with a smile stay beautiful should've said no i'm only me when i'm with you invisible mary's song our song a perfectly good heart"
    },
    {
        titulo: "Fearless (2021) (Taylor's version)",
        descricao: "Fearless, o segundo álbum de estúdio de Taylor Swift, lançado em 2008, consolidou a cantora como uma das maiores estrelas da música country e pop. Com um som mais maduro e letras ainda mais envolventes, o álbum conquistou o público e a crítica, rendendo à Taylor Swift diversos prêmios, incluindo o Grammy de Álbum do Ano.",
        link: "https://open.spotify.com/intl-pt/album/4hDok0OAJd57SGIT8xuWJH?si=B91zTaIrQeWPifeOsu10_Q",
        tags: "fearless fifteen love story hey stephen white horse you belong with me breathe colbie caillat tell me why you all over me maren morris mr perfectly fine forever & always the best day change jump then fall untouchable we were happy that's when keith urban don't you bye bye baby"
    },
    {
        titulo: "Speak now (2023) (Taylor's version)",
        descricao: "Speak Now, o terceiro álbum de estúdio de Taylor Swift, lançado em 2010, marca uma nova fase na carreira da cantora. Com um som mais pop e letras mais complexas, o álbum explora temas como amor, desilusão, vingança e amadurecimento.",
        link: "https://open.spotify.com/intl-pt/album/5AEDGbliTTfjOB8TSm1sxt",
        tags: "mine sparks fly back to december speak now dear john mean the story of us never grow up enchanted better than revenge innocent haunted last kiss long live ours superman eletric touch fall out boy when emma falls in love i can see you castles crumbling hayley willians foolish one timeless"
    },
    {
        titulo: "Red (2021)(Taylor's version)",
        descricao: "Marcado pela transição de Taylor Swift para o pop, é um álbum eclético que mistura elementos do country, pop e rock. As músicas falam sobre paixões intensas, relacionamentos complicados e a dor da perda.",
        link: "https://open.spotify.com/intl-pt/album/6kZ42qRrzov54LcAk4onW9?si=itt-Z5kmRAC93RqBadkYTg",
        tags: "state of grace red treachorous i knew you were trouble all to well 22 i almost do we are never ever getting back together stay the last time holy ground sad beautiful tragic the lucky one everything has changed starlight begin again the moment i knew come back be here girl at home ronan better man nothing new babe message in a bottle i bet you think about meforever winter run the very first night"
    },
    {
        titulo: "1989 (2023) (Taylor's version)",
        descricao: "Um marco na carreira de Taylor Swift, é um álbum completamente pop, com influências dos anos 80. As músicas são mais dançantes e falam sobre fama, amor, e a busca pela felicidade.",
        link: "https://open.spotify.com/intl-pt/album/1o59UpKw81iHR0HPiSkJR0?si=snG0cZPvRpm5XJZwee_Bnw",
        tags: "welcome to new york blak space style out of the woods all you had to do was stay shake it off i wish you would bad blood kendrick lamar this love wildest dreams how you get the girls this live i know places clean wonderland you are in love new romantics slut suburban legends say don't go now thar we don't talk suburban legends is it over now bad blood"
    },
    {
        titulo: "Reputation (2017)",
        descricao: "Após um período de controvérsia, Taylor Swift retorna com um álbum mais escuro e sensual. As músicas falam sobre vingança, amor e a construção de uma nova imagem.",
        link: "https://open.spotify.com/intl-pt/album/6DEjYFkNZh67HP7R9PSZvv?si=Xm2bf9IyR9aFqK4K9ATB6Q",
        tags: "ready for it end game i did something bad don't blame me delicate look what you made me do so it goes gorgeous getaway car king of my heart dancing with our hands tied dress this is why we can't have nice things call it waht you want new year's day"
    },
    {
        titulo: "Lover (2019)",
        descricao: " Um álbum mais romântico e colorido, marca uma nova fase na carreira de Taylor Swift. As músicas falam sobre amor, felicidade e a celebração da vida.",
        link: "https://open.spotify.com/intl-pt/album/1NAmidJlEaVgA3MpcPFYGq?si=lzyqKQuMSo6iVFX96yCa4Q",
        tags: "i forgot that you existed cruel cummer lover the man the archer i think he knows miss americana  the heartbreak prince paper rings cornelia street death by a thousand cuts soon you'll get better the chicks false god you need to calm down afterglow me it's nice to have a friend daylight"
    },
    {
        titulo: "Folklore (2020)",
        descricao: "Um álbum surpresa lançado durante a pandemia, é um álbum conceitual com sonoridade indie folk. As músicas exploram temas como solidão, nostalgia e a passagem do tempo.",
        link: "https://open.spotify.com/intl-pt/album/1pzvBxYgT6OVwJLtHkrdQK?si=b5LjtPuKTxOgfNcGIi9iPA",
        tags: "the 1 cardigan the last great american dynasty exile bon inver my tears ricoochet mirrorball seven august this is me trying illicit affair mad woman epiphany betty peace hoax the lakes"
    },
    {
        titulo: "Evermore (2020)",
        descricao: "Uma continuação de Folklore, explora ainda mais o universo criado no álbum anterior. As músicas são mais introspectivas e falam sobre amor, perda e a busca por significado.",
        link: "https://open.spotify.com/intl-pt/album/6AORtDjduMM3bupSWzbTSG?si=N8sA-ID2QT2h1ze9261ppA",
        tags: "willow champagne problems gold rush tis the damn season tolerate ir no body no crime happiness dorothea coney island the national ivy cowboy like me long story short marjorie closure evermore bon iver right where you left me i'ts time to go"
    },
    {
        titulo: "Midnights (2022)",
        descricao: "Um álbum que explora os pensamentos e emoções da noite, é um álbum pop com elementos eletrônicos. As músicas falam sobre insônia, ansiedade e a complexidade dos relacionamentos.",
        link: "https://open.spotify.com/intl-pt/album/3lS1y25WAhcqJDATJK70Mq?si=R8ORcgDxQle-DIa1-DmZIg",
        tags: "lavender haze maroon anti hero snow on the beach lana del rey you's on your own kid midnight rain question vigilant shit labyrinth karma sweet nothing mastermind the great war bigger than the whole sky paris high infidelity glitch woul've could've should've dear reader you are losing me hits different"
    },
    {
        titulo: "The tortured poets department (2024)",
        descricao: "O álbum foilançado em abril de 2024 e quebrou diversos recordes, tornando-se um dos álbuns mais bem-sucedidos da carreira da cantora. Com 31 faixas inéditas, o álbum apresenta uma sonoridade diversificada e letras introspectivas, explorando temas como amor, perda e a complexidade da vida.",
        link: "https://open.spotify.com/intl-pt/album/5H7ixXZfsNMGbIE5OBSpcb?si=Nb4-ibfZT4OUrJHiac-Img",
        tags: "fortnight post malone the tortured poets department my boy only break his favorite toys down bad so long london but daddy i love him fresh out the slammer florida florence guilty as sin who's afraid of little old me i can fix him loml i can do it with a broken heart the smallest man who ever lived the alchemy clara bow the black dog imgonnagetyouback the albatross clhoe or sam or sophia or marcus how did it end so high scholl i hate it here thank you aimee i look in people's windoes the prophecy cassandra peter the bolter robin the manuscript"
    }
];