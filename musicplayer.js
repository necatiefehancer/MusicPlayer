
class MusicPlayer{
    
    constructor(musicList){
        this.musicList=musicList;
        this.playIndex=0;
    }
    next(){

        if(this.playIndex+1<this.musicList.length){
            this.playIndex++;
        }
        else{
            this.playIndex=0;
        }

    }
    previous(){
        if(this.playIndex>0){
            this.playIndex--;
        }
        else{
            this.playIndex=this.musicList.length-1;
        }
    }
    getMusic(){
        return this.musicList[this.playIndex];
    }
}