import { assert } from 'chai';
import axios from 'axios';

describe('get_handler function', function(){
    it('The server should return 204', function(){
        return axios.get('http://localhost:8080').then(res=>{
            assert( res.status === 204 && res.statusText === 'No Content' );
        }).catch(e=>{
            assert(false);
        });
    });
});
